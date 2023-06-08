import style from '../css/Trending.module.css';
import styles from '../css/Category.module.css';
import * as Icon from 'react-feather';
import tren1 from '../assets/tren 1.png';
import tren2 from '../assets/tren 2.png';
import tren3 from '../assets/tren 3.png';
import tren4 from '../assets/tren 4.png';
import tren5 from '../assets/tren 5.png';
import tren6 from '../assets/tren 6.png';
import tren7 from '../assets/tren 7.png';
import tren8 from '../assets/tren 8.png';
import bg_tren from '../assets/bg-hero.png';

const Trending = () => {
  return (
    <>
      <div className={style.tren}>
        <h2 className={styles.cat__title}>
          Browser Our Trending
          <br />
          <span className="hero--success">Receipt</span>
        </h2>
        <div className={style.tren__items}>
          <div className="tren__card tren--bluesky">
            <div>
              <img src={tren1} alt="1" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Pizza Paperoni</h3>
            <p className="tren__cat hero--success">Pizza</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style['tren--star-empty']} />
            </div>
          </div>
          <div className="tren__card tren--bluesky">
            <div>
              <img src={tren2} alt="2" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Pizza Meat</h3>
            <p className="tren__cat hero--success">Pizza</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style['tren--star-empty']} />
              <Icon.Star className={style['tren--star-empty']} />
            </div>
          </div>
          <div className="tren__card tren--light-blue">
            <div>
              <img src={tren3} alt="3" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Doner Kebab</h3>
            <p className="tren__cat hero--success">Kebab</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
            </div>
          </div>
          <div className="tren__card tren--light-salmon">
            <div>
              <img src={tren4} alt="4" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Salmon Roll</h3>
            <p className="tren__cat hero--success">Salmon</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style['tren--star-empty']} />
            </div>
          </div>
          <div className="tren__card tren--light-success">
            <div>
              <img src={tren5} alt="5" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Cupcake Choco</h3>
            <p className="tren__cat hero--success">Cupcake</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style['tren--star-empty']} />
            </div>
          </div>
          <div className="tren__card tren--light-gold">
            <img src={bg_tren} alt="bg-tren" className={styles['cat--bg']} />
            <div>
              <img src={tren6} alt="6" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Doughnut Milk</h3>
            <p className="tren__cat hero--success">Dougnut</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
            </div>
          </div>
          <div className="tren__card tren--light-gold">
            <div>
              <img src={tren7} alt="7" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Doughnut Unicorn</h3>
            <p className="tren__cat hero--success">Doughnut</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style['tren--star-empty']} />
            </div>
          </div>
          <div className="tren__card tren--light-blue">
            <div>
              <img src={tren8} alt="8" className={style['tren--img']} />
            </div>
            <h3 className={style.tren__title}>Kathi Kebab</h3>
            <p className="tren__cat hero--success">Kebab</p>
            <div>
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style.tren__star} />
              <Icon.Star className={style['tren--star-empty']} />
            </div>
          </div>
        </div>
        <div className={style.tren__button}>
          <button className="button button--success ">
            <a href="#" className="button--white">
              ALL Receipt
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Trending;
