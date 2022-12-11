import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Head } from 'next/document'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <main className='min-h-screen bg-beige'>
        <Navbar />
        <div className='px-24'>
          <Component {...pageProps} />
        </div>
      </main>
    </>)
}
