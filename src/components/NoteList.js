import CardNote from "./CardNote"
import PropTypes from 'prop-types';

const NoteList = ({notes,messageNotFound,keyword}) => {
    return (
        <div className="note-list">
            {
                notes.length > 0 ?

                notes.filter((note) => {
                    if (keyword === '') {
                        return note
                    }else if (note.title.toLowerCase().includes(keyword.toLowerCase())) {
                        return note
                    }
                    return false
                }).map(note => 
                    <CardNote key={note.id} note={note} />
                )
                    :
                <p className="text-note-not-found">{messageNotFound}</p>
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    messageNotFound: PropTypes.string.isRequired
}

export default NoteList