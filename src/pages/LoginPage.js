import { Link } from "react-router-dom"
import LoginInput from "../components/LoginInput"
import { login } from "../utils/network-data"

const LoginPage = ({loginSuccess}) => {
    const onLogin = async ({email,password}) => {
        const {error,data} = await login({email,password})

        if (!error) {
            loginSuccess(data)
        }
    }

    return (
        <div className="container-form">
            <div className="form-parent">
                <h2>Sign In!</h2>
                <LoginInput login={onLogin} />
                <p><Link to='/register'>Don't Have account?</Link></p>
            </div>
        </div>
    )
}

export default LoginPage