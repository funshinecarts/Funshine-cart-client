import React from 'react'

import DashboardWrapper from '../../components/DashboardWrapper/DashboardWrapper'
import AddProduct from '../../components/AddProduct/AddProduct'
import ProductCard from '../../components/ProductCard/ProductCard'

import "./UsedCarts.scss"

const UsedCarts = () => {
  return (
    <DashboardWrapper>
      <AddProduct />
      <div className="cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </DashboardWrapper>
  )
}

export default UsedCarts