import React from 'react';
import CheckinItem from './CheckinItem';
import Card from '../../Shared/components/UIElements/Card';
import CheckinTotals from '../components/CheckinTotals';
import Button from '../../Shared/components/FormElements/Button';
import './CheckinList.css'



const CheckinList = props => {
    console.log(props.items)
  if (!props.items) {
    return (
      <div className="client-list center">
      <Card>
        <h2>No checkins found. Maybe create one?</h2>
        <Button to="/checkins/new">Log Progress</Button>
      </Card>
      </div>
    )
  }

return (
<React.Fragment> 
 <CheckinTotals
    clientId={props.clientId} 
    name={props.items[0].name}
    client={props.items[0].client} />


<ul className="client-list">
  {props.items.map(checkin => (
    <CheckinItem
      key={checkin.id}
      id={checkin.id}
      image={checkin.image}
      date={checkin.date}
      weight={checkin.weight}
      weeksOut={checkin.weeksOut}
      bodyFat={checkin.bodyFat}
      // week_loss={checkin.week_loss}
      athlete={checkin.athlete} 
      // notes={checkin.notes}
      onDelete={props.onDeleteCheckin}
      />
  ))}
</ul>
</React.Fragment>
)
}
export default CheckinList;