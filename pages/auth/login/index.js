'use client'
import Image from "next/image";
import Link from "next/link";
import CardComponent from "../../../components/Card/CardComponent";
import LoginForm from "../../../form/auth/LoginForm";

export default function Login() {
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