import React from 'react';
import ContactForm from './ContactForm';
import firebaseDb from '../firebase';

const  ContactDetails=()=> {

    const addData = obj =>{
        firebaseDb.child('contacts').push(obj);
    }
    return (
        <div>
            <div className="display-container">
                <h1>Register Details</h1>
            </div>
            <div>
                <ContactForm addData={addData}/>
            </div>
            
        </div>
    )
}
export default ContactDetails;