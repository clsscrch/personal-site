import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { CgSpinner } from "react-icons/cg";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

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

    function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
        setNumPages(nextNumPages);
    }

    const resumePath = '/Richard Li Resume April 2023.pdf';

    return (
        <>
            <Head>
                <title>Resume</title>
                <meta name="description" content="Richard's Resume" />
            </Head>

            <section className='flex flex-col justify-center items-center py-2 max-h-full dark:text-stone-300'>
                <p className="text-sm italic text-end md:ml-56">Last Updated on: 01/2023</p>
                <div>
                    <Document file={resumePath} onLoadSuccess={onDocumentLoadSuccess} loading={<LoadingSpinner />}>
                        <Page pageNumber={1} scale={0.6} renderTextLayer={false} renderAnnotationLayer={false} renderMode={'svg'} className='border border-black' loading={<LoadingSpinner />} />
                    </Document>
                </div>
                <button className="bg-slate-700 text-white p-2 rounded-md mt-4 ">
                    <Link href={resumePath} download target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <FiDownload />
                        <p className="ml-2 text-lg">Download Resume</p>
                    </Link>
                </button>
            </section>
            <Analytics />
        </>
    )
}