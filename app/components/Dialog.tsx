/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'

export default function Dialog(props: { deleteUser: () => void, item:any }) {
  const [opacity, setOpacity] = useState('opacity-0')
  const [events, setEvents] = useState('pointer-events-none')
  const { name } = props.item
  const { email } = props.item
  const showDialog = () => {
    setOpacity('opacity-100')
    setEvents('pointer-events-all')
  }

  const closeDialog = () => {
    setOpacity('opacity-0')
    setEvents('pointer-events-none')
  }

  const successDelete = () => {
    closeDialog()
    props.deleteUser()
  }

  return (
    <>
      <button
        data-dialog-target="modaldelete"
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button"
        onClick={showDialog}
      >
        Eliminar
      </button>
      <div

        data-dialog-backdrop="modaldelete"
        data-dialog-backdrop-close="true"
        className={`${events} fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 ${opacity} backdrop-blur-sm transition-opacity duration-300`}
      >
        <div
          data-dialog="modaldelete"
          className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
        >
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Desea eliminar al usuario:
          </div>
          <div className="text-l text-left relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">

            <p>Email: {email}</p>
            <p>Nombre: {name}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
            <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={closeDialog}
            >
              Cancel
            </button>
            <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button" onClick={successDelete}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

