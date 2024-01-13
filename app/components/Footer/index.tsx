import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerIn}>
          <div className={styles.footerLeft}>
          <Link className={styles.logo} href="/">
                <Image
                  src="/img/Logo-Home.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                IntermetalPlus
              </Link>     
          </div>
          <div className={styles.footerRight}>
              <div className={styles.contacts}>
                <p style={{margin:0}}>
                <Image src={"/phone.png"} alt="phone" width={25} height={25}/><span>+996 773 505 000</span>
                </p>
              <p style={{margin:0}}>
                <Image src={"/whats.png"} alt="whatsapp" width={25} height={25}/><span>+996 773 505 000</span>
              </p>
               
              </div>
              <div className={styles.email}>
                <Image src={"/email.png"} alt="email" width={25} height={25}/><span>intermetalplus33@gmail.com</span>
              </div>
            </div>
          </div>
          </div>     
    </footer>
  );
};
