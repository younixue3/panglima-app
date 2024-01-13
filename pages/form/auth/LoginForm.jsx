import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faWindows} from "@fortawesome/free-brands-svg-icons";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {ButtonComponent} from "../../components/Button/ButtonComponent";
import {loginHook} from "./DaftarForm/loginHook";

export function LoginForm() {
    const [error, setError] = useState('')
    const router = useRouter()

    const {mutate} = loginHook()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const OnSubmit = async (data) => {
        mutate(data)
        // try {
        //     const fest = await axios
        //         .post('https://api-nub.friandy.web.id/api/customer/login', data)
        //     await storeToken(fest.data.data.token)
        //     router.push('/dashboard')
        // } catch (e) {
        //     setError(e.response.data.message)
        // }
    }

    const AlertValidation = () => {
        if (error) {
            return (
                <div className={'col-span-2'}>
                    <div className={'rounded-lg bg-red-200 text-sm font-light p-3'}>{error}</div>
                </div>
            )
        }
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
                <AlertValidation/>
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