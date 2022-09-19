import { Link } from "react-router-dom"
import RegisterInput from "../components/RegisterInput"

const RegisterPage = () => {
    return (
        <div className="container-form">
            <div className="form-parent">
                <h2>Sign Up!</h2>
                <RegisterInput />
                <p><Link to='/login'>Have account?</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage