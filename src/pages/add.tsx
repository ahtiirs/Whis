
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonButton,
  IonCardTitle,
  IonInput,
  IonSelectOption,
  IonSelect,
  IonFab,
  IonFabButton,
  
} from '@ionic/react';
import './ViewMessage.css';
import { checkmark } from 'ionicons/icons';


const Rent_add: React.FC = () => {
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
      <IonCardTitle>Add rent item</IonCardTitle>
     
 
  
       
      </IonCardHeader>

    <IonCardContent>
      <IonItem>
        <IonInput  placeholder="Item description" ></IonInput>
      </IonItem>

      <IonItem>
         <IonInput placeholder="comments here" ></IonInput>
      </IonItem>
        <IonLabel slot="end">To whom?</IonLabel>
      <IonItem>  
          <IonSelect slot="end">
            <IonSelectOption value="brown">add new</IonSelectOption>
            <IonSelectOption value="blonde">Ainar Lillemaa</IonSelectOption>
            <IonSelectOption value="black">Jaan Saviir</IonSelectOption>
            <IonSelectOption value="red">Karu Pepu</IonSelectOption>
            <IonSelectOption value="red">Naaber</IonSelectOption>
          </IonSelect>
       </IonItem>
       <IonItem>
          <IonButton slot="end" routerLink="pick_time">Pick return time</IonButton>
       </IonItem>
       <IonItem>
          <IonInput  placeholder="cost" ></IonInput>
      </IonItem>
     </IonCardContent>
    </IonCard>
    

      <IonCardContent>
     
  </IonCardContent>

  <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary" routerLink="home">

          <IonIcon icon={checkmark} /> 

          </IonFabButton>
        </IonFab>
   
 

  </IonContent>
</IonPage>
  );
};

export default Rent_add;

