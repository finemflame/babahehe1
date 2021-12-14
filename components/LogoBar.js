import Link from "next/link"

export default function LogoBar({menuItems}) {
    return (
        <>
            <div className="mx-auto w-11/12 px-4 py-8 flex justify-between items-center">
                <Link href={`/`}>
                    <a>
                        <div className="flex items-center">
                            <div className="w-8 h-8 p-2 rounded-md bg-white shadow-logo text-white font-poppins text-center leading-none font-bold rotate-45">B!</div>
                            <div className="font-poppins font-bold text-gray-900 text-lg ml-6">THEBLOG</div>
                        </div>
                    </a>
                </Link>
                <div className="font-poppins text-sm">
                    <ul>
                        {menuItems.map((item)=>{
                            return (
                            <Link href={item.url} key={item.label}>
                                <a><li className="inline p-2">{item.label}</li></a>
                            </Link>)
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}