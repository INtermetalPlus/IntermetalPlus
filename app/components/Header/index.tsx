"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';
import Modal from '../ModelContacts/Modal';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.hamburger} onClick={toggleHamburger}>
            <Image src="/hamburger.png" alt="Menu" width={30} height={30} />
          </div>

          <Link href="/" legacyBehavior>
            <a className={styles.logo}>
              <Image src="/img/Logo-Home.svg" alt="Logo" width={40} height={40} />
              IntermetalPlus
            </a>
          </Link>

          <ul className={styles.navItem}>
            <li>
              <Link href="#about" legacyBehavior><a>О нас</a></Link>
            </li>
            <li>
              <Link href="#assort" legacyBehavior><a>Ассортимент</a></Link>
            </li>
            <li onClick={toggleModal}>
              <Link href="#contact" legacyBehavior><a>Контакты</a></Link>
              <Modal isOpen={isModalOpen} onClose={toggleModal} />
            </li>
          </ul>

          {isHamburgerOpen && (
            <div className={styles.fullScreenMenu}>
              <Link href="#about" legacyBehavior><a>О нас</a></Link>
              <Link href="#assort" legacyBehavior><a>Ассортимент</a></Link>
              <Link href="#contact" legacyBehavior><a>Контакты</a></Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
