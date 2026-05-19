import React, { useState } from 'react'
import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Home.css';
import { Tarefa } from '../models/Tarefa';

const Home: React.FC = () => {
  const [tarefa, setTarefa] = useState<Tarefa[]>([]);

  function adicionar() {
    const nova = new Tarefa("Estudar", "POO no Ionic");

    nova.concluir();

    setTarefa([...tarefa, nova]);

    
    
    const alerta = nova.get();

    alert(alerta)

    console.log(tarefa)
  }
  
  return (
    <IonPage>
      <IonContent>
        <IonButton  onClick={adicionar}>
          Adicionar Tarefa
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
