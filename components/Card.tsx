import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"

export default function Card({ title }: any): JSX.Element {
    return (
        <div className="rounded-md border w-60 sm:w-80 sm:h-48 p-4 border-gray-900">
            <div className="flex justify-between pb-2">
                <h1 className="text-xl">{title}Indeed Job Data Scraper</h1>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 cursor-pointer" />
            </div>
            <hr className="border-gray-500 rounded-sm " />
            <h2 className="text-md pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </h2>


        </div>
    )
}