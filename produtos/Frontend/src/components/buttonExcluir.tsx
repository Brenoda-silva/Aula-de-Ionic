import React, { useState } from 'react';
import { IonButton, IonIcon, IonAlert } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import { ProdutoService } from '../services/ProdutoService';

interface ButtonExcluirProps {
  id: number;
  onExcluido: () => void;
}

const ButtonExcluir: React.FC<ButtonExcluirProps> = ({ id, onExcluido }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const service = new ProdutoService();

  function confirmarExcluir() {
    setShowConfirmDelete(true);
  }

  async function excluir() {
    await service.remover(id);
    setShowConfirmDelete(false);
    onExcluido();
  }

  return (
    <>
      <IonButton fill="clear" color="danger" onClick={confirmarExcluir}>
        <IonIcon slot="icon-only" icon={trashOutline}></IonIcon>
      </IonButton>

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
    </>
  );
};

export default ButtonExcluir;