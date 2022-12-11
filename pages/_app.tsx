import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

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
