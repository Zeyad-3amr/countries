import Filter from '../../Filters/Filter';
import Search from '../../Search/Search';
import classes from '../Body/Body.module.css';
import Country from '../../Country/Country';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import DarkModeContext from '../../../store/darkMode-context';
const Body = () => {
  const [filter, setFilter] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const ctx = useContext(DarkModeContext);

  useEffect(() => {
    const fetchData = async () => {
      setHidden(true);
      setIsLoading(true);
      const response = await fetch(`https://restcountries.com/v2/all`);
      if (!response.ok) return;
      const data = await response.json();
      setIsLoading(false);
      setCountryData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.searchComp}>
          <Search setCountryData={setCountryData} />
        </div>
        <div className={classes.filterComp}>
          <Filter
            filter={filter}
            setFilter={setFilter}
            setCountryData={setCountryData}
            setIsLoading={setIsLoading}
            hidden={hidden}
            setHidden={setHidden}
          />
        </div>
      </div>
      {isLoading ? (
        <div className={ctx.isDark ? classes.darkSpinner : classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.countries}>
          {countryData
            .filter((country) => country.capital !== undefined)
            .map((country) => (
              <Link
                key={country.alpha3Code}
                to={`/${country.alpha3Code}`}
                className={classes.NavLink}
              >
                <Country
                  key={country.name}
                  img={country.flags.png}
                  capital={country.capital}
                  population={country.population}
                  name={country.name}
                  region={country.region}
                />
              </Link>
            ))}
        </div>
      )}
    </>
  );
};
export default Body;
