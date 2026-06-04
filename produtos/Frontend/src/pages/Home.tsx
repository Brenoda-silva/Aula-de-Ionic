import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonItem, IonIcon, useIonViewDidEnter } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import './Home.css';
//import { Produto } from '../models/Produto';
import { useHistory } from 'react-router';
import { ProdutoService } from '../services/ProdutoService';

/*interface HomeProps {
  produtos: Produto[];
  onRemove: (id: string) => void;
}*/

const Home: React.FC = () => {
  const history = useHistory();

  function irCadastro() {
    history.push('/cadastro');
  }

  const [ produtos, setProdutos] = useState([]);
  const service = new ProdutoService();

  useIonViewDidEnter(() => {
    carregar();
  }, [])

  async function carregar() {
    const dados = await service.listar();
    setProdutos(dados)
  }

  async function excluir(id: number) {
    await service.remover(id);
    carregar();
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

        
          <IonList>
            {produtos.map((p: any) => (
              <IonItem key={p.id}>
                <IonLabel>
                  {p.nome} - R$ {p.preco} | Estoque: {p.estoque}
                </IonLabel>

                <IonButton onClick={() => excluir(p.id)} color={'danger'}><IonIcon icon={trashOutline}></IonIcon></IonButton>
          
              </IonItem>
            ))}
          </IonList>

          
       
      </IonContent>
    </IonPage>
  );
};

export default Home;