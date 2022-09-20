import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const CardNote = ({note}) => {
    return (
        <Link to={`/notes/${note.id}`} className="cardNote">
        <div>
            <p className="title-card">{note.title}</p>
            <p>{note.body.substring(0,70) + (note.body.length < 70 ? '' : '...')}</p>
            <p className="date-card">{new Date(note.createdAt).toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        </Link>
    )
}

CardNote.propTypes = {
    note: PropTypes.object.isRequired
}

export default CardNote