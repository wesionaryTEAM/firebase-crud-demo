import React,{useState} from 'react';


const ContactForm = () => {
    const initialValues={
        fullName:" ",
        address:" ",
        email:" ",
        phone:" "
    }
    let [value,setValue]=useState(initialValues);

    handleChange = (e) =>{
        const {name,value}=e.target;
        setValue ({
            ...value,
            [name]:value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    return (
        <div className="Container">
        <form onSubmit={handleSubmit}>
            <div className="name-container">
                 Full Name:<input type="text" name="fullName" value={value.fullName} placeholder="Full Name" onChange={handleChange} required/>
            </div>
            <div className="address-container">
                Address:<input type="text" name="address" value={value.address} placeholder="Address" onChange={handleChange} required/>
            </div>
            <div className="email-container">
                Email:<input type="text" name="email" value={value.email} placeholder="Email" onChange={handleChange} required/>
            </div>
            <div className="number-container">
                Phone:<input type="number" name="phone" value={value.phone} placeholder="Phone Number" onChange={handleChange} required/>
            </div>
            <div className="button-container">
                <button type="submit">Save</button>
            </div>
         </form>
        </div>
    )
}
export default ContactForm;