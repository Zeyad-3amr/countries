import Border from '../../Border/Border';
import classes from './CountryDetails.module.css';
import DarkModeContext from '../../../store/darkMode-context';
import { useContext } from 'react';
const CountryDetails = ({
  img,
  population,
  capital,
  name,
  region,
  currency,
  languages,
  borders,
  area,
  symbol,
  native,
  sub,
  timezone,
}) => {
  const ctx = useContext(DarkModeContext);

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={img} />
      </div>

      <div className={classes.info}>
        <p className={ctx.isDark ? classes.darkTitle : classes.title}>
          {' '}
          {name}
        </p>

        <div className={classes.details}>
          <div className={classes.column1}>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Native Name :</strong> {native}
            </p>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Population👪 :</strong> {population}
            </p>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Capital 🏙 :</strong> {capital}
            </p>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Region 🌏 :</strong> {region}
            </p>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Timezone 🕧:</strong> {timezone}
            </p>
          </div>

          <div className={classes.column2}>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Sub region 🌏 :</strong> {sub}
            </p>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Language🔤 :</strong> {languages}
            </p>
            <div className={ctx.isDark ? classes.lightBorder : classes.borders}>
              <strong>Borders 🗺 :</strong>
              {borders !== undefined &&
                borders.map((border) => (
                  <Border key={border} border={border} />
                ))}

              {borders === undefined && <p>No Borders</p>}
            </div>

            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Area 🏞 : </strong> {area} km²
            </p>
            <p className={ctx.isDark ? classes.lightMode : ''}>
              <strong>Currency 💰 :</strong> {currency} {symbol}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
