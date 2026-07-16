import { Geolocation } from '@capacitor/geolocation';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonText } from '@ionic/react';
import { useState } from 'react';

const Geolocalização: React.FC = () => {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('Pressione o botão para obter sua localização.');

  const obterLocalicazacao = async () => {
    try {
      setMensagem('Solicitando permissão e obtendo a localização...');
      const permission = await Geolocation.requestPermissions();

      if (permission.location === 'denied') {
        setMensagem('Permissão negada. Ative o acesso à localização nas configurações.');
        setLatitude('');
        setLongitude('');
        return;
      }

      const posicao = await Geolocation.getCurrentPosition();
      const { latitude: lat, longitude: lon } = posicao.coords;
      setLatitude(lat?.toString() ?? 'N/A');
      setLongitude(lon?.toString() ?? 'N/A');
      setMensagem('Localização obtida com sucesso.');
    } catch (error) {
      console.error('Erro ao obter localização', error);
      setMensagem('Não foi possível obter a localização. Verifique se o GPS está ativo.');
      setLatitude('');
      setLongitude('');
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Geolocalização</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>
          <p>{mensagem}</p>
        </IonText>

        <IonButton expand="block" onClick={obterLocalicazacao}>
          Obter localização
        </IonButton>

        <IonList>
          <IonItem>
            <IonLabel position="stacked">Latitude</IonLabel>
            <IonText>{latitude || '—'}</IonText>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Longitude</IonLabel>
            <IonText>{longitude || '—'}</IonText>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default Geolocalização;