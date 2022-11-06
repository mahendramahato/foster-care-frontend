import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="containerfluid">
            <div className="">
                <nav className="navbar bg-light logo-design">
                    <div className="containerfluid">
                        <Link className="navbar-brand" to="/">
                            <img style={{width: '80%'}} src="https://acadianaanimalaid.org/wp-content/uploads/2019/03/logotry110.png"
                                alt="pic" />
                            {/* <h1 className="org-title">Acadiana Animal Aid</h1> */}
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
