import { useState } from 'react';
// import { Message, getMessage } from '../data/messages';
import { Rent_item, getRent } from '../data/rented_list';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';

function ViewMessage() {
  // const [message, setMessage] = useState<Message>();
  const [Rented, setMessage] = useState<Rent_item>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getRent(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Rent list" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {Rented ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {Rented.person}
         
                  <span className="date">
                    <IonNote>{Rented.date}</IonNote>
                  </span>
                </h2>
                <h3>
                  Until: <IonNote> {Rented.expected_date}</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{Rented.obj}</h1>
              <p>
              {Rented.comment}
              </p>
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
        <div >
        <IonItem  >
          <IonButton  slot="end" color="primary" className="ion-margin" >ITEM RETURNED</IonButton>
          <IonButton  slot="end" color="danger" className="ion-margin" >SEND REMAINDER SMS</IonButton>
         
        </IonItem>
         </div>
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
