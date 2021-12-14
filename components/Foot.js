import Image from "next/image"

export default function Foot() {
    return (
        <footer className="flex justify-center items-center">
                <img src="/logo.svg" alt="logo" className="w-6 h-6"/>
                <p className="ml-2 text-sm font-poppins text-gray-900">B!THE BLOG © 2021 | All Rights Reserved</p>
        </footer>
    )
}