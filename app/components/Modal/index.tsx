'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './modal.module.scss';
import сloseIkon from '../../../public/img/close.svg'
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}


export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to the server');
      }

      // Reset errors and clear the form
      setErrorMessage(null);
      // ... Handle success, close the modal or show a success message
      onClose();
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to send data. Please try again.');
    }
  };
  
  if (!isOpen) return null;
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modalContent}>
        <Image src={сloseIkon} width={24} height={24} className={styles.closeButton} onClick={onClose} alt="Close" />
        {errorMessage && <div className={styles.errorNotification}>{errorMessage}</div>}
        <div className={styles.CallUs}>
          <p>СВЯЗАТЬСЯ С НАМИ</p> 
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.inputForm}>
            <p>ФИО</p>
            <input {...register('name', { required: 'Введите ФИО' })} type="text" placeholder='Введите ФИО' />
          </label>
          <input {...register('phone', 
            { required: 'Введите номер телефона',
            pattern: { value: /^[0-9-\s+()]*$/, 
            message: 'Введите, пожалуйста, корректный номер телефона' } })}
            type="tel" placeholder='Введите номер телефона' />
          <label className={styles.inputForm}>
            <p>Почта</p>
            <input {...register('email',
             { required: 'Введите электронную почту',
              pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
               message: 'Введите, пожалуйста, правильный адрес электронной почты' } })} 
               type="email" placeholder='Введите электронную почту' />
          </label>
          <label className={styles.inputForm}>
            <p>Сообщение(необязательно*)</p>
            <textarea {...register('message')} placeholder='Введите сообщение'></textarea>
            <div>
              <button type="submit" className={styles.submitButton}>Отправить</button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};


