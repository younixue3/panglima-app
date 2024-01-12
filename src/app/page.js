export default function Home() {
    return (
        <div>
            <div className={"flex h-[35rem] sm:h-[45rem] bg-gradient-to-br from-emerald-500 via-emerald-800 via-50% to-yellow-400 to-100% w-full"}>
                <div className={'w-full overflow-hidden flex relative'}>
                    <Image className={"absolute transform bottom-0 -right-32 sm:right-0"} width={800}
                           height={100} src={'blob-haikei.svg'} alt={'blob-white'}/>
                    <Image className={"absolute transform top-0 left-0"} width={350}
                           height={100} src={'blob-haikei-white.svg'} alt={'blob'}/>
                </div>
                <div className={"absolute w-full"}>
                    <NavbarComponent/>
                    <div className={"sm:flex justify-center gap-5 sm:px-10 py-10"}>
                        <div className={'sm:hidden'}>
                            <Image
                                className={'rounded-lg h-40 block m-auto w-72 sm:h-32 sm:w-32 hover:scale-110 self-end justify-self-end object-cover object-center shadow-xl transition ease-in-out duration-700'}
                                width={1900} height={1900} src={'/image/img4.jpg'} alt={'image3'}/>
                        </div>
                        <div className={"w-full my-auto text-center sm:text-left"}>
                            <h1 className={'text-3xl sm:text-6xl font-bold text-yellow-400 m-auto mt-5 sm:mt-auto'}>Pure
                                Sharia <span
                                    className={'font-light'}>Property Developer</span></h1>
                            <p className={'text-white mx-auto sm:mx-0 my-3 sm:font-light text-xs sm:text-sm w-3/4'}>Menemukan
                                Rumah Impian Anda dalam Keindahan dan Kenyamanan. Properti Berkualitas Tinggi Sesuai
                                Prinsip Syariah. Temukan Kesejahteraan Hidup di Setiap Sudut Rumah Anda</p>
                            <div className={'flex sm:w-full mt-5'}>
                                <div className={'m-auto sm:m-0'}>
                                    <ButtonComponent text={"Daftar Sekarang & Beli NUB"}
                                                     color={'bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-300  text-emerald-700 text-md font-bold'}/>
                                </div>
                            </div>
                        </div>
                        <div className={"hidden sm:grid w-full grid-cols-3 gap-5"}>
                            <Image
                                className={'rounded-lg h-10 w-10 sm:h-32 sm:w-32 hover:scale-150 self-end justify-self-end object-cover object-center shadow-xl transition ease-in-out duration-700'}
                                width={1900} height={1900} src={'/image/img2.jpg'} alt={'image1'}/>
                            <Image
                                className={'h-10 w-10 sm:h-56 sm:w-56 hover:scale-150 rounded-lg object-cover object-center shadow-xl transition ease-in-out duration-300'}
                                width={1900}
                                height={1900} src={'/image/img3.jpg'} alt={'image2'}/>
                            <Image
                                className={'rounded-lg h-10 w-10 sm:h-44 sm:w-44 hover:scale-150 self-end justify-self-start object-cover object-center shadow-xl transition ease-in-out duration-500'}
                                width={1900} height={1000} src={'/image/img4.jpg'} alt={'image3'}/>
                            <Image
                                className={'col-span-2 justify-self-end rounded-lg h-10 w-10 sm:h-72 sm:w-72 hover:scale-125 object-cover object-center shadow-xl transition ease-in-out duration-1000'}
                                width={1900} height={1900} src={'/image/img1.jpg'} alt={'image4'}/>
                            <Image
                                className={'rounded-lg h-10 w-10 sm:h-32 sm:w-32 hover:scale-150 justify-self-start object-cover object-center shadow-xl transition ease-in-out duration-700'}
                                width={1900} height={1900} src={'/image/img5.jpg'} alt={'image5'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={'grid grid-cols-2 sm:grid-cols-6 place-content-center p-5 px-5 sm:px-20 gap-5 bg-white'}>
                <CardComponent>
                    <div className={'p-1 sm:p-5'}>
                        <div className={'h-10 w-10 sm:h-20 sm:w-20 rounded-full m-auto bg-primary p-2 sm:p-5'}>
                            <FontAwesomeIcon icon={faMoneyBillWheat}/>
                        </div>
                        <h3 className={'text-xs sm:text-xl uppercase mt-3 text-black font-semibold text-center'}>Tanpa
                            Riba</h3>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className={'p-1 sm:p-5'}>
                        <div className={'h-10 w-10 sm:h-20 sm:w-20 rounded-full m-auto bg-primary p-2 sm:p-5'}>
                            <FontAwesomeIcon icon={faBuildingColumns}/>
                        </div>
                        <h3 className={'text-xs sm:text-xl uppercase mt-3 text-black font-semibold text-center'}>Tanpa
                            KPR Bank</h3>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className={'p-1 sm:p-5'}>
                        <div className={'h-10 w-10 sm:h-20 sm:w-20 rounded-full m-auto bg-primary p-2 sm:p-5'}>
                            <FontAwesomeIcon icon={faHouseLock}/>
                        </div>
                        <h3 className={'text-xs sm:text-xl uppercase mt-3 text-black font-semibold text-center'}>Tanpa
                            Sita</h3>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className={'p-1 sm:p-5'}>
                        <div className={'h-10 w-10 sm:h-20 sm:w-20 rounded-full m-auto bg-primary p-2 sm:p-5'}>
                            <FontAwesomeIcon icon={faMoneyBillTrendUp}/>
                        </div>
                        <h3 className={'text-xs sm:text-xl uppercase mt-3 text-black font-semibold text-center'}>Tanpa
                            Denda</h3>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className={'p-1 sm:p-5'}>
                        <div className={'h-10 w-10 sm:h-20 sm:w-20 rounded-full m-auto bg-primary p-2 sm:p-5'}>
                            <FontAwesomeIcon icon={faTriangleExclamation}/>
                        </div>
                        <h3 className={'text-xs sm:text-xl uppercase mt-3 text-black font-semibold text-center'}>Tanpa
                            Penalti</h3>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className={'p-1 sm:p-5'}>
                        <div
                            className={'h-10 w-10 sm:h-20 sm:w-20 rounded-full flex m-auto bg-primary p-2 sm:p-5'}>
                            <FontAwesomeIcon className={'m-auto'} icon={faHandshakeSimple}/>
                        </div>
                        <h3 className={'text-xs sm:text-xl uppercase mt-3 text-black font-semibold text-center'}>Tanpa
                            Akad
                            Bermasalah</h3>
                    </div>
                </CardComponent>
            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-3 pb-5 sm:pb-0 bg-white px-10 gap-4'}>
                <div
                    className={'p-5 sm:p-10 z-10 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 hover:from-emerald-500 hover hover:to-emerald-900 hover:scale-110 text-white transition-all duration-300'}>
                    <div className={'h-14 w-14 sm:h-20 sm:w-20 rounded-lg flex bg-primary p-2'}>
                        <FontAwesomeIcon icon={faBullseye}/>
                    </div>
                    <h3 className={'text-xl sm:text-3xl font-bold leading-10 mt-3'}>Vision</h3>
                    <p className={'leading-4 sm:leading-7 text-xs sm:text-base font-light mt-5'}>
                        Menjadi Developer Property 100% Syariah kelas dunia, pengembang lingkungan yang baik
                        sebagai penyokong Peradaban Mulia
                    </p>
                </div>
                <div
                    className={'p-5 sm:p-10 z-10 bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-900 hover:from-emerald-500 hover hover:to-emerald-900 hover:scale-110 text-white transition-all duration-300\''}>
                    <div className={'h-14 w-14 sm:h-20 sm:w-20 rounded-lg flex bg-primary p-2'}>
                        <FontAwesomeIcon icon={faScroll}/>
                    </div>
                    <h3 className={'text-xl sm:text-3xl font-bold leading-10 mt-3'}>Mission</h3>
                    <ul className={'leading-4 sm:leading-7 text-xs sm:text-base font-light mt-5 list-disc list-inside'}>
                        <li>Memantaskan diri menjadi Orang Saleh yang mampu mengelola Perusahaan sesuai Syariat
                            dengan Standar Kelas Dunia
                        </li>
                        <li>Membangun proyek Property yang memberi Value terbaik bagi Pelanggan</li>
                        <li>Membentuk lingkungan yang berperan nyata dalam pembentukan Peradaban Mulia</li>
                        <li>Bertumbuh dengan Cepat dan berkesinambungan sehingga dapat mensejahterakan para
                            Pemangku Kepentingan
                        </li>
                    </ul>
                </div>
                <div
                    className={'p-5 sm:p-10 z-10 bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 hover:from-emerald-500 hover hover:to-emerald-900 hover:scale-110 text-white transition-all duration-300\''}>
                    <div className={'h-14 w-14 sm:h-20 sm:w-20 rounded-lg flex bg-primary p-2'}>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h3 className={'text-xl sm:text-3xl font-bold leading-10 mt-3'}>Core Value</h3>
                    <p className={'leading-4 sm:leading-7 text-xs sm:text-base font-light mt-5'}>
                        Syari, Innovative Creating Value, Nature Friendly, Commitment to Excellence,
                        Enterpreneurship Spirit with Discipline, Respect & Empathy, Effective & Efficient
                    </p>
                </div>
            </div>
            <CtaComponent/>
            <FooterComponent/>
        </div>
    )
}

import Image from "next/image";

import {NavbarComponent} from "@/components/Layout/NavbarComponent";
import {ButtonComponent} from "@/components/Button/ButtonComponent";
import {CardComponent} from "@/components/Card/CardComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBuildingColumns, faBullseye, faHandshakeSimple,
    faHouseLock,
    faMoneyBillTrendUp,
    faMoneyBillWheat, faScroll, faStar,
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";
import {CtaComponent} from "@/components/Cta/CtaComponent";
import {FooterComponent} from "@/components/Layout/FooterComponent";
