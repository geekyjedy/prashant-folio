import React from 'react'

const FormField = ({label,placeholder,type,id,name,}) => {
  return (
    <div className='flex my-3 justify-between'><label className=' px-4 text-right min-w-[30%]'>{label}</label><input type={type} name={name} id={id} className='text-black p-2 rounded-xl text-sm min-w-[70%]' placeholder={placeholder} /></div>
  )
}

export default FormField