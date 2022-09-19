import useInput from "../contexts/useInput"

const LoginInput = ({login}) => {
    const [email,handleEmailChange] = useInput('')
    const [password,handlePasswordChange] = useInput('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        login({email,password})
    }

    return (
    <form onSubmit={onSubmitHandler} className="form-input">
        <input type="email" value={email} onChange={handleEmailChange} placeholder="email" required />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="password" required />
        <button className="btn-auth">Sign In</button>
    </form>
    )
}

export default LoginInput