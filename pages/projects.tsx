import Card from "../components/Card";
import Head from "next/head";
import CardContainer from "../components/CardContainer";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiAntdesign, SiGraphql, SiMongodb, SiTypescript, SiPython, SiPostgresql, SiPrisma, SiExpress, SiSqlite, SiPreact, SiFlask } from "react-icons/si";
import { IoFlowerOutline } from "react-icons/io5";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="My projects consisting of professional, personal, and educational " />
            </Head>

            <section className='flex flex-col justify-center items-center pb-6 dark:text-stone-300'>
                <CardContainer title="Professional Projects">
                    <Card title="Pathways" iconList={[{ icon: <SiReact />, tooltip: 'React' }, { icon: <SiAntdesign />, tooltip: 'Ant Design' }, { icon: <SiTailwindcss />, tooltip: 'TailwindCSS' },
                    { icon: <SiGraphql />, tooltip: 'GraphQL' }, { icon: <SiMongodb />, tooltip: 'MongoDB' }, { icon: <SiTypescript />, tooltip: 'TypeScript' }]}>
                        A web app that allows International Medical Graduates to get their ECFMG certification, which will allow them to compete for U.S. graduate medical education positions. Built during my time as a Software Engineer Co-op at ECFMG.
                    </Card>
                    <Card title="Owner Community" iconList={[{ icon: <SiReact />, tooltip: 'React' }, { icon: <SiAntdesign />, tooltip: 'Ant Design' }, { icon: <SiTailwindcss />, tooltip: 'TailwindCSS' },
                    { icon: <SiGraphql />, tooltip: 'GraphQL' }, { icon: <SiMongodb />, tooltip: 'MongoDB' }, { icon: <SiTypescript />, tooltip: 'TypeScript' }]}>
                        A Content Management System (CMS) that allows owners within a community to manage their properties. Built during my time as a Software Engineer Co-op at ECFMG.
                    </Card>
                </CardContainer>

                <CardContainer title="Personal Projects">
                    <Card title="Equity Curve Simulator" link="https://equity-curve-simulator.vercel.app/" iconList={[{ icon: <SiNextdotjs />, tooltip: 'Next.js' }, { icon: <SiReact />, tooltip: 'React' }, { icon: <SiTailwindcss />, tooltip: 'TailwindCSS' }, { icon: <IoFlowerOutline />, tooltip: 'DaisyUI' }]}>
                        A web app that simulates an equity curve based on the Monte Carlo method to determine the risk of a stock trade. Built with two of my friends.
                    </Card>
                    <Card title="Seam Carver" iconList={[{ icon: <SiPreact />, tooltip: 'Preact' }, { icon: <SiFlask />, tooltip: 'Flask' }]}>
                        A web app that implements the seam carving algorithm for content aware image resizing. It allows users to upload a photo and generate a resized version of the photo.
                    </Card>
                    <Card title="Price Per Wing" link="https://priceperwing.vercel.app/" iconList={[{ icon: <SiHtml5 />, tooltip: 'HTML' }, { icon: <SiCss3 />, tooltip: 'CSS' }, { icon: <SiJavascript />, tooltip: 'JavaScript' }]}>
                        A for fun website that calculates the price per wing of a restaurant based on the number of wings and the price of the wings. Built with pure HTML, CSS, and JavaScript.
                    </Card>
                </CardContainer>

                <CardContainer title="School/Educational Projects">
                    <Card title="Indeed Job Data Analyzer" iconList={[{ icon: <SiNextdotjs />, tooltip: 'Next.js' }, { icon: <SiReact />, tooltip: 'React' }, { icon: <SiAntdesign />, tooltip: 'Ant Design' }, { icon: <SiPostgresql />, tooltip: 'PostgreSQL' }, { icon: <SiPrisma />, tooltip: 'Prisma' }, { icon: <SiPython />, tooltip: 'Python' }]}>
                        A web app that analyzes job data from Indeed.com through scraping and other APIs. Built with a team of 6 for Senior Design.
                    </Card>
                    <Card title="Food Truck Caviar Clone" iconList={[{ icon: <SiReact />, tooltip: 'React' }, { icon: <SiExpress />, tooltip: 'Express.js' }, { icon: <SiSqlite />, tooltip: 'SQLite' }]} >
                        A web app that allows users to order food from food trucks. Built with a team of 2 for advanced web development. I worked on implementing the checkout functionality using Stripe and the user authentication.
                    </Card>
                </CardContainer>

            </section>
        </>
    )
}