import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState('')

  return (
    <>
      <div className={`duration-100  ${theme}`} >
        <main className={`min-h-screen bg-beige dark:bg-slate-800 transition ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <div className='px-4 sm:px-24'>
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>)
}
