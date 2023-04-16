import classes from './Title.module.css';
import Switch from '@mui/material/Switch';
import DarkModeContext from '../../store/darkMode-context';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from 'react';
const Title = () => {
  const ctx = useContext(DarkModeContext);

  return (
    <div className={ctx.isDark ? classes.lightMode : classes.titleBox}>
      <h2 className={classes.title}>Where in the world?</h2>

      <div className={classes.darkMode}>
        <DarkModeOutlinedIcon />
        <p>Dark Mode</p>
      </div>
      <Switch
        onClick={ctx.darkModeHandler}
        color="default"
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  );
};
export default Title;
