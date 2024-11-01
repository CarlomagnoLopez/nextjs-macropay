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
        setData(data);
      })
  }

  const deleteUser = (value: any) => {
    fetch(`https://6724177d493fac3cf24d1935.mockapi.io/users/${value.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        getData();
      });
  }

  const editUser = (value: any) => {
 
    fetch(`https://6724177d493fac3cf24d1935.mockapi.io/users/${value.id}`, {
      method: 'PUT',
      body: JSON.stringify(value),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res) => res.json())
    .then((data) => {
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
        editUser={editUser}
      ></Table>}
    </ul>
  )
}



