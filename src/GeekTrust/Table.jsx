import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import EditRow from './EditRow'
import OnlyRows from './OnlyRows'
import { delMember } from './Redux/actions'
import './table.css'

const Table = ({ mapData }) => {

    const memberToDel = useSelector(state => state.geekReducer.selectedMember)
    console.log('memberToDel', memberToDel)

    const dispatch = useDispatch()
    const [data, setData] = useState([])
    
    useEffect(()=>{
     setData(mapData)
    },[mapData])
    
    const [memberId, setMemberId] = useState(null)
    const[editFormData,setEditFormData] = useState({
        name:"",
        email:"",
        role:""
    })

    const handleEditFormChange = (event) => {
        event.preventDefault()
 
        const fieldName = event.target.getAttribute("name")
        const filedValue = event.target.value
 
        const newFormData = {...editFormData}
        newFormData[fieldName] = filedValue
 
        setEditFormData(newFormData)
     }

    const handleEdit = (event,currElem) => {
     event.preventDefault()
     setMemberId(currElem.id)

     const formValue = {
         name: currElem.name,
         email: currElem.email,
         role: currElem.role
     }
     setEditFormData(formValue)
    }

    const handleEditSave = (event) => {
        event.preventDefault()
        console.log('handleEditSave')
        const editedRow = {
            id: memberId,
            name: editFormData.name,
            email: editFormData.email,
            role: editFormData.role
        }

        const newMapData = [...data]

        const index = data.findIndex((f) => f.id === memberId)

        newMapData[index] = editedRow
        setData(newMapData)
        setMemberId(null)
    }

    const getDelArray = () =>{
        memberToDel.forEach(element => {
            dispatch(delMember(element))
        });
    }

    const handleCheckbox = (e) => {
      const {name, checked} = e.target
      if(name === "allCheckbox"){
          let tempUser = data.map((user) => { return { ...user, isChecked : checked}})
          setData(tempUser)
      }
    }

    const cancelBtn = () => {
        setMemberId(null)
    }

    return (
        <div>
            <form onSubmit={handleEditSave} >
            <table  >
                <thead>
                    <tr >
                        <th scope="col"><input type="checkbox" name='allCheckbox' onChange={handleCheckbox} 
                        checked={data.filter((f) =>  f?.isChecked !== true ).length < 1}  /></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                
                    {
                        data.map((currElem) => {
                            return (
                                <tbody key={currElem.id}>
                                    {
                                        (memberId === currElem.id) ?
                                            (<EditRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange} cancelBtn={cancelBtn}  />) :
                                            (<OnlyRows currElem={currElem} handleEdit={handleEdit} mapdata={mapData} />)
                                    }
                                    </tbody>
                            )
                        })
                    } 
               

            </table>
            <button onClick={getDelArray}
            style={{backgroundColor:'#FF5171', marginTop:'20px', border:'none', borderRadius:'50px', padding:'10px'}}
            >Delete Selected</button>
            </form>
        </div>
    )
}

export default Table