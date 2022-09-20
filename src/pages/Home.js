import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList"
import SearchBar from "../components/SearchBar"
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";

const Home = ({authedUser}) => {
  const {locale} = useContext(LocaleContext)

  const [searchParams, setSearchParams] = useSearchParams();
  
  const [notes,setNotes] = useState([])
  const [keyword,setKeyword] = useState(searchParams.get('keyword') || '')
  const [loading,setLoading] = useState(true)

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword)
    setSearchParams({keyword})
  }

  const getNotesUser = async () => {
    setLoading(true)
    const {data} = await getActiveNotes()
    setNotes(data)
    setLoading(false)
  }
  
  useEffect(() => {
    getNotesUser()
  }, []);

  return (
    <div className="container">
      <div className="wrap-title">
      <h1>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h1>
      <h2>{locale === 'id' ? 'Hai' : 'Hello'} {authedUser.name}</h2>
      </div>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={notes} keyword={keyword} loading={loading} messageNotFound={locale === 'id' ? 'Tidak ada catatan' : 'Note not found'} />
    </div>
  )
}

export default Home