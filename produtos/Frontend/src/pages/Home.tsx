import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonItem } from '@ionic/react';
import './Home.css';
import { Produto } from '../models/Produto';
import { useHistory } from 'react-router';

interface HomeProps {
  produtos: Produto[];
  onRemove: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ produtos, onRemove }) => {
  const history = useHistory();

  function irCadastro() {
    history.push('/cadastro');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controle de Estoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h2>Bem-vindo ao Controle de Estoque</h2>

        <IonButton onClick={irCadastro}>Cadastrar Produto</IonButton>

        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado ainda.</p>
        ) : (
          <IonList>
            {produtos.map((produto) => (
              <IonItem key={produto.id}>
                <IonLabel>
                  {produto.nome} - R$ {produto.preco.toFixed(2)} | Estoque: {produto.estoque}
                </IonLabel>
                <IonButton
                  fill='clear'
                  color='danger'
                  size='small'
                  onClick={() => onRemove(produto.id)}
                >
                  Remover
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;