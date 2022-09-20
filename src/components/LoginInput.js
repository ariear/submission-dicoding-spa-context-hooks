import { useContext, useState } from "react"
import useInput from "../contexts/useInput"
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

const LoginInput = ({login,loading}) => {
    const {locale} = useContext(LocaleContext)

    const [email,handleEmailChange] = useInput('')
    const [password,handlePasswordChange] = useInput('')
    const [errors,setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let listError = {}

        if (password.length < 6) {
            listError.password = locale === 'id' ? 'password minimal memiliki 6 karakter' : "password must be at least 6 characters"
        }

        setErrors(listError)
        
        if (Object.keys(listError).length === 0) {
            login({email,password})
        }
    }

    return (
    <form onSubmit={onSubmitHandler} className="form-input">
        {
            loading ?
            <img src="/loading.svg" width={170} style={{ margin: 'auto' }} alt="" />
                :
            <>
            <div className="wrap-input">
                <input type="email" value={email} onChange={handleEmailChange} placeholder="email" required />
                <p className="text-error"></p>
            </div>
            <div className="wrap-input">
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="password" required />
                <p className="text-error">{errors.password}</p>
            </div>
            <button className="btn-auth">{locale === 'id' ? 'Masuk' : 'Sign In'}</button>
            </>
        }
    </form>
    )
}

LoginInput.prototype = {
    login: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default LoginInput