import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faWindows} from "@fortawesome/free-brands-svg-icons";
import {ButtonComponent} from "@/components/Button/ButtonComponent";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {ListProvinsi} from "@/form/auth/DaftarForm/ListProvinsi";
import {ListKota} from "@/form/auth/DaftarForm/ListKota";
import {useState} from "react";
import {ListMarketing} from "@/form/auth/DaftarForm/ListMarketing";
import {ListProject} from "@/form/auth/DaftarForm/ListProject";
import {ListUnit} from "@/form/auth/DaftarForm/ListUnit";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export function DaftarForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        getFieldState,
        getValues
    } = useForm()

    const provinsi = register('province_id')

    const onSubmit = (data) => {
        axios
            .post('https://api-nub.friandy.web.id/api/customer/register', data)
            .catch((e) => console.log(e))
            .then((resp) => {
                window.location = resp.data.data.transaction.data.payment_url
            })
    }
    let [idKota, setIdKota] = useState()
    let idProject = watch('project_id')
    return (
        <>
            <form id={'loginForm'} name={'loginForm'} onSubmit={handleSubmit(onSubmit)}
                  className={'grid grid-cols-2 gap-3'}>
                <h1 className={'text-3xl font-bold'}>Daftar</h1>
                <div className={'text-xs w-full h-full flex'}>
                    <div className={'ml-auto'}>
                        <span className={'block m-auto'}>Sudah punya akun?</span>
                        <Link href={'/auth/login'} className={'text-blue-400'}>Masuk</Link>
                    </div>
                </div>
                <div className={'col-span-2 flex relative h-8'}>
                    <div className={'border m-auto h-0 w-full'}></div>
                    <div className={'absolute flex gap-3 justify-center w-full h-full'}>
                        <div
                            className={'bg-white px-2 text-sm text-gray-400 my-auto'}>
                            Data Pribadi
                        </div>
                    </div>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Nomor KTP</label>
                    <input {...register('id_number')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Nama (Sesuai KTP)</label>
                    <input {...register('name')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Email</label>
                    <input {...register('email')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Provinsi</label>
                    <select value={watch('province_id')} {...register('province_id')}
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option value={0}>Pilih Provinsi</option>
                        <ListProvinsi/>
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Kota</label>
                    <select disabled={watch('province_id') && watch('province_id') !== '0' ? '' : 'disabled'} {...register('city_id')}
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option>Pilih Kota</option>
                        {watch('province_id') && watch('province_id') !== '0' ? (<ListKota provinsi={watch('province_id')}/>) : ''}
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Profesi</label>
                    <select {...register('profession_select')}
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option>Pilih Profesi</option>
                        <option>Aparatur Sipil Negara (ASN)</option>
                        <option>Karyawan BUMN</option>
                        <option>Karyawan Swasta</option>
                        <option>Wiraswasta</option>
                        <option>TNI/Polri</option>
                        <option>Karyawan Honorer</option>
                        <option>Mahasiswa</option>
                        <option>Lainnya</option>
                    </select>
                </div>
                <div className={'col-span-2 h-16 ' + (watch('profession_select') === 'Lainnya' ? '' : 'hidden')}>
                    <label className={'text-sm font-light text-gray-700'}>Profesi</label>
                    <input value={watch('profession_select') === 'Lainnya' ? '' : watch('profession_select') } {...register('profession')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Marketing</label>
                    <select {...register('sales_id')}
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option>Pilih Nama Marketing</option>
                        <ListMarketing/>
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Nama Project</label>
                    <select value={watch('project_id')} {...register('project_id')}
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option value={0}>Pilih Project</option>
                        <ListProject/>
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Tipe Unit</label>
                    <select disabled={watch('project_id') && watch('project_id') !== '0'  ? '' : 'disabled'} {...register('unit_type_id')}
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option>Pilih Unit</option>
                        {watch('project_id') && watch('project_id') !== '0' ? (<ListUnit project={watch('project_id')}/>) : ''}
                    </select>
                </div>
                <div className={'col-span-2 flex relative h-8'}>
                    <div className={'border m-auto h-0 w-full'}></div>
                    <div className={'absolute flex gap-3 justify-center w-full h-full'}>
                        <div
                            className={'bg-white px-2 text-sm text-gray-400 my-auto'}>
                            Data Akun
                        </div>
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
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Konfirmasi Password</label>
                    <input type={'password'} {...register('password_confirmation')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
            </form>
            <div className={'flex relative h-14'}>
                <div className={'border m-auto h-0 w-full'}></div>
                <div className={'absolute flex gap-3 justify-center w-full h-full'}>
                </div>
            </div>
            <div className={''}>
                <ButtonComponent form={'loginForm'} color={'bg-primary w-full py-2'} text={'Login'}/>
            </div>
        </>
    )
}