import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
// import { Message } from '../data/messages';
import { Rent_item } from '../data/rented_list';
import './MessageListItem.css';

interface RentListItemProps {
  rent_item: Rent_item;
}

const RentListItem: React.FC<RentListItemProps> = ({ rent_item }) => {
  return (
    <IonItem routerLink={`/message/${rent_item.id}`} detail={false}>
      <div slot="start" className=""></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {rent_item.obj}
          <span className="date">
            <IonNote>{rent_item.date}</IonNote>
          </span>
        </h2>
        <h3>{rent_item.person}</h3>
        {/* <p>
        {rent_item.comment} 
        </p> */}
        <p>
        Lubatud tagastus: {rent_item.expected_date} 
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default RentListItem;
