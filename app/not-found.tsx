
'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Image src={"/robot.png"} alt="404 Error: Page Not Found" width={513} height={326} style={{margin: '0 auto'}} />
      <Image src={"/404.png"} alt="404 Error: Page Not Found" width={380} height={200} style={{margin: '0 auto', marginBottom: 60 }} />
      <p style={{ fontSize: '40px' , paddingTop: '65px', fontWeight:400, lineHeight:'46.88px' , color:'#525252'}}>Страница не найдена</p>
      <p style={{ fontSize: '40px' , paddingBottom: '85px',fontWeight:400, lineHeight:'46.88px' , color:'#525252'}}>
      <Link href="/" style={{textDecoration: 'none', color: '#000' }}>
      Вернуться на главную страницу</Link></p>
    </div>
  );
};

export default Custom404;
