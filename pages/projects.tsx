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

            <section className='flex flex-col justify-center items-center py-2 pb-10'>
                <CardContainer title="Professional Projects">
                    <Card title="Pathways">
                        Hello
                    </Card>
                    <Card title="Owner Community">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                </CardContainer>

                <CardContainer title="Personal Projects">
                    <Card title="Indeed Job Data Analyzer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                    <Card title="Price Per Wing">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                </CardContainer>

                <CardContainer title="School/Educational Projects">
                    <Card title="Canny Edge Detector" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                    <Card title="Owner Community" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                </CardContainer>

            </section>
        </>
    )
}