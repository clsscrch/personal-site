import Link from "next/link"
import ToolTippedIcon from "./ToolTippedIcon"
import { BsBoxArrowUpRight } from "react-icons/bs"

export interface CardProps {
    children: string,
    title: string,
    link?: string,
    iconList?: IconListType[]
}

interface IconListType {
    icon: JSX.Element,
    tooltip?: string,
}


export default function Card({ title, link, iconList, children }: CardProps): JSX.Element {
    return (
        <div className="rounded-md border w-80 h-72 sm:w-96 sm:h-64 p-4 border-gray-900 relative dark:border-stone-300">
            <div className="flex justify-between pb-2 items-center">
                <h1 className="text-xl">{title}</h1>
                {link ? <Link href={link} rel="noopener noreferrer" target="_blank" className="pb-2"><BsBoxArrowUpRight className="cursor-pointer" size={18} /></Link> : <> </>}

            </div>
            <hr className="border-gray-500 rounded-sm " />
            <h2 className="text-md pt-2">
                {children}
            </h2>

            {iconList ?
                <div className="flex items-center justify-center">
                    <section className='flex flex-col justify-center items-center absolute bottom-4'>

                        <p className='text-xs font-bold pb-3'>Built With</p>
                        <ul className='flex items-center space-x-6'>
                            {iconList.map((icon, index) => {
                                return <ToolTippedIcon key={index} icon={icon.icon} tooltip={icon.tooltip} />
                            })}
                        </ul>
                    </section>
                </div>
                :
                <></>
            }


        </div>
    )
}