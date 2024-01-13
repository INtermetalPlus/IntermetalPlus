"use client";
import Link from "next/link";
import { FC, useState } from "react";
import styles from "./wrapper.module.scss";
import FormatText from "../FormattedText";

export default function Wrapper({
  title,
  text,
  maxLength,
  styleTitle,
  styleText,
  isProduct,
  styledText,
}: {
  title: string;
  text: string;
  maxLength: number;
  styleTitle?: object;
  styleText?: object;
  isProduct?: boolean;
  styledText?:object;
}) {
  const [showAll, setShowAll] = useState(false);
  const buttonText = showAll ? "Закрыть" : "Подробнее...";

  const truncatedText = showAll ? text : text.slice(0, maxLength);

  return (
    <>
      <div className={`${styles.about}`}>
        <p
          id="about"
          style={styleTitle ? styleTitle : {}}
          className={styles.about_title}
        >
          {title}
        </p>
        <div className={styles.about_content}>
          {isProduct ? (
            <FormatText text={truncatedText} />
          ) : (
            <p style={styledText ? styledText : {}} className={styles.about_text}>{truncatedText}</p>
          )}
          <div
            style={showAll ? { background: "transparent" } : { ...styleText }}
          ></div>
        </div>
        {text.length > maxLength && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.about_details}
          >
            <Link href="#about">{buttonText}</Link>
          </button>
        )}
      </div>
    </>
  );
}
