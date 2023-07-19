import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const IconList = () => {
    return (
        <div className='flex gap-12'>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <SiLinkedin size={"2em"} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
                <SiGithub size={"2em"} />
            </a>
            <a href="mailto:" target="_blank" rel="noreferrer">
                <HiMail size={"2em"} />
            </a>

        </div>
    )
}

export default IconList;