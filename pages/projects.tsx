import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Head from "next/head";

export default function Projects() {
    return (
        // <main className='px-8 min-h-screen bg-amber-100'>
        //     {/* <Navbar /> */}
        //     <section className='flex flex-col justify-center items-center py-2'>
        //         <h1 className='text-5xl font-bold pt-2'>Projects</h1>
        //         <h2 className='text-2xl font-bold'>I'm a software engineer</h2>
        //     </section>
        // </main>
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="My projects consisting of professional, personal, and educational " />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <Navbar /> */}
            <section className='flex flex-col justify-center items-center py-2 md:items-start'>
                <h2 className='text-4xl font-bold pt-2 items-center justify-center'>Professional Projects:</h2>
                {/* <h2 className='text-2xl font-bold'>ECFMG</h2> */}

                <h2 className='text-4xl font-bold pt-2'>
                    Personal Projects
                </h2>
                <Card />

                {/* <h1 className='text-4xl font-bold'>School Projects:</h1> */}
            </section>
        </>
    )
}