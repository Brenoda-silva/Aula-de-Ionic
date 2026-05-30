import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aula pratica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Aula pratica</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ion-button expand="block" color="primary">
          Salvar
        </ion-button>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
