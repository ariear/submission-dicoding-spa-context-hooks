import React from "react"
import { useNavigate } from "react-router-dom";
import useInput from "../contexts/useInput";
import { addNote } from "../utils/network-data";

const NoteInputWrapper = () => {
    const navigate = useNavigate();

    const [title,handleTitleChange] = useInput('')
    const [body,handleBodyChange] = useInput('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        await addNote({title,body})

        navigate('/')
    }

    return (
        <form className="form-input" onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Title here" value={title} onChange={handleTitleChange} required />
            <textarea cols="30" rows="10" placeholder="Body here" value={body} onChange={handleBodyChange} required></textarea>
            <button>Add</button>
        </form>        
    )
}

export default NoteInputWrapper