import {useForm} from "react-hook-form";
import Link from "next/link";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import ListKota from "./DaftarForm/ListKota";
import ListProvinsi from "./DaftarForm/ListProvinsi";
import ListMarketing from "./DaftarForm/ListMarketing";
import ListProject from "./DaftarForm/ListProject";
import ListUnit from "./DaftarForm/ListUnit";
import ButtonComponent from "../../components/Button/ButtonComponent";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function DaftarForm() {
    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string(),
        province_id: yup.number().integer().required(),
        city_id: yup.number().integer().required(),
        profession: yup.string(),
        sales_id: yup.number().integer().required(),
        project_id: yup.number().integer().required(),
        unit_type_id: yup.number().integer().required()
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        getFieldState,
        getValues,
        setValue
    } = useForm({resolver: yupResolver(schema)})

    const [profession, setProfession] = useState()

    const onChangeData = (e) => {
        setValue('profession', e.target.value)
        setProfession(e.target.value)
        // if (e.target.value == 'Lainnya') {
        //     setProfession('')
        // } else {
        //     setProfession(e.target.value)
        // }
    }

    const mutation = useMutation({
        mutationFn: (data) => {
            axios
                .post('https://api-nub.friandy.web.id/api/customer/register', data)
                .then((resp) => {
                    // console.log(resp)
                    window.location = resp.data.data.transaction.data.payment_url
                })
        },
    })

    const onSubmit = (data) => {
        // console.log(data)
        mutation.mutate(data)
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
                    <label className={'text-sm font-light text-gray-700'}>Nomor KTP <span className={'text-xs'}>(Optional)</span></label>
                    <input {...register('id_number')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Nama (Sesuai KTP)<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <input {...register('name')} required
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Email<span
                        className={'text-xs'}>(Optional)</span></label>
                    <input {...register('email')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Provinsi<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <select value={watch('province_id')} {...register('province_id')} required
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option value={0}>Pilih Provinsi</option>
                        <ListProvinsi/>
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Kota<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <select disabled={watch('province_id') && watch('province_id') !== '0' ? '' : 'disabled'} {...register('city_id')} required
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option>Pilih Kota</option>
                        {watch('province_id') && watch('province_id') !== '0' ? (<ListKota provinsi={watch('province_id')}/>) : ''}
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Profesi<span
                        className={'text-xs'}>(Optional)</span></label>
                    <select onChange={onChangeData}
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option>Pilih Profesi</option>
                        <option>Aparatur Sipil Negara (ASN)</option>
                        <option>Karyawan BUMN</option>
                        <option>Karyawan Swasta</option>
                        <option>Wiraswasta</option>
                        <option>TNI/Polri</option>
                        <option>Karyawan Honorer</option>
                        <option>Mahasiswa</option>
                        <option value={''}>Lainnya</option>
                    </select>
                </div>
                <div className={'col-span-2 h-16 ' + (profession === '' ? '' : 'hidden')}>
                    <label className={'text-sm font-light text-gray-700'}>Profesi</label>
                    <input {...register('profession')}
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Marketing<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <select {...register('sales_id')} required
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option>Pilih Nama Marketing</option>
                        <ListMarketing/>
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Nama Project<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <select value={watch('project_id')} {...register('project_id')} required
                            className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                        <option value={0}>Pilih Project</option>
                        <ListProject/>
                    </select>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Tipe Unit<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <select disabled={watch('project_id') && watch('project_id') !== '0'  ? '' : 'disabled'} {...register('unit_type_id')} required
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
                    <label className={'text-sm font-light text-gray-700'}>Nomor WA<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <input {...register('whatsapp')} required
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Password<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <input type={'password'} {...register('password')} required
                           className={'w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 focus:border-b-4 border-b-yellow-500/ focus:border-b-yellow-500/100 transition-all ease-in-out'}>
                    </input>
                </div>
                <div className={'col-span-2 h-16'}>
                    <label className={'text-sm font-light text-gray-700'}>Konfirmasi Password<span
                        className={'text-xs text-red-500'}>*</span></label>
                    <input type={'password'} {...register('password_confirmation')} required
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