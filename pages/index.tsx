import Head from 'next/head'
import Image from 'next/image'
import { MoonIcon } from '@heroicons/react/24/solid'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router'
import { useState } from 'react';
import ToolTippedIcon from '../components/ToolTippedIcon';
import { SiGithub, SiLinkedin, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import Link from 'next/link';

export default function Home() {



  return (
    <div>
      <Head>
        <title>Hi, I&#x27;m Richard Li</title>
        <meta name="description" content="Welcome to my website!" />
      </Head>

      <section className='flex flex-col justify-center items-center py-2'>
        <Image priority src='/me.png' width={500} height={500} className='rounded-full h-28 w-28 md:h-56 md:w-56' alt='A picture of me, Richard Li, in a red flannel in front of a brick wall' />
        <h1 className='text-xl md:text-5xl font-bold pt-2 dark:text-stone-300'>Hi, I&#x27;m Richard</h1>
        <h2 className='text-md md:text-2xl font-bold dark:text-stone-300'>I&#x27;m a software engineer</h2>
      </section>


      <section className='flex justify-center items-center space-x-10 dark:text-stone-300' >
        <Link href='https://github.com/clsscrch' target='_blank' rel='noopener noreferrer'><SiGithub size={24} className='cursor-pointer' /> </Link>
        <Link href='https://www.linkedin.com/in/richard-li-b204aa16b/' target='_blank' rel='noopener noreferrer'><SiLinkedin size={24} className='cursor-pointer' /></Link>
      </section>

      <section className='flex flex-col justify-center items-center pt-12'>
        <p className='text-xl font-bold pb-3 dark:text-stone-300'>Built With</p>
        <ul className='flex items-center space-x-6 dark:text-stone-300'>
          <ToolTippedIcon icon={<SiNextdotjs />} tooltip={'Next.js'} />
          <ToolTippedIcon icon={<SiReact />} tooltip={'React'} />
          <ToolTippedIcon icon={<SiTypescript />} tooltip={'TypeScript'} />
          <ToolTippedIcon icon={<SiTailwindcss />} tooltip={'TailwindCSS'} />
        </ul>

      </section>

    </div >
  )
}
