import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClientService from '../services/ClientService'

export const Body = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [cellPhone, setCellphone] = useState('')

    const [childrenNumber, setChildrenNumber] = useState('')
    const [childrenAge, setChildrenAge] = useState('')
    const [existingPetInfo, setExistingPetInfo] = useState('')
    const [alter, setPetAlter] = useState('')
    const [program, setFosterProgram] = useState('')
    const [animal_interest, setAnimalInterest] = useState([])

    const [area, setArea] = useState('')
    const [experience, setExperience] = useState('')
    const [aboutyou, setAboutyou] = useState('')

    const navigate = useNavigate()

    const getAnimalInterest = (e) => {
        const {value, checked} = e.target
        //console.log(`${value} is ${checked}`)

        if(checked){ // when user check box
            setAnimalInterest([...animal_interest, value])
        }else{ // when user uncheck box
            setAnimalInterest(animal_interest.filter((e)=> e !== value))
        }
    }

    const saveClient = (e) => {
        e.preventDefault()

        const client = {firstName, lastName, email, cellPhone, 
            childrenNumber, childrenAge, existingPetInfo, alter, program, animal_interest, 
            area, experience, aboutyou}

        ClientService.createClient(client).then((response) =>{

            // console.log(response.data)
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
                        <label htmlFor="inputFname" className="form-label fw-bold fs">FirstName</label>
                        <input 
                        type="name" 
                        className="form-control" 
                        id="inputFname"
                        name="firstName"
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputLname" className="form-label fw-bold fs">LastName</label>
                        <input 
                        type="name" 
                        className="form-control" 
                        id="inputLname"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label fw-bold fs">Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputCellPhone" className="form-label fw-bold fs">Cell Phone</label>
                        <input 
                        type="name" 
                        className="form-control" 
                        id="inputCellPhone"
                        name="cellPhone"
                        value={cellPhone}
                        onChange={(e) => setCellphone(e.target.value)}
                        />
                    </div>

                    <div className="row">
                        <h2 className="title-form">
                            Living Arrangements
                        </h2>   
                    </div>

                    <hr></hr>

                    {/* number of children input */}
                    <div className="col-md-12">
                        <label htmlFor="inputChildren" className="form-label fw-bold fs">Number of Children in Household</label>
                        <input 
                        type="number" 
                        className="form-control child-number" 
                        id="inputChildren"
                        name="childrenNumber"
                        value={childrenNumber}
                        onChange={(e) => setChildrenNumber(e.target.value)}
                        />
                    </div>

                    {/* ages of children */}
                    <div className="col-md-12">
                        <label htmlFor="inputAge" className="form-label fw-bold fs">Ages of Children</label>
                        <input 
                        type="number" 
                        className="form-control child-age" 
                        id="inputAge"
                        name="childrenAge"
                        value={childrenAge}
                        onChange={(e) => setChildrenAge(e.target.value)}
                        />
                    </div>

                    {/* information about existing pet */}
                    <div className="col-12">
                        <label htmlFor="inputExistingPetInfo" className="form-label fw-bold fs">Please list all other pets in household. Must include species, age, gender and whether they are kept indoors or outdoors</label>
                        <textarea 
                        row="2" 
                        type="text" 
                        className="form-control" 
                        id="inputExistingPetInfo"
                        name="existingPetInfo"
                        value={existingPetInfo}
                        onChange={(e) => setExistingPetInfo(e.target.value)}
                        />
                    </div>

                    {/* Pet is altered or not */}
                    <div className="col-md-12"> 
                        <label htmlFor="petalter" className="form-label fw-bold fs">Are all of your pets altered?</label>
                        <div className="form-label">
                        <input
                            className="form-check-input"
                            id="petalter"
                            type="radio" 
                            name="alter"
                            value={"Yes"}
                            onChange={(e) => setPetAlter(e.target.value)}
                        /> Yes
                        </div>

                        <input
                            className="form-check-input"
                            id="petalter"
                            type="radio" 
                            name="alter"
                            value={"No"}
                            onChange={(e) => setPetAlter(e.target.value)}
                        /> No
                    </div>

                    {/* foster program you interested in */}
                    <div className="col-md-12">
                        <label htmlFor="fosterprogram" className="form-label fw-bold fs">Which Foster Programs are you most interested in?</label>
                        <div className="form-label">
                        <input
                            className="form-check-input"
                            id="fosterprogram"
                            type="radio" 
                            name="program"
                            value="Weekend Sleepovers (2-3 nights)"
                            onChange={(e) => setFosterProgram(e.target.value)}
                        /> Weekend Sleepovers (2-3 nights)
                        </div>
                        <div className="form-label">
                        <input
                            className="form-check-input"
                            id="fosterprogram"
                            type="radio" 
                            name="program"
                            value="Short Term Foster (average of 1-3 weeks)"
                            onChange={(e) => setFosterProgram(e.target.value)}
                        /> Short Term Foster (average of 1-3 weeks)
                        </div>
                        <input
                            className="form-check-input"
                            id="fosterprogram"
                            type="radio" 
                            name="program"
                            value="Family Foster (potentially 8-12 weeks)"
                            onChange={(e) => setFosterProgram(e.target.value)}
                        /> Family Foster (potentially 8-12 weeks)
                    </div>

                    {/* which category of fostering */}
                    <div className="col-md-12">
                        <label className="form-label fw-bold fs">Which animal are you interested in fostering?</label>
                        <div className="form-label">
                            <input
                                className="form-check-input"
                                id="catradio"
                                type="radio" 
                                name="animal_interest"
                            /> Cats

                            <div id="reveal-if-cat">
                                <label className="form-label fw-bold">What type of cat are you interested in fostering or learning about? Please select all that apply</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Bottle Kitties " name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bottle Kitties
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Pregnant/ Nursing Moms" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Pregnant/ Nursing Moms
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Adult Cats" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)} 
                                    id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Adult Cats
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Cats/Kittens Needing Socialization" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Cats/Kittens Needing Socialization
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                    value="Cats/Kittens with Special Needs" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Cats/Kittens with Special Needs
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Senior Cats" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Senior Cats
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Medical Cases" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Medical Cases
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-label">
                            <input
                                className="form-check-input"
                                id="dogradio"
                                type="radio" 
                                name="animal_interest"
                            /> Dogs
                            
                            <div id="reveal-if-dog">
                            <label className="form-label fw-bold">What type of dog are you interested in fostering or learning about? Please select all that apply</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                    value="Bottle Baby Puppies" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Bottle Baby Puppies
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                    value="Puppies (up to 6 months)" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Puppies (up to 6 months)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Small Adult (less than 25 lbs)" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Small Adult (less than 25 lbs)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Medium Adult (25 - 45 lbs)" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Medium Adult (25 - 45 lbs)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Large Adult (50 - 110 lbs)" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Large Adult (50 - 110 lbs)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Pregnant/ Nursing Dog Moms" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Pregnant/ Nursing Moms
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Shy/ Fearful Dogs" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Shy/ Fearful Dogs
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Seniors" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Seniors
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    value="Medical Cases Dogs" name="animal_interest"
                                    onChange={(e)=> getAnimalInterest(e)}
                                    id="flexCheckDefault1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        Medical Cases
                                    </label>
                                </div>
                            </div>
                        </div>

                            <input
                                className="form-check-input"
                                id="noradio"
                                type="radio" 
                                name="animal_interest"
                                value="No preference"
                                onChange={(e) => getAnimalInterest(e)}
                            /> No preference
                            <div id="reveal-if-no">                         
                            </div>
                    </div>
                    
                    <div className="row">
                        <h2 className="title-form">
                            Fostering Information
                        </h2>   
                    </div>

                    <hr></hr>

                    <div className="col-12">
                        <label htmlFor="inputArea" className="form-label fw-bold fs">Describe the areas where the foster pet will be contained when unsupervised</label>
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
                        <label htmlFor="inputExperience" className="form-label fw-bold fs">Please describe your experience with animals: litter box/house training, basic behaviour training,
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
                        <label htmlFor="inputAboutyou" className="form-label fw-bold fs">What else would you like us to know about you?</label>
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
