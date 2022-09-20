import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import useInput from "../contexts/useInput";
import { addNote } from "../utils/network-data";

const NoteInputWrapper = () => {
    const {locale} = useContext(LocaleContext)
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate();

    const [title,handleTitleChange] = useInput('')
    const [body,handleBodyChange] = useInput('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)

        await addNote({title,body})
        setLoading(false)
        navigate('/')
    }

    return (
        <>
        {
            loading ? <h2 style={{ textAlign: 'center' }}>Loading...</h2> :
        <form className="form-input" onSubmit={onSubmitHandler}>
            <div className="wrap-input">
                <input type="text" placeholder={locale === 'id' ? 'Tulis judul disini' : 'Title here'} value={title} onChange={handleTitleChange} required />
            </div>
            <div className="wrap-input">
                <textarea cols="30" rows="10" placeholder={locale === 'id' ? 'Tulis isi catatan disini' : 'Body here'} value={body} onChange={handleBodyChange} required></textarea>
            </div>
            <button>{locale === 'id' ? 'tambah' : 'add'}</button>
        </form>        
        }
        </>
    )
}

export default NoteInputWrapper