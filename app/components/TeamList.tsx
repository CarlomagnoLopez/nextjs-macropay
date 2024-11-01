'use client'
import { useState, useEffect } from 'react'
import Table from '../components/Table';

/* eslint-disable @typescript-eslint/no-explicit-any */


export default function TeamList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({})

  useEffect(() => {
    getData();;
  }, [])

  const getData = () => {
    fetch('https://6724177d493fac3cf24d1935.mockapi.io/users')
      .then((res) => res.json())
      .then((data) => {
        console.log("deleting user");
        setData(data);
      })
  }

  const deleteUser = (value:any) => {
    console.log('deleting')
    fetch(`https://6724177d493fac3cf24d1935.mockapi.io/users/${value.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        getData();
      });
  }

  const changeLoading = (value: boolean) => {
    setIsLoading(value)
  }



  return (
    <ul className="divide-y divide-gray-200">
      {data && <Table
        data={data}
        isLoading={isLoading}
        setIsLoading={changeLoading}
        deleteUser={deleteUser}
      ></Table>}
    </ul>
  )
}



