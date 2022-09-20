import { useContext, useState } from "react"
import useInput from "../contexts/useInput"
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

const RegisterInput = ({register,loading}) => {
    const {locale} = useContext(LocaleContext)

    const [name,handleNameChange] = useInput('')
    const [email,handleEmailChange] = useInput('')
    const [password,handlePasswordChange] = useInput('')
    const [cnfrmPassword,handleCnfrmPasswordChange] = useInput('')
    const [errors,setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        let listError = {}

        if (password.length < 6) {
            listError.password = locale === 'id' ? 'password minimal memiliki 6 karakter' : "password must be at least 6 characters"
        }
        if (password !== cnfrmPassword) {
            listError.cnfrmpassword = locale === 'id' ? 'password tidak cocok' : 'password does not match'
        }

        setErrors(listError)

        if (Object.keys(listError).length === 0) {
            register({name,email,password})
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="form-input">
            {loading ? <img src="/loading.svg" width={170} style={{ margin: 'auto' }} alt="" /> 
            :
            <>
            <div className="wrap-input">
                <input type="text" value={name} onChange={handleNameChange} placeholder="name" required />
            </div>
            <div className="wrap-input">
                <input type="email" value={email} onChange={handleEmailChange} placeholder="email" required />
            </div>
            <div className="wrap-input">
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="password" required />
                <p className="text-error">{errors.password}</p>
            </div>
            <div className="wrap-input">
                <input type="password" value={cnfrmPassword} onChange={handleCnfrmPasswordChange} placeholder={locale === 'id' ? 'konfirmasi password' : 'confirm password'} required />
                <p className="text-error">{errors.cnfrmpassword}</p>
            </div>
            <button className="btn-auth">{locale === 'id' ? 'Daftar' : 'Sign Up'}</button>
            </>}
        </form>
    )
}

RegisterInput.prototype = {
    register: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default RegisterInput