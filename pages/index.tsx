import Head from 'next/head'
import Image from 'next/image'
import { MoonIcon } from '@heroicons/react/24/solid'
import { Icon } from '@iconify/react';
import Home2 from '../components/alternative'
import { useRouter } from 'next/router'
import { useState } from 'react';
// import styles from '../styles/Home.module.css'

export default function Home() {



  return (
    <div>
      <Head>
        <title>Hi, I'm Richard Li</title>
        <meta name="description" content="Welcome to my website!" />
        {/* <link rel="icon" href="/test.png" /> */}
      </Head>

      <Home2 />

      {/* <main className='px-8 min-h-screen'>
        <nav className='flex justify-between py-4'>
          <h1 className=''></h1>
          <ul className='flex items-center space-x-4'>
            <li>
              <MoonIcon className='h-4 w-4 cursor-pointer' />
            </li>
            <li>
              <a className='rounded-md bg-red-300 p-1'>Resume</a>
            </li>
            <li>
              Contact Me
            </li>
          </ul>
        </nav>
        <section className='flex flex-col justify-center items-center py-2'>
          <Image src='/me.png' width={500} height={500} className='rounded-full h-56 w-56 md:rounded-none md:h-96 md:w-96' alt='A picture of me, Richard Li, in a red flannel in front of a brick wall' />
          <h1 className='text-5xl font-bold pt-2'>Hi, I'm Richard</h1>
          <h2 className='text-2xl font-bold'>I'm a software engineer</h2>
        </section>

        <section className='flex justify-center items-center space-x-10'>
          <a href='https://github.com/clsscrch' target='_blank' rel='noopener noreferrer'><Icon icon="logos:github-icon" width={26} height={26} className='cursor-pointer' /></a>
          <a href='https://www.linkedin.com/in/richard-li-b204aa16b/' target='_blank' rel='noopener noreferrer'><Icon icon="mdi:linkedin" width={32} height={32} /></a>
        </section>

      </main> */}


    </div >
  )
}
