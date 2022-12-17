import Card from "../components/Card";
import Head from "next/head";
import CardContainer from "../components/CardContainer";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiAntdesign, SiGraphql, SiMongodb, SiTypescript } from "react-icons/si";

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
                    <Card title="Equity Curve Simulator" link="https://equity-curve-simulator.vercel.app/" iconList={[{ icon: <SiNextdotjs />, tooltip: 'Next.js' }, { icon: <SiReact />, tooltip: 'React' }, { icon: <SiTailwindcss />, tooltip: 'TailwindCSS' }]}>
                        A web app that simulates an equity curve based on the Monte Carlo method to determine the risk of a stock trade. Built with two of my friends.
                    </Card>
                    <Card title="Price Per Wing" link="https://priceperwing.vercel.app/" iconList={[{ icon: <SiHtml5 />, tooltip: 'HTML' }, { icon: <SiCss3 />, tooltip: 'CSS' }, { icon: <SiJavascript />, tooltip: 'JavaScript' }]}>
                        A for fun website that calculates the price per wing of a restaurant based on the number of wings and the price of the wings. Built with pure HTML, CSS, and JavaScript.
                    </Card>
                </CardContainer>

                {/* <CardContainer title="School/Educational Projects">
                    <Card title="Canny Edge Detector" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                    <Card title="Owner Community" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                </CardContainer> */}

            </section>
        </>
    )
}