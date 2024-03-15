import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from './navbar';

export const Eachproduct = () => {
    const params = useParams();
    const productName = params.name;
  return (
    <div>
      <Navbar></Navbar>
      Each Product
    </div>
  )
}
