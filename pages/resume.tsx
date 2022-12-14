import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { CgSpinner } from "react-icons/cg";
// import workerSrc from "../pdf-worker";
import Link from "next/link";
import Head from "next/head";

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const LoadingSpinner: React.FC = () => {
    return (
        <div className="animate-spin">
            <CgSpinner size={24} />
        </div>
    )
}


export default function Resume() {
    const [numPages, setNumPages] = useState(1);
    const [width, setWidth] = useState(NaN);
    const [height, setHeight] = useState(NaN);
    const [scale, setScale] = useState(0.65);

    const getScale = (): number => {
        return width < 768 ? 0.3 : 0.65;
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            setScale(getScale());
        }

        window.addEventListener('resize', handleResize);
        console.log('width', width)

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
        setNumPages(nextNumPages);
    }




    return (
        <>
            <Head>
                <title>Resume</title>
                <meta name="description" content="Richard's Resume" />
            </Head>

            <section className='flex flex-col justify-center items-center py-2 max-h-full'>
                <p className="text-sm italic text-end md:ml-56">Last Updated on: 01/2022</p>
                <div>
                    <Document file='/Resume Jan 2022.pdf' onLoadSuccess={onDocumentLoadSuccess} loading={<LoadingSpinner />}>
                        <Page pageNumber={1} scale={getScale()} renderTextLayer={false} renderAnnotationLayer={false} renderMode={'svg'} className='border border-black' loading={<LoadingSpinner />} />
                    </Document>
                </div>
                <button className="bg-slate-700 text-white p-2 rounded-md mt-4">
                    <Link href={'/Resume Jan 2022.pdf'} download target="_blank" rel="noopener noreferrer">
                        Download Resume
                        {/* <a download>Download Resume</a> */}
                    </Link>
                </button>
            </section>
        </>
    )
}