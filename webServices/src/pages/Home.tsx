import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import { useEffect, useState } from 'react';

const Home: React.FC = () => {

  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("")
  const [regiao, setRegiao] = useState("")

  useEffect(() => {

    fetch("https://viacep.com.br/ws/48680000/json/")
      .then(res => res.json())
      .then(data => {
        setCidade(data.localidade)
        setEstado(data.estado)
        setRegiao(data.regiao)
        console.log(data)
      });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <h1>Consultar CEP</h1>
          <h2>Cidade</h2>
          <p>{cidade}</p>
          <p>{estado}</p>
          <p>{regiao}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
