import React, { useContext } from 'react'
import Table from '../../../components/admin/Table/Table'
import Loading from "../../Loading/Loading"
import MainContext from '../../../context/context'
const Products = () => {
  const {data , loading } = useContext(MainContext)
    return (
    <div>
    {
      loading ? <Loading/> : <Table items={data}/>
    }
    </div>
  )
}

export default Products