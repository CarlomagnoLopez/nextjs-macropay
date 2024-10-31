/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Table(props:any) {
    const dataTable = props.data;
    const isLoading = props.isLoading;
    if (dataTable.length > 0 && isLoading) {
        props.setIsLoading()
        return <></>
    }

    if (isLoading) {
        return (<div>{"loading..."}</div>)
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
                            // console.log(item)
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
                                        <button className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                            Borrar
                                        </button>
                                        <span>{' '}</span>
                                        <button className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                            Editar
                                        </button>
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



