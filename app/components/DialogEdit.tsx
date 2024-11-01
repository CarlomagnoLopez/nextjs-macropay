/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'

export default function DialogEdit(props: { editUser: any, item: any }) {
  const [opacity, setOpacity] = useState('opacity-0')
  const [events, setEvents] = useState('pointer-events-none')
  // const { name } = props.item
  // const { email } = props.item
  // const { username } = props.item

  const [name, setName] = useState(props.item.name)
  const [email, setEmail] = useState(props.item.email)
  const [username, setUsername] = useState(props.item.username)

  const showDialog = () => {
    setOpacity('opacity-100')
    setEvents('pointer-events-all')
  }

  const closeDialog = () => {
    setOpacity('opacity-0')
    setEvents('pointer-events-none')
  }

  const successEdit = () => {

    const itemMem = {
      name:name,
      email:email,
      username:username
    }
    props.editUser(itemMem,props.item)
    closeDialog()
  }

  return (
    <>
      <button
        data-dialog-target="modaledit"
        className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
        onClick={showDialog}
      >
        Editar
      </button>
      <div

        data-dialog-backdrop="modaledit"
        data-dialog-backdrop-close="true"
        className={`${events} fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 ${opacity} backdrop-blur-sm transition-opacity duration-300`}
      >
        <div
          data-dialog="modaledit"
          className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
        >
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Editar al usuario:
          </div>
          <div className="text-l text-rigth relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
            <div className="w-72">
              <label htmlFor="name">Name:</label> {' '}{' '}
              <input
                onChange={(item) => {
                  setName(item.currentTarget.value)
                }}
                placeholder={name} className="border-solid border-2 border" type="text" id="name" name="name"></input>
            </div>
            <br></br>
            <div className="w-72">
              <label htmlFor="user">User:</label> {' '}{' '}
              <input
                onChange={(item) => {
                  setUsername(item.currentTarget.value)
                }}
                placeholder={username} className="border-solid border-2 border" type="text" id="user" name="user"></input>

            </div>
            <br></br>
            <div className="w-72">
              <label htmlFor="email">Email:</label> {' '}{' '}
              <input
                onChange={(item) => {
                  setEmail(item.currentTarget.value)
                }}
                placeholder={email} className="border-solid border-2 border" type="text" id="email" name="email"></input>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
            <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={closeDialog}
            >
              Cancel
            </button>
            <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button" onClick={successEdit}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

