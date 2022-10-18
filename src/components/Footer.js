import React from 'react'

export const Footer = () => {
    return (
        <div className="container pt-4">
            <footer className="bg-light text-center text-white">

            <div className="container p-4 pb-0">

                <div className="mb-4">
                {/* <!-- Facebook --> */}
                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#3b5998', borderRadius: '50%'}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-facebook"></i
                ></a>

                {/* <!-- Youtube --> */}
                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: 'red', borderRadius: '50%'}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-youtube"></i
                ></a>

                {/* <!-- Google --> */}
                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#dd4b39', borderRadius: '50%'}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-google"></i
                ></a>

                {/* <!-- Instagram --> */}
                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#ac2bac', borderRadius: '50%'}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-instagram"></i
                ></a>

                </div>
                {/* <!-- Section: Social media --> */}
            </div>

            {/* <!-- Copyright --> */}
            <div className="text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: 60}}>
                © 2022 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/" style={{textDecoration: 'none'}}>
                    Acadiana Animal Aid. All Rights Reserved
                </a>
            </div>
            {/* <!-- Copyright --> */}
            </footer>
        </div>
    )
}