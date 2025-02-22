import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={
                    'flex justify-between items-center px-1 w-full pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' 
                } 
            >
                Data
                <svg
                    className="w-4 h-4 ml-2 right-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                    <Link
                        href={route("data.pic")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Data PIC
                    </Link>
                    <Link
                        href={route("data.mitra")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Data Mitra
                    </Link>
                    <Link
                        href={route("data.project")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Data Project
                    </Link>
                    <Link
                        href={route("data.status_mitra")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >

                        Data Status Mitra
                    </Link>
                    <Link
                        href={route("data.status_telkom")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Data Status Telkom
                    </Link>
                </div>
            )}
        </div>
    );
}
