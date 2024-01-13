'use client'
import React, {Component} from "react";
import Image from "next/image";
import ButtonComponent from "../Button/ButtonComponent";
export default class CtaComponent extends Component {
    render() {
        return (
            <div className={'w-full sm:p-10 bg-yellow-green'}>
                <div className={'flex relative h-56 sm:h-96 sm:rounded-2xl overflow-hidden'}>
                    <Image className={'opacity-80 z-0 object-cover'} width={3000} height={3000}
                           src={'/image/cta-img.jpeg'} alt={'cta'}/>
                    <div className={'absolute flex w-full h-full'}>
                        <div className={'m-auto flex flex-col gap-5'}>
                            <div className={' m-auto text-xs sm:text-4xl font-bold text-yellow-400 text-center'}>
                                Wujudkan rumah impian anda sekarang!
                                <p></p>
                            </div>
                            <ButtonComponent text={"Daftar Sekarang"}
                                             color={'bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-300  hover:scale-105 text-emerald-700 text-md sm:text-xl font-bold'}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}