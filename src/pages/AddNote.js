import { useContext } from "react"
import NoteInputWrapper from "../components/NoteInput"
import LocaleContext from "../contexts/LocaleContext"

const AddNote = () => {
    const {locale} = useContext(LocaleContext)

    return (
        <div className="container">
            <h1>{locale === 'id' ? 'Tambah catatan baru' : 'Add new note'}</h1>
            <NoteInputWrapper />
        </div>
    )
}

export default AddNote