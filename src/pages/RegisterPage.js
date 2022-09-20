import { Link , useNavigate} from "react-router-dom"
import RegisterInput from "../components/RegisterInput"
import { register } from "../utils/network-data";

const RegisterPage = () => {
    const navigate = useNavigate();

    const onRegisterHandler = async (user) => {
        const {error} = await register(user)
        if (!error) {
            navigate('/')
        }
    }

    return (
        <div className="container-form">
            <div className="form-parent">
                <h2>Sign Up!</h2>
                <RegisterInput register={onRegisterHandler} />
                <p><Link to='/login'>Have account?</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage