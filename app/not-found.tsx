
'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={"/robot.png"} alt="404 Error: Page Not Found" style={{ width: '300px', margin: '0 auto' }} />
      <img src={"/404.png"} alt="404 Error: Page Not Found" style={{ width: '250px', margin: '0 auto', paddingBottom: '40px' }} />
      <p style={{ fontSize: '40px' , paddingTop: '85px', fontWeight:400, lineHeight:'46.88px' , color:'#525252'}}>Страница не найдена</p>
      <p style={{ fontSize: '40px' , paddingBottom: '85px',fontWeight:400, lineHeight:'46.88px' , color:'#525252'}}>
      <Link href="/" style={{textDecoration: 'none', color: '#000' }}>
      Вернуться на главную страницу</Link></p>
    </div>
  );
};

export default Custom404;
