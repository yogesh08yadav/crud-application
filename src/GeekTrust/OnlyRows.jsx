import { IconButton, Tooltip } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delMember, delSelectedMember } from './Redux/actions'

const OnlyRows = ({ currElem, handleEdit }) => {

    const [changeColor, setChangeColor] = useState(false)
    
    const dispatch = useDispatch()

    const delBtn = (member) => {
        dispatch(delMember(member))
    }

    const handleChange = (elem) => {
        dispatch(delSelectedMember(elem))
    }

    

    return (
        <>
            <tr >
                <th scope="row"><input onChange={() => handleChange(currElem)} type="checkbox" 
                value={currElem.name} name={currElem.name} onClick={() => setChangeColor(!changeColor)} /></th>
                {
                    changeColor? <>
                     <td  style={{backgroundColor:'gray',color:'white'}} >{currElem.name} </td>
                    <td  style={{backgroundColor:'gray',color:'white'}}>{currElem.email} </td>
                    <td style={{backgroundColor:'gray',color:'white'}}>{currElem.role} </td>
                    <td style={{backgroundColor:'gray',color:'white'}} >
                        <Tooltip title="Edit">
                            <IconButton onClick={(event) => handleEdit(event, currElem)}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
    
                        <Tooltip title="Delete">
                            <IconButton onClick={() => delBtn(currElem)} >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </td>
                    </> :
                    <>
                     <td >{currElem.name} </td>
                     <td>{currElem.email} </td>
                     <td>{currElem.role} </td>
                     <td >
                         <Tooltip title="Edit">
                             <IconButton onClick={(event) => handleEdit(event, currElem)}>
                                 <Edit />
                             </IconButton>
                         </Tooltip>
     
                         <Tooltip title="Delete">
                             <IconButton onClick={() => delBtn(currElem)} >
                                 <Delete />
                             </IconButton>
                         </Tooltip>
                     </td>
                     </>
                }
               
            </tr>
        </>
    )
}

export default OnlyRows