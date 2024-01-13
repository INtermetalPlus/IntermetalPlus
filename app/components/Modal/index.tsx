"use client"
import React, { useState } from 'react';
import styles from './modal.module.scss';
import сloseIkon from '../../../public/img/close.svg'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

 
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
 

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePhone = (phone: string) => {
    const re = /^[0-9-+()]*$/;
    return re.test(phone);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Введите пожалуйста правильный адрес электронной почты');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Введите пожалуйста корректный номер телефона');
      return;
    }

    onClose();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modalContent}>
      <img src={сloseIkon} className={styles.closeButton} onClick={onClose} alt="Close" />
        <div className={styles.CallUs}>
          <p>СВЯЗАТЬСЯ С НАМИ</p> 
        </div>
          <form onSubmit={handleSubmit}>
            <label className={styles.inputForm}>
              <p>ФИО</p>
              <input type="text" name="name" required placeholder='Введите ФИО' />
            </label>
            <label className={styles.inputForm}>
              <p> Номер телефона</p>
              <input type="tel" name="phone" required placeholder='Введите номер телефона' pattern="^[0-9-+()]*$" title="Please enter a valid phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className={styles.inputForm}>
              <p>Почта</p>
              <input type="email" name="email" required placeholder='Введите электронную почту' title="Please enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className={styles.inputForm}>
              <p>Сообщение(необязательно*)</p>
              <textarea name="message" placeholder='Введите сообщение'></textarea>
              <div>
              <button type="submit" className={styles.submitButton}>Отправить</button>
              </div>
            </label>
           
          </form>
          
        </div>
      </div>
    );
  };

  

  