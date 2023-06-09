import { useState } from 'react';
import style from '../css/Category.module.css';
import * as Icon from 'react-feather';
import cat1 from '../assets/cat 1.png';
import cat2 from '../assets/cat 2.png';
import cat3 from '../assets/cat 3.png';
import cat4 from '../assets/cat 4.png';
import cat5 from '../assets/cat 5.png';
import bg_item from '../assets/bg-hero.png';

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
  };

  const cardData = [
    { imgSrc: cat1, name: 'Cupcake', desc: '22 Items', color: 'tren--light-success' },
    { imgSrc: cat2, name: 'Pizza', desc: '25 Items', color: 'tren--bluesky' },
    { imgSrc: cat3, name: 'Kebab', desc: '12 Items', color: 'tren--light-blue' },
    { imgSrc: cat4, name: 'Salmon', desc: '22 Items', color: 'tren--light-salmon' },
    { imgSrc: cat5, name: 'Doughnut', desc: '11 Items', color: 'tren--light-gold' },
    { imgSrc: cat1, name: 'Cupcake', desc: '22 Items', color: 'tren--light-success' },
    { imgSrc: cat2, name: 'Pizza', desc: '25 Items', color: 'tren--bluesky' },
    { imgSrc: cat3, name: 'Kebab', desc: '12 Items', color: 'tren--light-blue' },
    { imgSrc: cat4, name: 'Salmon', desc: '22 Items', color: 'tren--light-salmon' },
    { imgSrc: cat5, name: 'Doughnut', desc: '11 Items', color: 'tren--light-gold' },
  ];

  const visibleCards = cardData.slice(currentIndex, currentIndex + 5);

  return (
    <>
      <div>
        <h2 className={style.cat__title}>
          Browse Our Category
          <br />
          <span className="hero--success">Receipt</span>
        </h2>
        <div className={style.cat__wrap}>
          <div className={style.cat__items}>
            {visibleCards.map((card, index) => (
              <div key={index} className={`cat__card ${style[card.color]}`}>
                {index === 1 && <img src={bg_item} alt="bg" className={style['cat--bg']} />}
                <div>
                  <img src={card.imgSrc} alt={card.name} className={style.cat__img} />
                </div>
                <p className={style.cat__name}>{card.name}</p>
                <p className={style.cat__desc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.cat__button}>
          <button className="button button--success button--white button--center" onClick={handlePrev}>
            <Icon.ChevronLeft className={style['cat--bg-circle']} />
            PREV
          </button>
          <button className="button button--success button--white button--center" onClick={handleNext}>
            NEXT
            <Icon.ChevronRight className={style['cat--bg-circle']} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Category;
