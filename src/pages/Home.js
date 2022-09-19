import React, { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList"
import SearchBar from "../components/SearchBar"
import { getActiveNotes } from "../utils/network-data";

const HomeWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [notes,setNotes] = useState([])
  const [keyword,setKeyword] = useState(searchParams.get('keyword') || '')

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword)
    setSearchParams({keyword})
  }

  const getNotesUser = async () => {
    const {data} = await getActiveNotes()
    setNotes(data)
  }
  
  useEffect(() => {
    getNotesUser()
  }, []);

  return (
    <div className="container">
      <h1>Active Notes</h1>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={notes} keyword={keyword} messageNotFound="Tidak ada catatan" />
    </div>
  )
}

export default HomeWrapper