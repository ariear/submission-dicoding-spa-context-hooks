import { useState } from "react"
import useInput from "../contexts/useInput"

const RegisterInput = ({register}) => {
    const [name,handleNameChange] = useInput('')
    const [email,handleEmailChange] = useInput('')
    const [password,handlePasswordChange] = useInput('')
    const [cnfrmPassword,handleCnfrmPasswordChange] = useInput('')
    const [errors,setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        let listError = {}
        listError = {}

        if (password !== cnfrmPassword) {
            listError['cnfrmpassword'] = "password does not match"
        }

        setErrors(listError)

        if (listError == {}) {
            register({name,email,password})
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="form-input">
            <input type="text" value={name} onChange={handleNameChange} placeholder="name" required />
            <input type="email" value={email} onChange={handleEmailChange} placeholder="email" required />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="password" required />
            <input type="password" value={cnfrmPassword} onChange={handleCnfrmPasswordChange} placeholder="confirm password" required />
            <p>{errors['cnfrmpassword']}</p>
            <button className="btn-auth">Sign Up</button>
        </form>
    )
}

export default RegisterInput