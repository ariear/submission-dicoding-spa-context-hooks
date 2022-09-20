import { useContext } from "react"
import LocaleContext from "../contexts/LocaleContext"

const NotFound = () => {
    const {locale} = useContext(LocaleContext)

    return (
        <div className="container">
            <h2 style={{ textAlign: 'center' }}>{locale === 'id' ? 'Upsss Halaman tidak ditemukan' : 'Upsss Page not found'}</h2>
        </div>
    )
}

export default NotFound