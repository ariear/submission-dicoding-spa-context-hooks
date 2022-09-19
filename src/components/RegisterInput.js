const RegisterInput = () => {
    return (
        <form className="form-input">
        <input type="text" placeholder="name" required />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <input type="password" placeholder="confirm password" required />
        <button className="btn-auth">Sign Up</button>
    </form>
    )
}

export default RegisterInput