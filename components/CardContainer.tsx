interface CardContainerProps {
    children: JSX.Element | JSX.Element[],
    title: string
}

export default function CardContainer({ children, title }: CardContainerProps): JSX.Element {
    return (
        <>
            <h2 className='text-2xl md:text-3xl font-bold pt-2'>
                {title}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
                {children}
            </div>
        </>
    )
}