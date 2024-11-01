import React, { useState } from 'react'

const DemoForm = () => {

    const [formData, setFormData] = useState({
        uname: '',
        email: '',
        phone: '',
        message: ''
    })

    const [userData, setUserData] = useState([])

    let getValue = (e) => {
        let oldData = {...formData}
        let inputName = e.target.name
        let inputValue = e.target.value
        oldData[inputName]=inputValue;
        setFormData(oldData)
    }

    const handleSubmit = (e) => {
        let currentUserData = {
            uname: formData.uname,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        }

        let checkUser = userData.filter((u)=>u.email === formData.email || u.phone === formData.phone)

        if(checkUser.length >= 1){
            alert("Email and Phone Already Exists.....")
        }else{
            let oldUserData = [...userData, currentUserData]
            console.log(oldUserData)
            setUserData(oldUserData)
            setFormData({
                uname: '',
                email: '',
                phone: '',
                message: ''
            })
        }
    e.preventDefault();
    }

    console.log(formData)

    let deleteRow = (indexNumber) => {
        let filterDataAfterData = userData.filter((v,i) => i!==indexNumber)
        setUserData(filterDataAfterData)
    }

    let editRow = (indexNumber) => {
        let editData = userData.filter((v, i) => i===indexNumber)

    }

  return (
    <div>
        <h1 className='text-xl text-red-500 font-[700] uppercase text-center mt-4 mb-4'>Enquiry Form</h1>
      <form onClick={handleSubmit} className='mx-auto max-w-7xl flex flex-col  border shadow-lg p-4'>
        <label>Name</label>
        <input className='border w-100% h-10 pl-4 mt-2 mb-2 outline-none' type='text' onChange={getValue} value={formData.uname} name='uname' placeholder='Name' />
        <label>Email</label>
        <input className='border w-100% h-10 pl-4 mt-2 mb-2 outline-none' type='text' onChange={getValue} value={formData.email} name='email' placeholder='E-Mail' />
        <label>Phone</label>
        <input className='border w-100% h-10 pl-4 mt-2 mb-2 outline-none' type='number' onChange={getValue} value={formData.phone} name='phone' placeholder='Phone' />
        <label>Message</label>
        <input className='border w-100% h-10 pl-4 mt-2 mb-2 outline-none' type='text' onChange={getValue} value={formData.message} name='message' placeholder='Message' />
        <button className='border bg-green-500 p-2 mt-4 mb-4'>Submit</button>
      </form>

      <div className='mx-auto max-w-7xl mt-10 mb-4'>
      <table >
        {userData.length}
        <thead className='border-2 px-4 divide-y-2 py-2 w-96 '>
            <tr className='border-2 divide-x-2 space-x-4'>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            {
                userData.length >= 1
                ?
                userData.map((user, index) => {
                    return (
                        <tr key={index} className='divide-x-2'>
                            <td>{index + 1}</td>
                            <td>{user.uname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.message}</td>
                            <td>
                                <button onClick={() => deleteRow(index)}>Delete</button>
                                <button onClick={() => editRow(index)}>Edit</button>
                            </td>
                        </tr>
                    )
                })
                : 
                <tr>No Data</tr>
            }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default DemoForm
