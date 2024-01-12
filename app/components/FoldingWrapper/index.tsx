'use client';
import Link from "next/link"
import { FC, useState } from "react"
import styles from './wrapper.module.scss'

export default function Wrapper({title, text,maxLength}: {title: string; text: string; maxLength:number}) {
  const [showAll, setShowAll] = useState(false);
  const buttonText = showAll ? "Закрыть" : "Подробнее...";

  const truncatedText = showAll ? text : text.slice(0, maxLength);
  const buttonClassName = showAll ? `{styles.about}` : `{styles.hide}`;


    return (
      <div className={styles.about}>
        <p id="about" className={styles.about_title}>
          {title}
        </p>
        <p className={styles.about_text}>
          {truncatedText}
        </p>
        {text.length > maxLength && (
   <button onClick={()=> setShowAll(!showAll)} className={styles.about_details}>
   <Link href="#">
     {buttonText}
   </Link>
 </button>
      )}
     
      </div>
    );
  }

