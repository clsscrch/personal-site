import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Head from "next/head";
import CardContainer from "../components/CardContainer";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="My projects consisting of professional, personal, and educational " />
            </Head>
            {/* <Navbar /> */}
            <section className='flex flex-col justify-center items-center py-2 '>
                <h2 className='text-4xl font-bold pt-2 items-center justify-center'>Professional Projects:</h2>
                {/* <h2 className='text-2xl font-bold'>ECFMG</h2> */}

                <h2 className='text-4xl font-bold pt-2'>
                    Personal Projects
                </h2>

                <CardContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                </CardContainer>

                {/* <h1 className='text-4xl font-bold'>School Projects:</h1> */}
            </section>
        </>
    )
}