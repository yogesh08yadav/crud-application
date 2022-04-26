import { IconButton, Tooltip } from '@material-ui/core'
import { Cancel, Save } from '@material-ui/icons'
import React from 'react'

const EditRow = ({editFormData, handleEditFormChange, cancelBtn}) => {
    return (
        <tr>
            <td></td>
            <td><input type="text" value={editFormData.name} onChange={handleEditFormChange} required='required' name='name' /></td>
            <td><input type="email" value={editFormData.email} onChange={handleEditFormChange} required='required' name='email' /></td>
            <td><input type="text" value={editFormData.role} onChange={handleEditFormChange} required='required' name='role' /></td>
            <td>
                <Tooltip title="Save">
                    <IconButton type='submit' >
                        <Save />
                    </IconButton>
                </Tooltip> 

                <Tooltip title='Cancel'>
                    <IconButton onClick={cancelBtn}>
                        <Cancel  />
                    </IconButton>
                </Tooltip>
            </td>
        </tr>
    )
}

export default EditRow