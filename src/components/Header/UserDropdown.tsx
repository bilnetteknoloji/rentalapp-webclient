import {LifebuoyIcon, UserCircleIcon,UserPlusIcon} from "@heroicons/react/24/outline";
import {Fragment} from "react";
import {Link} from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";




const solutions = [
    {
        name: "Giriş Yapın",
        href: "/login",
        icon: UserCircleIcon,
    },
    {
        name: "Hesap Oluşturun",
        href: "/signup",
        icon: UserPlusIcon,
    },
];

const solutionsFoot = [
    {
        name: "Destek",
        href: "##",
        icon: LifebuoyIcon,
    },
];

export default function UserDropdown (){
    return(
        <div className="UserDropdown">
            <Popover className="relative">
                {({open})=>(
                    <>
                    <Popover.Button
                        className={` ${
                            open ? "" : "text-opacity-90"
                        } group p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative`}
                    >
                        <span className="w-2 h-2 bg-blue-500 absolute top-2 right-2 rounded-full"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                        </svg>
                    </Popover.Button>

                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 mt-4 -right-10 sm:right-0 sm:px-0">
                            <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white dark:bg-neutral-800 p-7">
                                    {solutions.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.href}
                                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                                <item.icon aria-hidden="true" className="w-6 h-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium ">{item.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <hr className="h-[1px] border-t border-neutral-300 dark:border-neutral-700" />
                                <div className="relative grid gap-6 bg-white dark:bg-neutral-800 p-7">
                                    {solutionsFoot.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                                <item.icon aria-hidden="true" className="w-6 h-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium ">{item.name}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}