import React, {useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, useIonAlert } from '@ionic/react';
import './Home.css';
import { Produto } from '../models/Produto';
import { useHistory } from 'react-router';

interface CadastroProps { addProduto: (p: Produto) => void }


const Cadastro: React.FC<CadastroProps> = ({ addProduto }) => {
  const nomeRef = useRef<any>(null);
  const precoRef = useRef<any>(null);
  const estoqueRef = useRef<any>(null);
  const history = useHistory();

  const [presentAlert] = useIonAlert();

  function adicionarProduto(){
    const nome = nomeRef.current?.value || "";
    const preco = parseFloat(precoRef.current?.value || "0");
    const estoque = parseInt(estoqueRef.current?.value || "0");

    if (nome && preco > 0) {
      const novoProduto = new Produto(nome, preco);
      novoProduto.adicionarEstoque(estoque);
      addProduto(novoProduto);

      

      if (nomeRef.current) nomeRef.current.value = "";
      if (precoRef.current) precoRef.current.value = "";
      if (estoqueRef.current) estoqueRef.current.value = "";

      presentAlert({
        header: 'Sucesso',
        message: 'Produto cadastrado com sucesso',
        buttons: ['OK']
      });
    } else {
      presentAlert({
        header: 'Error',
        message: 'Cadastre com dados válidos',
        buttons: ['OK']
      });
    }
  }
  
  function irHome(){
    history.push('/home');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controle de Estoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={irHome}> Voltar para Home</IonButton>
         <br />
        <IonInput ref={nomeRef} label="Descrição do Produto" labelPlacement="floating" fill="outline" placeholder="Digite aqui"></IonInput> 
      
      <br />

        <IonInput ref={precoRef} label="Preço" labelPlacement="floating" fill="outline" placeholder="Digite aqui"></IonInput>
      <br />

        <IonInput ref={estoqueRef} label="Estoque" labelPlacement="floating" fill="outline" placeholder="Digite aqui"></IonInput>
      
      <IonButton onClick={adicionarProduto}> Cadastrar Produto</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;