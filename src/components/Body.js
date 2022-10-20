import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClientService from '../services/ClientService'

export const Body = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [homePhone, setHomePhone] = useState('')
    const [cellPhone, setCellphone] = useState('')
    const [area, setArea] = useState('')
    const [experience, setExperience] = useState('')
    const [aboutyou, setAboutyou] = useState('')
    const navigate = useNavigate()

    const saveClient = (e) => {
        e.preventDefault()

        const client = {firstName, lastName, age, email, address, city, state, zip, homePhone, cellPhone, area, experience, aboutyou}

        ClientService.createClient(client).then((response) =>{

            console.log(response.data)
            navigate('/application_submit_successful')

        }).catch(error =>{
            console.log(error)
        })    
    }


    return (
        <div className="container">
            <div className="row text-center bg-primary">
                <h1 className="heading text-white">Foster Application</h1>
            </div>

            <div className="row">
                <h2 className="title-form" style={{}}>
                    Personal Information
                </h2>
            </div>

            <hr></hr>

            <div className="row">

                <form className="row g-3">
                    
                    <div className="col-md-6">
                        <label htmlFor="inputFname" className="form-label">FirstName</label>
                        <input 
                        type="firstName" 
                        className="form-control" 
                        id="inputFname"
                        name="firstName"
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputLname" className="form-label">LastName</label>
                        <input 
                        type="lastName" 
                        className="form-control" 
                        id="inputLname"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="inputAge" className="form-label">Age</label>
                        <input 
                        type="age" 
                        className="form-control" 
                        id="inputAge"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputAddress"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputCity"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State / Province / Region</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputState"
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputZip"
                        name="zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputHomePhone" className="form-label">Home Phone</label>
                        <input 
                        type="homephone" 
                        className="form-control" 
                        id="inputHomePhone"
                        name="homePhone"
                        value={homePhone}
                        onChange={(e) => setHomePhone(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCellPhone" className="form-label">Cell Phone</label>
                        <input 
                        type="cellphone" 
                        className="form-control" 
                        id="inputCellPhone"
                        name="cellPhone"
                        value={cellPhone}
                        onChange={(e) => setCellphone(e.target.value)}
                        />
                    </div>

                    <div className="row">
                        <h2 className="title-form">
                            Fostering Information
                        </h2>   
                    </div>

                    <hr></hr>

                    <div className="col-12">
                    <label htmlFor="inputArea" className="form-label">Describe the areas where the foster pet will be contained when unsupervised</label>
                    <textarea 
                    row="2" 
                    type="area" 
                    className="form-control" 
                    id="inputArea"
                    name="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputExperience" className="form-label">Please describe your experience with animals: litter box/house training, basic behaviour training,
                        fearful/feral animals, bottle feeding, socialization, crate training, leash training, etc</label>
                        <textarea 
                        row="20" 
                        type="experience" 
                        className="form-control" 
                        id="inputExperience"
                        name="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputAboutyou" className="form-label">What else would you like us to know about you?</label>
                        <textarea 
                        row="20" 
                        type="aboutyou" 
                        className="form-control" 
                        id="inputAboutyou"
                        name="aboutyou"
                        value={aboutyou}
                        onChange={(e) => setAboutyou(e.target.value)}
                        />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary"
                        onClick={(e) => saveClient(e)} >Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
