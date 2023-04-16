import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classes from './CountryInfo.module.css';
import CountryDetails from '../Pages/countryDetails/CountryDetails';
import { CircularProgress } from '@mui/material';
import DarkModeContext from '../../store/darkMode-context';

const CountryInfo = () => {
  const { code } = useParams();
  const [countryInfo, setCountryInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(DarkModeContext);

  useEffect(() => {
    const fetchHandler = async () => {
      setIsLoading(true);
      const response = await fetch(
        `   https://restcountries.com/v2/alpha/${code}`
      );
      if (!response.ok) return;
      const data = await response.json();
      setCountryInfo([data]);
      setIsLoading(false);
    };
    fetchHandler();
  }, [code]);
  {
    console.log(countryInfo);
  }

  return (
    <div>
      {isLoading ? (
        <div className={ctx.isDark ? classes.dark : classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className={ctx.isDark ? classes.darkBtn : classes.Button}>
            <Link
              to="/"
              className={ctx.isDark ? classes.darkLink : classes.Link}
            >
              Back
            </Link>
          </div>
          <div>
            {countryInfo.map((country) => (
              <CountryDetails
                key={country.name}
                img={country.flags.png}
                capital={country.capital}
                population={country.population.toLocaleString()}
                name={country.name}
                region={country.region}
                currency={country.currencies[0].name}
                symbol={country.currencies[0].symbol}
                languages={country.languages[0].name}
                borders={country.borders}
                native={country.nativeName}
                sub={country.subregion}
                timezone={country.timezones[0]}
                area={!country.area ? 'unkown' : country.area.toLocaleString()}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CountryInfo;
