import { BiArchiveIn ,BiArchiveOut} from "react-icons/bi";
import PropTypes from 'prop-types';

const ArchiveOrNotBtn = ({id,archived,onArchivedAndActiveHandler}) => {
    return (
        <>
        {
            archived ? 
                <BiArchiveOut size={28} style={{ marginRight: 15 }} onClick={() => onArchivedAndActiveHandler(id,archived)} /> 
                : 
                <BiArchiveIn size={28} style={{ marginRight: 15 }} onClick={() => onArchivedAndActiveHandler(id,archived)} /> 
        }
        </>
    )
}

ArchiveOrNotBtn.propTypes = {
    id: PropTypes.string,
    archived: PropTypes.bool,
    onArchivedAndActiveHandler: PropTypes.func.isRequired
}

export default ArchiveOrNotBtn