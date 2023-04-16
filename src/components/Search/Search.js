import classes from './Search.module.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import DarkModeContext from '../../store/darkMode-context';
import { useContext } from 'react';

const Search = ({ setCountryData }) => {
  const ctx = useContext(DarkModeContext);

  const fetchCountry = async (e) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${e.target.value}`
    );
    if (!response.ok) return;
    const data = await response.json();
    setCountryData(data);
  };

  return (
    <div className={classes.header}>
      <div className={ctx.isDark ? classes.darkMode : classes.search}>
        <SearchSharpIcon />
        <input
          className={ctx.isDark ? classes.darkSearchMode : classes.searchBar}
          type="text"
          id="searchedCountry"
          placeholder="Search for a country..."
          onChange={fetchCountry}
        />
      </div>
    </div>
  );
};
export default Search;
