import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import Modal from 'modelContact/index.tsx';


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
                Equipment from Europe
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
            <li>
              <button onClick={toggleModal}>Контакты</button>
            </li>
          </ul>
        </nav>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
};
