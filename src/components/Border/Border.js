import { Link } from 'react-router-dom';
import classes from './Border.module.css';
import DarkModeContext from '../../store/darkMode-context';
import { useContext } from 'react';
const Border = ({ border }) => {
  const ctx = useContext(DarkModeContext);
  return (
    <>
      <Link to={`/${border}`} className={classes.container}>
        <p className={ctx.isDark ? classes.dark : classes.card}>{border}</p>
      </Link>
    </>
  );
};
export default Border;
