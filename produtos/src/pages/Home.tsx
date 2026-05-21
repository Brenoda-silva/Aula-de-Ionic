import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
  IonTextarea,
} from "@ionic/react";
import "./Home.css";
import { Produtos } from "../models/Produto";

const Home: React.FC = () => {
  const [produto, setProduto] = useState<Produtos[]>([]);

  const cadastrar = () => {
    const novoProduto = new Produtos("limpado de telas", 28);

    novoProduto.adicionarEstoque(9);

    setProduto([...produto, novoProduto]);

    const respond = novoProduto.get();

    alert(respond);

    console.log(novoProduto);
  };

  return (
    <IonPage>
      <IonContent>
        <IonTextarea
          label="Nome do produto"
          labelPlacement="stacked"
          placeholder="Digite o nome do produto"
        ></IonTextarea>

        <IonInput
          label="Preço"
          type="number"
          placeholder="000"
        ></IonInput>

        <IonButton onClick={cadastrar}>Cadastrar produto</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
