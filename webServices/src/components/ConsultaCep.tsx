import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
// import './Home.css';


const ConsultaCep: React.FC = () => {

    const [localidade, setLocalidade] = useState("");
    const [estado, setEstado] = useState("");
    const [cep, setCep] = useState("");
    const [loading, setLoading] = useState(false);



    async function handleConsultarCep() {

        try {
            const raw = cep;
            setLoading(true)
            const resposta = await fetch(`https://viacep.com.br/ws/${raw}/json/`)

            const data = await resposta.json();

            await new Promise(resolve => setTimeout(resolve, 2000));

            setLocalidade(data.localidade)
            setEstado(data.estado)
            setCep(data.cep)
            console.log(data)
        } catch (error) {
            console.error("Cep Invalido", error)
            alert('Cep Inválido')

        } finally {
            setLoading(false)
        }

    }
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Consulta de CEP</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonLabel position="stacked">CEP</IonLabel>
                <IonInput aria-label="CEP" value={cep} onIonChange={(e) => setCep((e.target as HTMLInputElement).value)}></IonInput>
                <IonButton expand="block" onClick={handleConsultarCep} disabled={loading}>
                    {loading ? "Buscando CEP..." : "Buscar"}
                </IonButton>

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
            </IonCardContent>
        </IonCard>
    );
};

export default ConsultaCep;