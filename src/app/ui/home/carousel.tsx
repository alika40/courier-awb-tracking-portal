import styles from './home.module.css';
// import Image from 'next/image';
import Card from './card';
import MiniRoundedButton from './miniRoundedButton';
import useCarousel from '../hooks/useCarousel';

const data = [
  {
    name: 'Martin Nyamali',
    position: 'MD, FMX Integrated Services Limited',
    image: '/martin_v6evny.jpg',
  },
  {
    name: 'Henry Atiase',
    position: 'MD, XL Management Services (Ghana) Limited',
    image: '/henry-atiase.jpg',
  },
  {
    name: 'Ayuba Dantala',
    position: 'MD, XL Management Services (Liberia) Ltd',
    image: '/ayuba_q6ninz.jpg',
  },
  {
    name: 'Olabisi Adesanya',
    position: 'MD, XL Management Services (Sierra Leone) Ltd',
    image: '/olabisi-cornelia_ton85w.jpg',
  },
  {
    name: 'Tunji Balogun',
    position: 'MD, XL Outsourcing Limited',
    image: '/tunji_vty7zp.jpg',
  },
  {
    name: 'Isiah Akpan',
    position: 'MD, Security & Protection services',
    image: '/Mr_Isiah_S_P_MD_kss4wi.jpg',
  },
  {
    name: 'Soberekon Joseph Tyger',
    position: 'Head, Support Services',
    image: '/tyger-sobrekon_wvzebx.jpg',
  },
  {
    name: 'Mrs. Blessing Ukasoanya',
    position: 'Head Financial control',
    image: '/Mrs_Blessing_FINCON_oebpmi_b8xx8n.jpg',
  },
];

export const Carousel = () => {
  const {
    carouselRef,
    navPrevButtonRef,
    navNextButtonRef,
    microBtnsColorId,
    onHandleMicroRoundedBtns,
    onNext,
    onPrevious,
    onTouchMove,
    onTouchStart,
    onMouseMove,
    onMouseDown,
    onKeyDown,
  } = useCarousel();

  return (
    <>
      <main className={`${styles.carousel}`}>
        <div
          className={styles.container}
          tabIndex={0}
          ref={carouselRef}
          onKeyDown={(e) => onKeyDown(e)}
          onMouseDown={onMouseDown}
          onMouseMove={(e) => onMouseMove(e)}
          onTouchStart={(e) => onTouchStart(e)}
          onTouchMove={(e) => onTouchMove(e)}
        >
          {/* appCarousel */}
          {data.map((person, index) => {
            return (
              <div className={styles.card} key={index}>
                <Card data={person} />
                {/* 
                  <p>
                    {person.position.length >= showMoreOrLess
                      ? person.position.slice(0, showMoreOrLess)
                      : person.position}
                    {person.position.length >= showMoreOrLess && <span>...</span>}
                    {person.position}
                  </p> */}
              </div>
            );
          })}
        </div>

        <button
          className={`${styles.control} ${styles.prev}`}
          type="button"
          ref={navPrevButtonRef}
          onClick={onPrevious}
        >
          <span className={`${styles.arrow} ${styles.left}`} />
        </button>
        <button
          className={`${styles.control} ${styles.next}`}
          type="button"
          ref={navNextButtonRef}
          onClick={onNext}
        >
          <span className={`${styles.arrow} ${styles.right}`} />
        </button>
      </main>
      <div className={styles.miniRoundedBtnsWrapper}>
        {data.map((_, index) => (
          <MiniRoundedButton
            onHandleMicroRoundedBtns={onHandleMicroRoundedBtns}
            key={index}
            index={index}
            bgColorId={microBtnsColorId}
          />
        ))}
      </div>
    </>
  );
};
