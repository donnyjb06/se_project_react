import { ModalContext } from './Modal.context';
import { useModalClose } from '../../hooks/useModalClose';

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useModalClose();

  const closeModal = () => {
    setModal('');
  };

  return (
    <ModalContext.Provider value={{ modal, setModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
