import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, useIonAlert } from '@ionic/react';
import './Home.css';
//import { Produto } from '../models/Produto';
import { useHistory } from 'react-router';
import { ProdutoService } from '../services/ProdutoService';

/*interface CadastroProps {
  addProduto: (p: Produto) => void;
}*/

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('0');
  const [presentAlert] = useIonAlert();
  const history = useHistory();
  const service = new ProdutoService();

  function validarCampos() {
    const precoNumber = Number(preco);
    const estoqueNumber = Number(estoque);

    if (!nome.trim()) {
      return 'O nome do produto é obrigatório.';
    }

    if (Number.isNaN(precoNumber) || precoNumber <= 0) {
      return 'O preço deve ser um número maior que zero.';
    }

    if (Number.isNaN(estoqueNumber) || estoqueNumber < 0) {
      return 'O estoque deve ser um número inteiro maior ou igual a zero.';
    }

    return '';
  }

   async function adicionar() {

    const mensagemErro = validarCampos();
    if (mensagemErro) {
      presentAlert({
        header: 'Erro',
        message: mensagemErro,
        buttons: ['OK'],
      });
      return;
    }

    const produto = {
      nome,
      preco,
      estoque: 0
    };

    await service.adicionar(produto);

    history.goBack();

    presentAlert({
      header: 'Sucesso',
      message: 'Produto cadastrado com sucesso.',
      buttons: ['OK'],
    });
  }

  function irHome() {
    history.push('/home');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controle de Estoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonButton onClick={irHome}>Voltar para Home</IonButton>

        <IonInput
          value={nome}
          label='Descrição do Produto'
          labelPlacement='floating'
          fill='outline'
          placeholder='Digite aqui'
          onIonChange={(e) => setNome(e.detail.value ?? '')}
        />

        <IonInput
          value={preco}
          type='number'
          inputMode='decimal'
          label='Preço'
          labelPlacement='floating'
          fill='outline'
          placeholder='Digite aqui'
          min={0}
          step='0.01'
          onIonChange={(e) => setPreco(e.detail.value ?? '')}
        />

        <IonInput
          value={estoque}
          type='number'
          inputMode='numeric'
          label='Estoque'
          labelPlacement='floating'
          fill='outline'
          placeholder='Digite aqui'
          min={0}
          step='1'
          onIonChange={(e) => setEstoque(e.detail.value ?? '')}
        />

        <IonButton expand='block' onClick={adicionar}>
          Cadastrar Produto
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;