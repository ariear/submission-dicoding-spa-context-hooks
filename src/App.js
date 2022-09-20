import { useEffect, useState, useMemo } from "react"
import { Route, Routes ,useNavigate} from "react-router-dom"
import Nav from "./components/Nav"
import LocaleContext from "./contexts/LocaleContext"
import ThemeContext from "./contexts/ThemeContext"
import AddNote from "./pages/AddNote"
import ArchivedNotes from "./pages/ArchivedNotes"
import DetailNoteWrapper from "./pages/DetailNote"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import RegisterPage from "./pages/RegisterPage"
import { getUserLogged, putAccessToken } from "./utils/network-data"

const App  = () => {
  const navigate = useNavigate();

  const [authedUser,setAuthedUser] = useState(null)
  const [initializing,setInitializing] = useState(true)

  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light')
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'

      localStorage.setItem('theme',newTheme)
      return newTheme;
    });
  }

  const [locale,setLocale] = useState(localStorage.getItem('locale') || 'en')
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale',newLocale)
      return newLocale
    });
  }

  const onLoginSuccess = async ({accessToken}) => {
    putAccessToken(accessToken)
    const {data} = await getUserLogged()

    setAuthedUser(data)
    
    navigate('/')
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

    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale
    }
  },[locale])
  

  if (initializing) {
    return null
  }

  if (authedUser === null) {
    return (
      <>
      <LocaleContext.Provider value={localeContextValue}>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LocaleContext.Provider>
      </>      
    )
  }

  return (
    <>
    <ThemeContext.Provider value={contextValue} >
      <LocaleContext.Provider value={localeContextValue} >
        <Nav logout={onLogout} />
        <Routes>
          <Route path="/" element={<Home authedUser={authedUser} />} />
          <Route path="/addnote" element={<AddNote />} />
          <Route path="/notes/:id" element={<DetailNoteWrapper />} />
          <Route path="/archivednotes" element={<ArchivedNotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App