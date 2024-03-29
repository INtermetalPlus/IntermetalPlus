'use client';
import React, { useState, useEffect } from 'react';
import styles from './contacts.module.scss';
import Image from 'next/image';
import { getContacts } from '@/app/lib/data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define a type for the contact information
interface Contact {
  Phone_number: string;
  number_WhatsApp: string;
  Email: string;
}

type Contacts = Contact[]

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [contacts, setContacts] = useState<Contacts | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data: Contacts = await getContacts();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
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
            <Image width={25} height={25} src="/close.png" alt="Close" />
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.contactItem}>
            <Image width={25} height={25} src="/bphone.png" alt="Phone" />
            <span>{contacts?.[0]?.Phone_number}</span>
          </div>
          <div className={styles.contactItem}>
            <Image width={25} height={25} src="/whatsapp.png" alt="WhatsApp" />
            <span>{contacts?.[0]?.number_WhatsApp}</span>
          </div>
          <div className={styles.contactItem}>
            <Image width={25} height={25} src="/mail.png" alt="Email" />
            <span>{contacts?.[0]?.Email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
