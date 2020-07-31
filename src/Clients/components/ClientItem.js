import React, { useContext } from 'react';
import Avatar from '../../Shared/components/UIElements/Avatar';
import { Link } from 'react-router-dom';
import Card from '../../Shared/components/UIElements/Card';
import { DarkModeContext } from '../../Shared/context/dark-mode-context';
import './ClientItem.css'


const ClientItem = props => {
  const mode = useContext(DarkModeContext)

  return <li className={mode.darkMode ? "dark-client-item" : "light-client-item"}>
    <Card className={mode.darkMode ? "dark-client-item__content" : "light-client-item__content"}>
    <Link to={`/${props.id}/checkins`}>
      <div className={mode.darkMode ? "dark-client-item__image" : "light-client-item__image"}>
        <Avatar image={`http://localhost:5000/${props.image}`} alt={props.name} />
      </div>
      <div className={mode.darkMode ? "dark-client-item__info" : "light-client-item__info"}>
       <h2>{props.name}</h2>
       <h3>{props.checkinCount} {props.checkinCount === 1 ? "Checkin" : "Checkins"}</h3>
      </div>
    </Link>
    </Card>
</li>
 
  
}


export default ClientItem;
      