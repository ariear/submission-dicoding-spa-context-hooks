import React, { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList"
import SearchBar from "../components/SearchBar"
import { getArchivedNotes } from "../utils/network-data"

const ArchivedNotes = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  
    const [keyword,setKeyword] = useState(searchParams.get('keyword') || '')

    const [notes,setNotes] = useState([])

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword)
        setSearchParams({keyword})
      }
      
    const getArchiveNotesHandle = async () => {
        const {data} = await getArchivedNotes()
        setNotes(data)
    }

    useEffect(() => {
        getArchiveNotesHandle()
    }, []);

    return(
        <div className="container">
        <h1>Archived Notes</h1>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <NoteList notes={notes} keyword={keyword} messageNotFound="Arsip kosong" />
        </div>
    )
}

export default ArchivedNotes