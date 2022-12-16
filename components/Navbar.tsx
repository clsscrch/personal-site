import { MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(props: any): JSX.Element {

    const router = useRouter()
    let currentLocation = router.pathname

    return (
        <nav className='flex justify-between py-4 items-center sm:px-12 md:px-24'>
            <h1 className=''>{' '}</h1>
            <ul className='flex items-center space-x-4 ml-12 sm:space-x-8 md:ml-14'>
                <li>
                    {/* Home */}
                    {currentLocation === '/' ?
                        <Link href="/" className="text-slate-700 hover:text-slate-700 font-bold">
                            Home
                            <span className="block max-w-full duration-500 h-0.5 bg-slate-700"></span>
                        </Link> :
                        <Link href="/" className="group text-slate-700 transition duration-200 hover:text-slate-700 font-bold">
                            Home
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 group-hover:bg-slate-700"></span>
                        </Link>}
                </li>
                <li>
                    {/* Projects */}
                    {currentLocation === '/projects' ?
                        <Link href="/projects" className="text-slate-700 hover:text-slate-700 font-bold">
                            Projects
                            <span className="block max-w-full duration-500 h-0.5 bg-slate-700"></span>
                        </Link> :
                        <Link href="/projects" className="group text-slate-700 transition duration-200 hover:text-slate-700 font-bold">
                            Projects
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 group-hover:bg-slate-700"></span>
                        </Link>}

                </li>
                <li>
                    {/* Resume */}
                    {currentLocation === '/resume' ?
                        <Link href="/resume" className="text-slate-700 hover:text-slate-700 font-bold">
                            Resume
                            <span className="block max-w-full duration-500 h-0.5 bg-slate-700"></span>
                        </Link> :
                        <Link href="/resume" className="group text-slate-700 transition duration-200 hover:text-slate-700 font-bold">
                            Resume
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 group-hover:bg-slate-700"></span>
                        </Link>
                    }
                </li>
            </ul>
            <MoonIcon className='h-4 w-4 cursor-pointer mr-4' />
        </nav>
    )
}