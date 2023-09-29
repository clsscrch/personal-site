import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import { Icon } from '@iconify-icon/react';

type IconType = {
    icon: JSX.Element,
    url: string,
    hoverText?: string
}

const IconList = () => {
    const links = [
        {
            icon: <Icon icon="mdi:linkedin" width="48" height="48" />,
            url: 'https://linkedin.com',
            hoverText: 'Connect on LinkedIn!'
        }
        // {
        //     icon: <SiLinkedin size={"2em"} />,
        //     url: 'https://linkedin.com',
        //     hoverText: 'Connect on LinkedIn!'
        // },
        // {
        //     icon: <SiGithub size={"2em"} />,
        //     url: 'https://github.com',
        //     hoverText: 'Check out my GitHub!'
        // },
        // {
        //     icon: <HiMail size={"2em"} />,
        //     url: 'mailto:',
        //     hoverText: 'Send me an email!'
        // }
    ]

    return (
        <div className='flex gap-12'>
            {links.map((link: Icon, index) => {
                return (
                    <div key={index} className="group flex flex-col items-center justify-center gap-8 text-gray-400 hover:text-sky-400 relative">
                        <span className="transition-all duration-500 scale-0 group-hover:scale-100 absolute bg-gray-600 text-sm whitespace-nowrap text-white p-2 rounded-md -top-12">
                            {link.hoverText}
                        </span>
                        <a href={link.url} target='_blank' rel='noreferrer' className='transition-all group-hover:-translate-y-2'>
                            {link.icon}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default IconList;