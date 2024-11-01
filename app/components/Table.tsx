/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Dialog from "./Dialog";
import DialogEdit from "./DialogEdit";
import SkeletonProgress from "./SkeletonProgress";

export default function Table(props: any) {
    const dataTable = props.data;
    const isLoading = props.isLoading;
    if (dataTable.length > 0 && isLoading) {

        props.setIsLoading()
        return <></>
    }

    if (isLoading) {
        return (
            <><SkeletonProgress></SkeletonProgress><SkeletonProgress></SkeletonProgress><SkeletonProgress></SkeletonProgress></>

        )
    }

    const mergeData = (itemMem:any,itemCurrent:any) => {

        const itemMerge = {...itemCurrent}
        itemMerge.name = itemMem.name;
        itemMerge.username = itemMem.username;
        itemMerge.email = itemMem.email;

        
        props.editUser(itemMerge)
    }

    return (
        <>
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Nombre
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Usuario
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Email
                                </p>
                            </th>

                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Acciones
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable && dataTable.map((item: any, index: number) => {
        
                            return (<tr key={index} className="hover:bg-slate-50 border-b border-slate-200">
                                <td className="p-4 py-5">
                                    <p className="block font-semibold text-sm text-slate-800">{item.name}</p>
                                </td>
                                <td className="p-4 py-5">
                                    <p className="block text-sm text-slate-800">{item.username}</p>
                                </td>
                                <td className="p-4 py-5">
                                    <p className="block text-sm text-slate-800">{item.email}</p>
                                </td>
                                <td className="p-4 py-5">
                                    <div className="block text-center">
                                        <Dialog
                                            item={item}
                                            deleteUser={() => props.deleteUser(item)}>
                                        </Dialog>
                                        <span>{' '}</span>
                                        <DialogEdit
                                            item={item}
                                            editUser={mergeData}>
                                            {/* editUserTable={() => props.editUserTable(item)}> */}
                                        </DialogEdit>
                                    </div>
                                </td>
                            </tr>)
                        })}



                    </tbody>
                </table>
            </div></>

    )
    // }
}



