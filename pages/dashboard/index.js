'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBoxes, faHome, faNewspaper, faSignOut} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {router, useRouter} from "next/navigation";
import {logoutAuth} from "../form/auth/actions";
import {ButtonComponent} from "../components/Button/ButtonComponent";

export default function Login() {
    const router = useRouter()
    const onSubmit = async () => {
        await logoutAuth()
        router.push('/auth/login')
    }
    
    return(
        <>
            <div className="flex flex-col lg:flex-row relative w-full bg-gray-200 min-h-screen">
                <div className="h-10 lg:h-0 w-full lg:w-80 relative">
                    <div className="fixed z-40 flex lg:h-full w-full lg:w-auto">
                        <div className="lg:hidden bg-white flex p-2 w-full h-10">
                            <ButtonComponent text={(<FontAwesomeIcon icon={faBars}/>)}/>
                        </div>
                        <div
                            className="bg-black/50 lg:bg-black/0 z-50 backdrop-blur-sm lg:backdrop-blur-none absolute lg:static overflow-hidden h-screen lg:h-auto w-screen lg:w-auto transition-all ease-in-out ">
                            <div className="p-3 h-full">
                                <div
                                    className="bg-white h-full md:w-80 lg:w-full flex p-4 lg:pt-8 flex-col rounded-2xl shadow-md transition-all ease-in-out">
                                    <div className="h-10 lg:hidden ml-auto">
                                        <ButtonComponent icon="faXmark"></ButtonComponent>
                                    </div>
                                    <div className="flex gap-2 p-3 rounded-lg border-2">
                                        <svg
                                            className="h-12 w-12 rounded-xl lg:m-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-label="Svelte"
                                            role="img"
                                            viewBox="0 0 512 512"
                                            fill="#000000"
                                        >
                                            <g id="SVGRepo_bgCarrier"/>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                            />
                                            <g id="SVGRepo_iconCarrier"
                                            >
                                                <rect width="512" height="512" rx="15%" fill="#ff3e00"/>
                                                <path
                                                    fill="#ffffff"
                                                    d="M395 115c-35-51-106-66-157-34l-89 57a103 103 0 00-46 69 108 108 0 0010 69 103 103 0 00-15 39 109 109 0 0019 82c35 51 106 66 157 34l89-57a103 103 0 0046-69 108 108 0 00-10-69 103 103 0 0015-39 109 109 0 00-19-82"
                                                />
                                                <path
                                                    fill="#ff3e00"
                                                    d="M230 402a71 71 0 01-77-28 66 66 0 01-11-50 62 62 0 012-8l2-5 5 3a115 115 0 0035 17l3 1v4a20 20 0 003 13 21 21 0 0023 9 20 20 0 006-3l89-57a19 19 0 008-12 20 20 0 00-3-15 21 21 0 00-23-9 20 20 0 00-5 3l-34 21a65 65 0 01-19 8 71 71 0 01-76-28 66 66 0 01-11-50 62 62 0 0128-41l89-57a65 65 0 0118-8 71 71 0 0177 28 66 66 0 0111 50 63 63 0 01-2 8l-2 5-5-3a115 115 0 00-35-17l-3-1v-4a20 20 0 00-3-13 21 21 0 00-23-9 20 20 0 00-6 3l-89 57a19 19 0 00-8 12 20 20 0 003 15 21 21 0 0023 9 20 20 0 005-3l34-21a65 65 0 0119-8 71 71 0 0176 28 66 66 0 0111 50 62 62 0 01-28 41l-89 57a65 65 0 01-18 8"
                                                />
                                            </g
                                            >
                                        </svg
                                        >
                                        <div className="lg:m-auto h-full flex py-0.5 flex-col justify-between">
                                            <div>
                                                <div className="text-sm font-medium leading-3">Ricko Tiaka</div>
                                                <div className="text-xs font-light leading-4">ricko_tiaka@example.com
                                                </div>
                                            </div>
                                            <a href="/profile" className="text-xs text-blue-500 underline">View
                                                profile</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 h-full w-full text-left overflow-y-auto my-10">
                                        <div className="w-full">
                                            <div className={'h-5 gap-5 flex'}>
                                                <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-5"/>
                                                <div>Dashboard</div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className={'h-5 gap-5 flex'}>
                                                <FontAwesomeIcon icon={faNewspaper} className="w-5 h-5 mr-5"/>
                                                <div>Form</div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className={'h-5 gap-5 flex'}>
                                                <FontAwesomeIcon icon={faBoxes} className="w-5 h-5 mr-5"/>
                                                <div>Widget</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={onSubmit} className="text-gray-600 hover:text-orange-600 font-semibold py-1">
                                            <div className="w-full">
                                                <div className={'h-5 gap-5 flex'}>
                                                <FontAwesomeIcon icon={faSignOut} className="w-5 h-5 mr-5"/>
                                                    <div>Logout</div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-3 rounded-3xl p-2 w-full">
                    <div className="p-5">
                        sada
                    </div>
                </div>
            </div>
        </>
    )
}