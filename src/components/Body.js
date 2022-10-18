import React from 'react'

export const Body = () => {
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
                        <label for="inputFname" className="form-label">FirstName</label>
                        <input type="firstName" className="form-control" id="inputFname"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputLname" className="form-label">LastName</label>
                        <input type="lastName" className="form-control" id="inputLname"/>
                    </div>

                    <div className="col-md-4">
                        <label for="inputAge" className="form-label">Age</label>
                        <input type="age" className="form-control" id="inputAge"/>
                    </div>
                    <div className="col-md-8">
                        <label for="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail"/>
                    </div>

                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress"/>
                    </div>

                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State / Province / Region</label>
                        <input type="text" className="form-control" id="inputState"/>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>

                    <div className="col-md-6">
                        <label for="inputHomePhone" className="form-label">Home Phone</label>
                        <input type="homephone" className="form-control" id="inputHomePhone"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCellPhone" className="form-label">Cell Phone</label>
                        <input type="cellphone" className="form-control" id="inputCellPhone"/>
                    </div>

                    <div className="row">
                        <h2 className="title-form">
                            Fostering Information
                        </h2>   
                    </div>

                    <hr></hr>

                    <div className="col-12">
                    <label for="inputArea" className="form-label">Describe the areas where the foster pet will be contained when unsupervised</label>
                    <textarea row="2" type="area" className="form-control" id="inputArea"/>
                    </div>

                    <div className="col-12">
                        <label for="inputExperience" className="form-label">Please describe your experience with animals: litter box/house training, basic behaviour training,
                        fearful/feral animals, bottle feeding, socialization, crate training, leash training, etc</label>
                        <textarea row="20" type="experience" className="form-control" id="inputExperience"/>
                    </div>

                    <div className="col-12">
                        <label for="inputAboutyou" className="form-label">What else would you like us to know about you?</label>
                        <textarea row="20" type="aboutyou" className="form-control" id="inputAboutyou"/>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
