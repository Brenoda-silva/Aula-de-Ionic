import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonItem, useIonViewDidEnter } from '@ionic/react';

import './Home.css';
//import { Produtos } from '../models/Produto';
import { useHistory } from 'react-router';
import { ProdutoService } from '../services/ProdutoService';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ButtonExcluir from '../components/buttonExcluir';
/*interface HomeProps {
  produtos: Produto[];
  onRemove: (id: string) => void;
}*/

const Home: React.FC = () => {
  const history = useHistory();

  function irCadastro() {
    history.push('/cadastro');
  }

  const [produtos, setProdutos] = useState<any[]>([]);

  const service = new ProdutoService();

  useIonViewDidEnter(() => {
    carregar();
  }, [])

  async function carregar() {
    const dados = await service.listar();
    setProdutos(dados)
  }

 

  async function editar(id: number) {
    history.push(`/cadastro/${id}`);
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

              <IonButton fill="clear" color="primary" onClick={() => editar(p.id)}>
                Editar
              </IonButton>
              
              <ButtonExcluir id={p.id} onExcluido={(carregar)} />
            </IonItem>
          ))}
        </IonList>

        

       
      </IonContent>
    </IonPage>
  );
};

export default Home;