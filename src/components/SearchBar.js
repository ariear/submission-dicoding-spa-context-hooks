import PropTypes from 'prop-types';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const SearchBar = ({ keyword, keywordChange }) => {
    const {locale} = useContext(LocaleContext)

    return (
        <input type="search" value={keyword} onChange={(event) => keywordChange(event.target.value)} placeholder={locale === 'id' ? 'Cari berdasarkan judul' : 'Search by title'} className="search-input" />
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
  }

export default SearchBar