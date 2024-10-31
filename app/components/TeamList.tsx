'use client'
import { useState, useEffect } from 'react'
import Table from '../components/Table';

/* eslint-disable @typescript-eslint/no-explicit-any */


export default function TeamList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // 
        // console.log(isLoading)
// 
      })
  }, [])

  const changeLoading = (value:boolean) => {
    console.log('change')
    setIsLoading(value)
  }



  return (
    <ul className="divide-y divide-gray-200">
      {data && <Table data={data} isLoading={isLoading} setIsLoading={changeLoading}></Table>}
    </ul>
  )
}



