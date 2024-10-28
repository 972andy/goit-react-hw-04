import ReactModal from 'react-modal';
import styles from './ImageModal.module.css'; 

ReactModal.setAppElement('#root'); 

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true} 
      className={styles.modal} 
      overlayClassName={styles.overlay} 
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </ReactModal>
  );
};

export default ImageModal;

