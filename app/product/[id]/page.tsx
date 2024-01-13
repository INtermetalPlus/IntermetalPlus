'use client';
import React, { useState, useEffect } from 'react';
import { Modal } from '@/app/components/Modal';
import styles from "./product.module.scss";
import ProductSlider from "../../ui/slider/Slider";
import Wrapper from "@/app/components/FoldingWrapper";
import { getProductById } from "@/app/lib/data";
import Link from "next/link";
import SliderSkeleton from "@/app/ui/skeleton/sliderSkeleton";
import { Suspense } from "react";

interface Product {
  id?: number;
  product_name?: string;
  images1?: string;
  images2?: string;
  images3?: string;
  images4?: string;
  url_video?: string;
  price?: string;
  description?: string;
  characteristic?: string;
}


interface IframeProps {
  videoLink: string;
  width?: string;
  height?: string;
}

const Iframe: React.FC<IframeProps> = ({ videoLink, width = "1040", height = "711" }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={videoLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen
    ></iframe>
  );
};

function getYouTubeVideoID(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
  const match = url?.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  }

  return null;
}

export default function Product({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product>({} as Product);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data:Product = await getProductById(params.id);
      setProduct(data);
    };

    fetchData();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>; // Or any other loading state representation
  }

  const videoID = getYouTubeVideoID(product.url_video || '');
  const productVideoLink = `https://www.youtube.com/embed/${videoID}`;

  const styleObject = {
    background:
      "linear-gradient(to top, rgba(255, 255, 255, .9), rgba(255, 255, 255, .3))",
    width: "100%",
    height: "-1px",
    position: "absolute",
    top: "40px",
    bottom: "0",
  };

  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <p><Link href='/'>Ассортимент</Link> <span className={styles.arrowRight}>&gt;</span> <span className={styles.cartMenu}>Карточка товара</span></p>
      </div>
      <div className={styles.container}>
        
        <Suspense fallback={<SliderSkeleton />}>
          <ProductSlider
            img1={product.images1 || ''}
            img2={product.images2 || ''}
            img3={product.images3 || ''}
            img4={product.images4 || ''}
          />
        </Suspense>
    
        <div className={styles.product}>
          <h2 className={styles.product_title}>
            {product.product_name}
          </h2>
          <Wrapper
            styleTitle={{ fontSize: "20px", lineHeight:"30px", color:'#525252',fontWeight:'400' }}
            styleText={styleObject}
            maxLength={product.description ? product.description.length / 2 : 0}            
            title="Описание:"
            text={product.description || ''}
          />
        </div>
      </div>

      <section className={styles.description}>
        <Wrapper
          styleText={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, .9), rgba(255, 255, 255, .3))",
            width: "100%",
            height: "-1px",
            position: "absolute",
            top: "10px",
            bottom: "0"
          }}
          maxLength={product.characteristic ? product.characteristic.length / 2:0}
          styleTitle={{ fontSize: "20px", lineHeight:"30px", color:'#525252',fontWeight:'400' }}
          title="Характеристика:"
          text={product.characteristic || ''}
          isProduct={true}
          styledText={{color:'black',fontWeight:'400',fontSize:'24px',lineHeight:'30px'}}
        />
        <div className={styles.price}>
          Цена:<span className={styles.price_value}>190 000 сом</span>
        </div>
        <div style={{textAlign:'center'}}>
          <button onClick={handleOpenModal} className={styles.button}>Связаться с нами</button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
      </section>

      <section className={styles.review}>
        <h3 className={styles.review_title}>Видео обзор</h3>
      <Iframe videoLink={productVideoLink} />
      </section>
    </main>
  );
}

