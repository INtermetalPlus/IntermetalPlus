import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";

export const Header = () => {
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
            <li>
              <Link href="#contact">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
