import classes from './Country.module.css';
import DarkModeContext from '../../store/darkMode-context';
import { useContext } from 'react';

const Country = ({ img, capital, population, name, region }) => {
  const ctx = useContext(DarkModeContext);
  return (
    <div className={ctx.isDark ? classes.darkMode : classes.container}>
      <img src={img} alt="country" />
      <div className={classes.info}>
        <p className={ctx.isDark ? classes.darkTitle : classes.title}>{name}</p>
        <p className={ctx.isDark ? classes.lightText : ''}>
          <strong>Capital 🏙 : </strong>
          {capital}
        </p>
        <p className={ctx.isDark ? classes.lightText : ''}>
          <strong>Region 🌎 : </strong>
          {region}
        </p>
        <p className={ctx.isDark ? classes.lightText : ''}>
          <strong>Population 👪 :</strong> {population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
export default Country;
