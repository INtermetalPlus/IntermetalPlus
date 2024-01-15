import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import Wrapper from "./components/FoldingWrapper/index";
import { CartList } from "./components/CartList";
import { Suspense } from "react";
import WrapperSkeleton from "./ui/skeleton/wrapperSkeleton";

export default function Home() {
  const styleObject = {
    background:
      "linear-gradient(to top, rgba(255, 255, 255, .9), rgba(255, 255, 255, .3))",
    width: "100%",
    height: "-1px",
    position: "absolute",
    top: 0,
    bottom: 0,
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.mainScreen}>
          <div className={styles.mainScreenLeft}>
          <h1 style={{ textAlign: 'center', width: '100%' }}>Найдите лучшее качество оборудования из Европы</h1>
            <Link className={styles.mainRef} href="#assort">
              Перейти в ассортименты
              <Image
                src="/img/arrow.svg"
                alt="arrowImg"
                width={22}
                height={14}
              />
            </Link>
          </div>
          <div className={styles.mainScreenRight}>
            <Image
              src="/mainPageImage.png"
              alt="MainPageImg"
              width={620}
              height={511}
            />
          </div>
        </div>

        <Wrapper
          styleText={styleObject}
          maxLength={500}
          title={"О нас"}
          text={
            "Lorem ipsum dolor sit amet consectetur. A arcu eget fringilla viverra enim tempor sed commodo. Interdum maecenas feugiat purus turpis gravida viverra amet amet scelerisque. Quis pharetra mi elit ligula netus mattis viverra pharetra. Blandit eu pellentesque et ultricies aenean maecenas egestas eget. Blandit nibh commodo nec sit nibh. Lectus blandit non sed imperdiet augue aliquet.A arcu eget fringilla viverra enim tempor sed commodo. Interdum maecenas feugiat purus turpis gravida viverra amet amet scelerisque. Quis pharetra mi elit ligula netus mattis viverra pharetra. Blandit eu pellentesque et ultricies aenean maecenas egestas eget. Blandit nibh commodo nec sit nibh. Lectus blandit non sed imperdiet augue aliquet."
          }
        />

        <div id="assort" className={styles.products}>
          <h2 className={styles.popularProduct}>Ассортимент</h2>
          <div className={styles.productsCard}> 
            <Suspense fallback={<WrapperSkeleton />}>
              <CartList /> 
            </Suspense>   
          </div>
        </div>
      </div>
    </section>
  );
}
