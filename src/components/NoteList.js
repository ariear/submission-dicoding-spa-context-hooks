import CardNote from "./CardNote"
import PropTypes from 'prop-types';

const NoteList = ({notes,messageNotFound,keyword,loading}) => {
    return (
        <div className="note-list">
            {
                loading ? <h2>Loading...</h2> :
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
                <h2>{messageNotFound}</h2>
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    messageNotFound: PropTypes.string.isRequired,
    loading: PropTypes.bool
}

export default NoteList