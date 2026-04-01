import React from 'react'
class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd"/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox"/> Remember me</label>
                    </div>
                    <button type="submit" className="btn-primary btn-default">Submit</button>
                </form>
            </div>
        )
    }
}
export default Login 