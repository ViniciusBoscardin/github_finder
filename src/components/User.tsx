import { UserProps } from '../types/user';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './User.module.css';

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
  repos_url,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationOn />
          <span>{location}</span>
        </p>
      )}

      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>

      <Link to={`/repos_url/${repos_url}`}>Ver melhores projetos</Link>
    </div>
  );
};

export default User;
