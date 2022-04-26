import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Pagination from './Pagination'
import { addData } from './Redux/actions'
import Table from './Table'

const LandingPage = () => {

    const perPage = 10
    const[currentPage, setCurrentpage] = useState(0) 
    const [search, setSearch] = useState('')

    const list = useSelector(state => state.geekReducer.membersList)
    console.log('list', list)

    const dispatch = useDispatch()

    const fetchData = async () => {
        const res = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
        console.log('res', res.data)
        dispatch(addData(res.data))
    }

    useEffect(() => {
        fetchData()
    }, [])

   

    const handlePageClick = ({selected: selectedPage}) =>{
        console.log('page clicked', selectedPage)
        setCurrentpage(selectedPage)
    }

    const offSet = currentPage * perPage
    console.log('offSet', offSet)
   
   
    const filterData = list.filter((value) => {
        if (search === '') {
            return value
        } else if (value.name.toLowerCase().includes(search.toLowerCase()) ||
            value.email.toLowerCase().includes(search.toLowerCase()) ||
            value.role.toLowerCase().includes(search.toLowerCase())) {
            return value
        }
    }) 
    
    console.log('filterData', filterData)

    const mapData =  filterData.slice(offSet, offSet + perPage)
    // dispatch(filteredData(mapData))

    const pageCount = Math.ceil(filterData.length / perPage)

    return (
        <div style={{ width: '95vw', margin: '20px' }}>
            <input style={{ width: '100%', margin: '10px', padding: '10px' }}
                type="search" placeholder='Search by name, email or role' value={search} onChange={(e) => setSearch(e.target.value)} />

            <Table mapData={mapData} />

            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
    )
}

export default LandingPage