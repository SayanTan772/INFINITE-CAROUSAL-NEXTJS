'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [num, setNum] = useState(1);
  const [flag, setFlag] = useState('forward');
  const [active, setActive] = useState(1);

  let width = 1200;

  function forward() {
    if (num >= 1 && num < 5) {
      setNum(num + 1);
      setActive(num + 1);
    } else if (num === 5) {
      setFlag('backward');
    }
  }

  function backward() {
    if (num > 1) {
      setNum(num - 1);
      setActive(num - 1);
    } else if (num === 1) {
      setFlag('forward');
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (flag === "forward") {
        forward();
      } else if (flag === "backward") {
        backward();
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [num, flag]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper} style={{ transform: `translateX(-${(num - 1) * width}px)` }}>
          <div className={styles.slide}>
            <Image style={{ objectFit: 'cover', objectPosition: 'center' }}
            src="/anime.jpg"
            alt=""
            width={1200}
            height={500}
            />
          </div>
          <div className={styles.slide}>
            <Image style={{ objectFit: 'cover', objectPosition: 'center' }}
            src="/girl.jpg"
            alt=""
            width={1200}
            height={500}
            />
          </div>
          <div className={styles.slide}>
            <Image style={{ objectFit: 'cover', objectPosition: 'center' }}
            src="/beast.jpg"
            alt=""
            width={1200}
            height={500}
            />
          </div>
          <div className={styles.slide}>
            <Image style={{ objectFit: 'cover', objectPosition: 'center' }}
            src="/water.jpg"
            alt=""
            width={1200}
            height={500}
            />
          </div>
          <div className={styles.slide}>
            <Image style={{ objectFit: 'cover', objectPosition: 'center' }}
            src="/landscape.jpg"
            alt=""
            width={1200}
            height={500}
            />
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.outer_circle} style={{ transform: (active === 1) ? `scale(1.2)`: `scale(1)`, backgroundColor: (active === 1) ? `#ffff` : `#ffffff9d` }}></div>
        <div className={styles.outer_circle} style={{ transform: (active === 2) ? `scale(1.2)`: `scale(1)`, backgroundColor: (active === 2) ? `#ffff` : `#ffffff9d` }}></div>
        <div className={styles.outer_circle} style={{ transform: (active === 3) ? `scale(1.2)`: `scale(1)`, backgroundColor: (active === 3) ? `#ffff` : `#ffffff9d` }}></div>
        <div className={styles.outer_circle} style={{ transform: (active === 4) ? `scale(1.2)`: `scale(1)`, backgroundColor: (active === 4) ? `#ffff` : `#ffffff9d` }}></div>
        <div className={styles.outer_circle} style={{ transform: (active === 5) ? `scale(1.2)`: `scale(1)`, backgroundColor: (active === 5) ? `#ffff` : `#ffffff9d` }}></div>
      </div>
    </main>
  );
}
