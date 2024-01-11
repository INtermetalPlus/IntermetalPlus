"use client";
import { useState } from 'react';
import styles from './modal.module.scss'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }
  
    return (
      <div className={styles.modal} onClick={handleOutsideClick}>
        <div className={styles.modalContent}>
          <div className={styles.CallUs}>
          <p>СВЯЗАТЬСЯ С НАМИ</p>
          </div>
          <form>
            <label className={styles.inputForm}>
              <p>ФИО</p>
              <input type="text" name="name" required placeholder='Введите ФИО'/>
            </label>
            <label className={styles.inputForm}>
             <p> Номер телефона</p>
              <input type="tel" name="phone" required  placeholder='Введите номер телефона'/>
            </label>
            <label className={styles.inputForm}>
              <p>Почта</p>
              <input type="email" name="email" required placeholder='Введите электронную почту' />
            </label>
            <label className={styles.inputForm}>
              <p>Сообщение(необязательно*)</p>
              <textarea name="message" placeholder='Введите сообщение'></textarea>
            </label>
          </form>
          <button type="submit" className={styles.submitButton}>Отправить</button>
        </div>
      </div>
    );
  };
  
export const Modal2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Открыть модальное окно</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

  