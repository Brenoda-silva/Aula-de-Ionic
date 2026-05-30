import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonBadge } from '@ionic/react';
import { useState } from 'react';

import './Home.css';

const Home: React.FC = () => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <IonCard className='cardapio'>
      
      <img alt="Silhouette of mountains" src="../public/image.png" />
      <IonBadge className='quantidade' slot="start"  color={'danger'}>11</IonBadge>
      <IonCardHeader>
        <IonCardTitle>Esfirra</IonCardTitle>
        <IonCardSubtitle>R$ 6,00</IonCardSubtitle>

      </IonCardHeader>

      <IonCardContent className='cardcontent'>


        <IonBadge color={'light'} onClick={decrement}>-</IonBadge>
        <IonBadge color={'light'}>{value}</IonBadge>
        <IonBadge color={'light'} onClick={increment}>+</IonBadge>
    
      </IonCardContent>
      <IonButton color="warning">Add ao carrinho</IonButton>
      <IonButton color="primary">Reservar</IonButton>

    </IonCard>
  );
};

export default Home;
