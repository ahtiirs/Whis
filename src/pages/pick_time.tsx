

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonButton,
  IonCardTitle,
  IonDatetime,
} from '@ionic/react';

import './ViewMessage.css';

const add: React.FC = () => {
return (

  <IonPage>
  <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Rent list" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>


  <IonContent>
    
    <IonCard>
      <IonCardHeader>
      <IonCardTitle>Select return time</IonCardTitle>
  
       
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonDatetime first-day-of-week="1" ></IonDatetime>
        </IonItem>

        <IonItem>
            <IonButton routerLink="add">Select time</IonButton>
        </IonItem>
       
     </IonCardContent>
    </IonCard>
    

      <IonCardContent>
     
  </IonCardContent>


   
 

  </IonContent>
</IonPage>


  );
};

export default add;

