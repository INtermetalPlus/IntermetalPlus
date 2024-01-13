
import React from 'react';
import styles from './contact.module.scss';

// Уберите локальное состояние isModalOpen
const Modal = ({ isOpen, onClose }:{isOpen: boolean,onClose: ()=> void}) => {
  return (
    <div>
     
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            <div className={styles.blog}>
              <div className={styles.contact_info}>
              <p className={styles.closeButton} onClick={onClose}>
              X
            </p>
                <p className={styles.phone}>+996 773 505 000</p>
                <p className={styles.phone}>+996 773 505 000</p>
                <p className={styles.email}>rustamSOSKA</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




export default Modal;