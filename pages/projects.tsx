import Card from "../components/Card";
import Head from "next/head";
import CardContainer from "../components/CardContainer";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

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
                    <Card title="Equity Curve Simulator" link="https://equity-curve-simulator.vercel.app/" iconList={[{ icon: <SiNextdotjs />, tooltip: 'Next.js' }, { icon: <SiReact />, tooltip: 'React' }, { icon: <SiTailwindcss />, tooltip: 'TailwindCSS' }]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Card>
                    <Card title="Price Per Wing" link="https://priceperwing.vercel.app/" iconList={[{ icon: <SiHtml5 />, tooltip: 'HTML' }, { icon: <SiCss3 />, tooltip: 'CSS' }, { icon: <SiJavascript />, tooltip: 'JavaScript' }]}>
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