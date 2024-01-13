'use client';
import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import Modal from "../ModelContacts/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link className={styles.logo} href="/">
                <Image
                  src="/img/Logo-Home.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                IntermetalPlus
              </Link>
            </li>
          </ul>
          <ul className={styles.navItem}>
            <li>
              <Link href="#about">О нас</Link>
            </li>
            <li>
              <Link href="#assort">Ассортимент</Link>
            </li>       
            <li onClick={toggleModal} >
              <Link href="#contact">Контакты</Link>
            
              <Modal isOpen={isModalOpen} onClose={toggleModal} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};