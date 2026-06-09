import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonItem, IonIcon, IonAlert, useIonViewDidEnter } from '@ionic/react';
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

  const [produtos, setProdutos] = useState<any[]>([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const service = new ProdutoService();

  useIonViewDidEnter(() => {
    carregar();
  }, [])

  async function carregar() {
    const dados = await service.listar();
    setProdutos(dados)
  }

  function confirmarExcluir(id: number) {
    setDeleteId(id);
    setShowConfirmDelete(true);
  }

  async function excluir() {
    if (deleteId === null) {
      return;
    }

    await service.remover(deleteId);
    setShowConfirmDelete(false);
    setDeleteId(null);
    carregar();
  }

  function editar(id: number) {
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
              <IonButton fill="clear" color="danger" onClick={() => confirmarExcluir(p.id)}>
                <IonIcon slot="icon-only" icon={trashOutline}></IonIcon>
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        <IonAlert
          isOpen={showConfirmDelete}
          header="Confirmar exclusão"
          message="Tem certeza que deseja excluir este produto?"
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => setShowConfirmDelete(false),
            },
            {
              text: 'Excluir',
              role: 'destructive',
              handler: excluir,
            },
          ]}
          onDidDismiss={() => setShowConfirmDelete(false)}
        />

       
      </IonContent>
    </IonPage>
  );
};

export default Home;