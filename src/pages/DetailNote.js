import React, { useEffect, useState } from "react";
import { useParams ,useNavigate  } from "react-router-dom";
import ArchiveOrNotBtn from "../components/ArchiveOrNotBtn";
import DeleteBtn from "../components/DeleteBtn";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";
import NotFound from "./NotFound";

const DetailNoteWrapper = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    
    const [note,setNote] = useState({})
    
    
    const onArchivedAndActiveHandler = async (id,archived) => {
        if (archived) {
            await unarchiveNote(id)
        }else{
            await archiveNote(id)
        }
        
        navigate('/')
    }
    
    const onDeleteHandler = async (id) => {
        await deleteNote(id)

        navigate('/')
    }
    
    
    useEffect(() => {
        const getDetailNote = async () => {
            const {data} = await getNote(id)
            setNote(data)
        }
        
        getDetailNote()    
    },[id]);

        return(
            <>
            { !note ? (
                <NotFound />
            ) : (
            <div className="container">
                <div className="title-detail">
                <h1>{note.title}</h1>
                <div>
                <ArchiveOrNotBtn id={note.id} archived={note.archived} onArchivedAndActiveHandler={onArchivedAndActiveHandler} />
                <DeleteBtn id={note.id} onDeleteHandler={onDeleteHandler} />
                </div>
                </div>
                <p>{new Date(note.createdAt).toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="content-detail">{note.body}</p>
            </div>
            )}
            </>
        )
}

export default DetailNoteWrapper