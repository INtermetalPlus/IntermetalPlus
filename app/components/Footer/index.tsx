import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getContacts } from "@/app/lib/data";

interface Contact {
  Phone_number: string;
  number_WhatsApp: string;
  Email: string;
}

type Contacts = Contact[]

export async function Footer() {
  const contacts : Contacts = await getContacts()
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
                <Image src={"/phone.png"} alt="phone" width={25} height={25}/><span>{contacts[0].Phone_number}</span>
                </p>
              <p style={{margin:0}}>
                <Image src={"/whats.png"} alt="whatsapp" width={25} height={25}/><span>{contacts[0].number_WhatsApp}</span>
              </p>
              </div>
              <div className={styles.email}>
                <Image src={"/email.png"} alt="email" width={25} height={25}/><span>{contacts[0].Email}</span>
              </div>
            </div>
          </div>
          </div>     
    </footer>
  );
};
