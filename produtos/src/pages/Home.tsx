import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
} from "@ionic/react";
import "./Home.css";
import { Produto } from "../models/Produto";


const Home: React.FC = () => {
  const [produto, setProduto] = useState<Produto[]>([]);
  
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0)
  const [estoque, setEstoque] = useState(0)

  const cadastrar = () => {
    const novoProduto = {
      id: Date.now(),
      nome: nome,
      preco: preco,
      estoque: estoque,
    }

    const novoProd = new Produto("nomr",10);

    setProduto([...produto, novoProd]);

    setNome("");
    setPreco(0);
    setEstoque(0);
  

    const alert = novoProduto

    console.log(alert);
  };
  
  return (
    <IonPage>
      <IonContent>
      

        <IonInput
          label="Nome do produto"
          labelPlacement="stacked"
          placeholder="Digite o nome do produto"
          value={nome}
          onChange={(e) => setNome(String(e.currentTarget.value ?? ""))}
        ></IonInput>

        <IonInput
          label="Preço"
          type="number"
          placeholder="000"
          value={preco}
          onChange={(e) => setPreco(Number(e.currentTarget.value) || 0)}
        ></IonInput>

        <IonInput
          label="Quantidade"
          type="number"
          placeholder="0"
          value={estoque}
          onChange={(e) => setEstoque(Number(e.currentTarget.value) || 0)}
        ></IonInput>

        <IonButton onClick={cadastrar}>Cadastrar produto</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
