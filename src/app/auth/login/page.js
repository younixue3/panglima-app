'use client'
import {CardComponent} from "@/components/Card/CardComponent";
import Image from "next/image";
import Link from "next/link";
import {useForm} from "react-hook-form";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faWindows} from "@fortawesome/free-brands-svg-icons";
import {ButtonComponent} from "@/components/Button/ButtonComponent";
import {storeToken} from "@/form/auth/actions";
import {fstoreToken} from "@/form/auth/DaftarForm/sync";
import {Router} from "next/navigation";
import {useRouter} from "next/navigation";
// import {Router, useRouter} from "next/router";

export default function Login() {
    const router = useRouter()
    // async function authToken(data) {
    //     'use server'
    //     cookies().set({
    //         token: data
    //     })
    // }
    function LoginForm() {

        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()

        const OnSubmit = async (data) => {
            const fest = await axios
                .post('https://api-nub.friandy.web.id/api/customer/login', data)

           await storeToken(fest.data.data.token)
            router.push('/dashboard')
        }

        return (
            <>
                <form id={'loginForm'} name={'loginForm'} onSubmit={handleSubmit(OnSubmit)}
                      className={'grid grid-cols-2 gap-4'}>
                    <h1 className={'text-3xl font-bold'}>Login</h1>
                    <div className={'text-xs w-full h-full flex'}>
                        <div className={'ml-auto'}>
                            <span className={'block m-auto'}>Belum punya akun?</span>
                            <Link className={'text-blue-400'} href={'/auth/daftar'}>Daftar</Link>
                        </div>
                    </div>
                    <div className={'col-span-2 h-16'}>
                        <label className={'text-sm font-light text-gray-700'}>Nomor WA</label>
                        <input {...register('whatsapp')}
                               className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        </input>
                    </div>
                    <div className={'col-span-2 h-16'}>
                        <label className={'text-sm font-light text-gray-700'}>Password</label>
                        <input type={'password'} {...register('password')}
                               className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        </input>
                    </div>
                </form>
                <div className={'flex relative h-14'}>
                    <div className={'border m-auto h-0 w-full'}></div>
                    <div className={'absolute flex gap-3 justify-center w-full h-full'}>
                        <button
                            className={'bg-white active:bg-gray-300 w-8 h-8 p-1.5 my-auto border shadow rounded-md transition-all duration-100'}>
                            <FontAwesomeIcon className={'text-red-700'} icon={faGoogle}/>
                        </button>
                        <button
                            className={'bg-white active:bg-gray-300 w-8 h-8 p-1.5 my-auto border shadow rounded-md transition-all duration-100'}>
                            <FontAwesomeIcon className={'text-blue-600'} icon={faFacebook}/>
                        </button>
                        <button
                            className={'bg-white active:bg-gray-300 w-8 h-8 p-1.5 my-auto border shadow rounded-md transition-all duration-100'}>
                            <FontAwesomeIcon className={'text-blue-400'} icon={faWindows}/>
                        </button>
                    </div>
                </div>
                <div className={''}>
                    <ButtonComponent form={'loginForm'} color={'bg-primary w-full py-2'} text={'Login'}/>
                </div>
            </>
        )
    }

    return (
        <div className={'flex relative h-screen w-screen'}>
            <div className={'w-full'}>
                <div className={'h-1/2'}>
                    <div className={'hidden w-2/3 gap-5 px-8 lg:flex'}>
                        <div className={'m-auto'}>
                            <h1 className={'text-xl font-light text-yellow-400'}>Selamat datang di <span
                                className={'block text-3xl font-bold uppercase'}>Panglima Propertindo</span></h1>
                            <div className={'m-auto w-96 font-light text-sm text-white mt-5'}>
                                Menemukan Rumah Impian Anda dalam Keindahan dan Kenyamanan. Properti Berkualitas Tinggi
                                Sesuai Prinsip Syariah. Temukan Kesejahteraan Hidup di Setiap Sudut Rumah Anda
                            </div>
                        </div>
                        <Image className={'h-96 m-auto object-contain'} width={300} height={600}
                               src={'/image/3d-hygge-man-and-young-woman-working.png'} alt={'Illustration from OUCH!'}/>
                    </div>
                </div>
                <div className={'h-1/2 w-full bg-yellow-400'}></div>
            </div>
            <div
                className={'absolute h-96 sm:w-96 left-0 top-0 bottom-0 right-0 lg:left-auto lg:top-non m-auto lg:right-20'}>
                <CardComponent title={(<Link href={''} className="top-0 left-0 z-10">
                    <Image className={'m-auto'} width={125} height={100} src={'/logo.png'} alt={'logo panglima'}/>
                </Link>)}>
                    <div className={'p-5'}>
                        <LoginForm/>
                    </div>
                </CardComponent>
            </div>
        </div>
    )
}