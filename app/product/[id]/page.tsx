import styles from "./product.module.scss";
import ProductSlider from "../../ui/slider/Slider";
import Wrapper from "@/app/components/FoldingWrapper";
import { getProductById } from "@/app/lib/data";
import Link from "next/link";
import SliderSkeleton from "@/app/ui/skeleton/sliderSkeleton";
import { Suspense } from "react";

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
  // This pattern is for standard YouTube links.
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
  const match = url?.match(regExp);

  if (match && match[2].length === 11) {
    // The video ID is usually 11 characters long
    return match[2];
  }

  // Return null if no video ID is found
  return null;
}

export default async function Product({ params }: { params: { id: string } }) {
 
  const { id } = params;
  const product = await getProductById(id);
  console.log(product.url_video)
  const videoID = getYouTubeVideoID(product.url_video)
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
            img1={product.images1}
            img2={product.images2}
            img3={product.images3}
            img4={product.images4}
          />
        </Suspense>
    
        <div className={styles.product}>
          <h2 className={styles.product_title}>
            {product.product_name}
          </h2>
          <Wrapper
            styleTitle={{ fontSize: "20px", lineHeight:"30px", color:'#525252',fontWeight:'400' }}
            styleText={styleObject}
            maxLength={product.description.length / 2}
            title="Описание:"
            text={product.description}
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
          maxLength={product.characteristic.length / 2}
          styleTitle={{ fontSize: "20px", lineHeight:"30px", color:'#525252',fontWeight:'400' }}
          title="Характеристика:"
          text={product.characteristic}
          isProduct={true}
          styledText={{color:'black',fontWeight:'400',fontSize:'24px',lineHeight:'30px'}}
        />
        <div className={styles.price}>
          Цена:<span className={styles.price_value}>190 000 сом</span>
        </div>
        <div style={{textAlign:'center'}}>
          <button className={styles.button}>Связаться с нами</button>
        </div>
      </section>

      <section className={styles.review}>
        <h3 className={styles.review_title}>Видео обзор</h3>
      <Iframe videoLink={productVideoLink} />
      </section>
    </main>
  );
}
