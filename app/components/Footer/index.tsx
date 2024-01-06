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
            <h2>Equipment from Europe</h2>
            <p>
              Наш онлайн магазин предлагает широкий ассортимент оборудования из
              Европы. У нас вы найдете высококачественную продукцию от известных
              европейских производителей. Мы стремимся удовлетворить потребности
              наших клиентов, предлагая только надежные и инновационные товары.
              Благодаря нашей надежной доставке и превосходному обслуживанию,
              покупка в нашем магазине будет простой, удобной и безопасной.
            </p>
          </div>
          <div className={styles.footerRight}>
            <p className={styles.number}>+996 703 65 04 05</p>
            <p className={styles.contact}>Контакты</p>
            <p className={styles.email}>wannablejasmine@gmail.com</p>
            <div className={styles.SocialLink}>
              <Link href="#">
                <Image
                  src="/img/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/img/whatsapp.svg"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/img/tg.svg"
                  alt="Telegram"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#">
                <Image src="/img/maps.svg" alt="Maps" width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
