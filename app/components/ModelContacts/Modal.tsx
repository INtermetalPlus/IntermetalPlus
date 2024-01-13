import React, { useState, useEffect } from 'react';
import styles from './contacts.module.scss';
import Image from 'next/image';
import { getContacts } from './getContacts';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [contacts, setContacts] = useState(null); // or set the initial state appropriately

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      setContacts(data);
    };

    if (isOpen) {
      fetchContacts();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/close.png" alt="Close" />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.contactItem}>
          <img src="/phone.png" alt="Phone" />
          <span>+996 773 505 000</span>
        </div>
        <div className={styles.contactItem}>
          <img src="/whatsapp.png" alt="WhatsApp" />
          <span>+996 773 505 000</span>
        </div>
        <div className={styles.contactItem}>
          <img src="/mail.png" alt="Email" />
          <span>intermetalplus33@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
