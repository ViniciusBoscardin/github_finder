import { Outlet } from 'react-router-dom';
import classes from './App.module.css';
import './index.css';

function App() {
  return (
    <div className={classes.app}>
      <ul className={classes.background}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
