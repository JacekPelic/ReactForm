import React from 'react';

const WithDependent = (field, isActive) =>{
    if (isActive)
        return field
    else
        return null
}


export default WithDependent



