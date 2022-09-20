import { Link , useNavigate} from "react-router-dom"
import RegisterInput from "../components/RegisterInput"
import { register } from "../utils/network-data";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import LocaleContext from "../contexts/LocaleContext";

const RegisterPage = () => {
    const {locale} = useContext(LocaleContext)
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate();

    const onRegisterHandler = async (user) => {
        setLoading(true)
        const {error,message} = await register(user)
        if (!error) {
            setLoading(false)
            navigate('/')
        }else{
            setLoading(false)
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    return (
        <div className="container-form">
            <div className="form-parent">
                <ToastContainer />
                <h2>{locale === 'id' ? 'Daftar!' : 'Sign Up!'}</h2>
                <RegisterInput loading={loading} register={onRegisterHandler} />
                <p><Link to='/login'>{locale === 'id' ? 'Punya akun?' : 'Have account?'}</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage