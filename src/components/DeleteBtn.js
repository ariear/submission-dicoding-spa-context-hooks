import { FiTrash } from "react-icons/fi";
import PropTypes from 'prop-types';

const DeleteBtn = ({onDeleteHandler,id}) => {
    return (
        <FiTrash size={28} onClick={() => onDeleteHandler(id)} />
    )
}

DeleteBtn.propTypes = {
    onDeleteHandler: PropTypes.func.isRequired,
    id: PropTypes.string
}

export default DeleteBtn