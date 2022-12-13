export default function CardContainer({ children }: any): JSX.Element {
    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
        <div className="flex flex-wrap justify-center gap-3">
            {children}
        </div>
    )
}