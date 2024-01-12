
import React, { useState } from 'react';
import styles from './contact.module.scss';


const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Открыть модальное окно</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <div className={styles.blog}>
              <div className={styles.model_contact}>
                <p className={styles.number}>+996 773 505 000</p>
                <p className={styles.number}>+996 773 505 000</p>
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