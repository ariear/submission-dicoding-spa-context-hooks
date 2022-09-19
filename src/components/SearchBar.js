import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <input type="search" value={keyword} onChange={(event) => keywordChange(event.target.value)} placeholder="Search by name" className="search-input" />
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
  }

export default SearchBar