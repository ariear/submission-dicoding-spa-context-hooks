import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList"
import SearchBar from "../components/SearchBar"
import LocaleContext from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/network-data"

const ArchivedNotes = () => {
    const {locale} = useContext(LocaleContext)

    const [searchParams, setSearchParams] = useSearchParams();
  
    const [keyword,setKeyword] = useState(searchParams.get('keyword') || '')

    const [notes,setNotes] = useState([])
    const [loading,setLoading] = useState(true)

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword)
        setSearchParams({keyword})
      }
      
    const getArchiveNotesHandle = async () => {
        setLoading(true)
        const {data} = await getArchivedNotes()
        setNotes(data)
        setLoading(false)
    }

    useEffect(() => {
        getArchiveNotesHandle()
    }, []);

    return(
        <div className="container">
        <h1>{locale === 'id' ? 'Catatan Terarsip' : 'Archived Notes'}</h1>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <NoteList notes={notes} loading={loading} keyword={keyword} messageNotFound={locale === 'id' ? 'Arsip kosong' : 'Archive not found'} />
        </div>
    )
}

export default ArchivedNotes