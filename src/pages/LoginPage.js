import { Link } from "react-router-dom"
import LoginInput from "../components/LoginInput"
import { login } from "../utils/network-data"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import LocaleContext from "../contexts/LocaleContext";

const LoginPage = ({loginSuccess}) => {
    const {locale} = useContext(LocaleContext)
    const [loading,setLoading] = useState(false)

    const onLogin = async ({email,password}) => {
        setLoading(true)
        const {error,data, message} = await login({email,password})
        setLoading(false)
        if (!error) {
            loginSuccess(data)
        }else{
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
                <h2>{locale === 'id' ? 'Masuk!' : 'Sign In!'}</h2>
                <LoginInput loading={loading} login={onLogin} />
                <p><Link to='/register'>{locale === 'id' ? 'Tidak punya akun?' : `Don't Have account?`}</Link></p>
            </div>
        </div>
    )
}

export default LoginPage