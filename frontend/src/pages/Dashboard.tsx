// import React from 'react'

import { useEffect } from "react"
// import { getAllProducts } from "../services/http-products"
import { getAllUsers } from "../services/http-users"
// import { getAllOrderDetails } from "../services/http-orderDetails"

const Dashboard = () => {

  useEffect(() => {
    // getAllProducts()
    getAllUsers()
    // getAllOrderDetails()
  }, [])
  

  
  return (
    <section>




    </section>
  )
}

export default Dashboard