import { IonContent, IonPage, IonInput, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import {  useState } from 'react';
// import './Home.css';


const ConsultaCep: React.FC = () => {

    const [localidade, setLocalidade] = useState("");
    const [estado, setEstado] = useState("");
    const [cep, setCep] = useState("");


    async function handleConsultarCep() {
        
        try {
            const raw = cep;   
            const resposta = await fetch(`https://viacep.com.br/ws/${raw}/json/`)

            const data = await resposta.json();

            setLocalidade(data.localidade)
            setEstado(data.estado)
            setCep(data.cep)
            console.log(data)
    } catch (error) {
        console.error("Cep Invalido", error)
    }
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <label>CEP</label>
                <IonInput aria-label="CEP" value={cep} onChange={(e) => setCep((e.target as HTMLInputElement).value)}></IonInput>
                <IonButton onClick={handleConsultarCep}>Consultar</IonButton>

                <IonList>
                    <IonItem>
                        <IonLabel>CEP: {cep}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Cidade: {localidade}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Estado: {estado}</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ConsultaCep;