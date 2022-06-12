import { add } from 'ionicons/icons';
import RentListItem from '../components/RentListItem';
import { useState } from 'react';
import { Rent_item, getRented } from '../data/rented_list';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonSearchbar,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [Rented_list, setMessages] = useState<Rent_item[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getRented();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>


        <IonToolbar>

          <IonTitle>Rented items </IonTitle>
     
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Rented <IonBadge color="warning">2</IonBadge>
            </IonTitle>
            

          </IonToolbar>
          <IonSearchbar animated></IonSearchbar>
        </IonHeader>

        <IonList>
          {Rented_list.map(m => <RentListItem key={m.id} rent_item={m} />)}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary" routerLink="add">

            <IonIcon icon={add} /> 

          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;
