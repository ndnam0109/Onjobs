import Image from "next/image";
import {BuildingStorefrontIcon, GifIcon} from "@heroicons/react/20/solid";

export default function Header() {
    return (
        <>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <GifIcon className="w-12 h-12 text-white"> </GifIcon> <span className="text-2xl ml-2">OnJob</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <button type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Post Job
                        </button>
                        <button type="button"
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Connect Wallet
                        </button>
                    </div>
                </div>
            </nav>

        </>
    )
}
