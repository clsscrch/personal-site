import { MoonIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./Navbar";



const HomeProps = {}


export default function Home2(props: any): JSX.Element {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <>
            {/* <Navbar /> */}
            <section className='flex flex-col justify-center items-center py-2'>
                <Image priority src='/me.png' width={500} height={500} className='rounded-full h-56 w-56' alt='A picture of me, Richard Li, in a red flannel in front of a brick wall' />
                <h1 className='text-5xl font-bold pt-2'>Hi, I&#x27;m Richard</h1>
                <h2 className='text-2xl font-bold'>I&#x27;m a software engineer</h2>

            </section>
            <section className='flex justify-center items-center space-x-10'>
                <a href='https://github.com/clsscrch' target='_blank' rel='noopener noreferrer'><Icon icon="logos:github-icon" width={26} height={26} className='cursor-pointer' /></a>
                <a href='https://www.linkedin.com/in/richard-li-b204aa16b/' target='_blank' rel='noopener noreferrer'><Icon icon="mdi:linkedin" width={32} height={32} /></a>
            </section>
        </>
    )


}