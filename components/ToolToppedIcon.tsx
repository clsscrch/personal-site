interface IconProps {
    icon: JSX.Element,
    tooltip?: string,
}

export default function ToolTippedIcon({ icon, tooltip }: IconProps): JSX.Element {
    return (
        <>
            <div className="group flex flex-col items-center justify-center">
                {tooltip ?
                    <span className="transition-all duration-500 scale-0 group-hover:scale-100 absolute bg-gray-700 text-white p-2 rounded-md -mt-20">
                        {tooltip}
                    </span> : <span></span>}

                <div className="text-2xl">{icon}</div>
            </div>
        </>
    )
}
