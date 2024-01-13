import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './modal.module.scss';
import сloseIkon from '../../../public/img/close.svg'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const onSubmit = async (data: any) => {
    if (errors.name || errors.phone || errors.email) {
      alert('Пожалуйста, исправьте ошибки перед отправкой.');
    } else {
      console.log(data);
      onClose();
  
      // Создаем объект ContactUsMessage
      const contactUsMessage = {
        name: data.name,
        contact_phone: data.phone,
        email: data.email,
        message: data.message,
      };
  
      // Отправляем запрос на сервер
      try {
        const response = await fetch('http://146.190.140.32/api/v1/contactusmessage/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactUsMessage),
        });
  
        if (!response.ok) {
          throw new Error('Ошибка при отправке данных на сервер');
        }
  
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
        setErrorMessage('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
      }
    }
  };
  

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modalContent}>
        <img src={сloseIkon} className={styles.closeButton} onClick={onClose} alt="Close" />
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


