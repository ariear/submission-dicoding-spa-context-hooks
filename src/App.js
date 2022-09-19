import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import AddNote from "./pages/AddNote"
import ArchivedNotes from "./pages/ArchivedNotes"
import DetailNoteWrapper from "./pages/DetailNote"
import HomeWrapper from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import RegisterPage from "./pages/RegisterPage"
import { getUserLogged, putAccessToken } from "./utils/network-data"

const App  = () => {
  const [authedUser,setAuthedUser] = useState(null)
  const [initializing,setInitializing] = useState(true)

  const onLoginSuccess = async ({accessToken}) => {
    putAccessToken(accessToken)
    const {data} = await getUserLogged()

    setAuthedUser(data)
  }

  
  const onLogout = () => {
    setAuthedUser(null)
    
    putAccessToken('')
  }
  
  const getUser = async () => {
    if (localStorage.getItem('accessToken')) {
      const {data} = await getUserLogged()
  
      setAuthedUser(data)
    }
    setInitializing(false)
  }

  useEffect(() => {
    getUser()
  }, []);
  

  if (initializing) {
    return null
  }

  if (authedUser === null) {
    return (
      <>
      <Routes>
        <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </>      
    )
  }

  return (
    <>
    <Nav logout={onLogout} />
    <Routes>
      <Route path="/" element={<HomeWrapper />} />
      <Route path="/addnote" element={<AddNote />} />
      <Route path="/notes/:id" element={<DetailNoteWrapper />} />
      <Route path="/archivednotes" element={<ArchivedNotes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App