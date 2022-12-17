import Link from "next/link";
import { useRouter } from "next/router";
import { HiMoon, HiSun } from "react-icons/hi";

interface NavbarProps {
    theme: string;
    setTheme: (theme: string) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps): JSX.Element {

    const router = useRouter()
    let currentLocation = router.pathname

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('')
        } else {
            setTheme('dark')
        }
    }

    return (
        <nav className='flex justify-between py-4 items-center sm:px-12 md:px-24'>
            <h1 className=''>{' '}</h1>
            <ul className='flex items-center space-x-4 ml-12 sm:space-x-8 md:ml-14'>
                <li>
                    {/* Home */}
                    {currentLocation === '/' ?
                        <Link href="/" className="nav-link">
                            Home
                            <span className="nav-span max-w-full"></span>
                        </Link> :
                        <Link href="/" className="nav-link group transition duration-200">
                            Home
                            <span className="nav-span max-w-0 group-hover:max-w-full transition-all"></span>
                        </Link>}
                </li>
                <li>
                    {/* Projects */}
                    {currentLocation === '/projects' ?
                        <Link href="/projects" className="nav-link">
                            Projects
                            <span className="nav-span max-w-full"></span>
                        </Link> :
                        <Link href="/projects" className="nav-link group transition duration-200">
                            Projects
                            <span className="nav-span max-w-0 group-hover:max-w-full transition-all"></span>
                        </Link>}

                </li>
                <li>
                    {/* Resume */}
                    {currentLocation === '/resume' ?
                        <Link href="/resume" className="nav-link">
                            Resume
                            <span className="nav-span max-w-full"></span>
                        </Link> :
                        <Link href="/resume" className="nav-link group transition duration-200">
                            Resume
                            <span className="nav-span max-w-0 group-hover:max-w-full transition-all"></span>
                        </Link>
                    }
                </li>
            </ul>
            {theme === 'dark' ? <HiSun size={20} className=' cursor-pointer mr-4 text-stone-300' onClick={toggleTheme} /> : <HiMoon size={20} className=' cursor-pointer mr-4' onClick={toggleTheme} />}


        </nav>
    )
}