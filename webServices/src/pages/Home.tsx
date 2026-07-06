import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import ConsultaCep from '../components/ConsultaCep';

const Home: React.FC = () => {

  return (
    <IonPage>
      
      <IonContent fullscreen>
        
        <div>
          <ConsultaCep />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
