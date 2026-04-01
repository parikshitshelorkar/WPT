import React from 'react'
import Login from './Login'

class Register extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <h3>New Customer Registration</h3>

                <form>
                    <div className="mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Enter first name" />
                    </div>

                    <div className="mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter last name" />
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="mb-3">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        )
    }
}

export default Register