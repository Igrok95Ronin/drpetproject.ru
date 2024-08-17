import React from 'react';
import { nanoid } from 'nanoid';

import style from './Home.module.scss';
import '../App.scss';

const Home = ({ items }) => {
  return (
    <>
      <section className={style.petProjects}>
        <div className="container">
          <div className={style.petProjects__box}>
            {items.map((item) => (
              <div key={nanoid()} className={style.petProjects__inner}>
                <div className={style.petProjects__left}>
                  <p className={style.petProjects__name}>
                    <a href={item.link} target="__blank">
                      {item.name}
                    </a>
                  </p>
                  <div className={style.petProjects__imgWrp}>
                    <a href={item.link} target="__blank">
                      <img
                        className={style.petProjects__img}
                        src={item.img}
                        alt="todolist"
                      />
                    </a>
                  </div>
                </div>
                <div className={style.petProjects__right}>
                  <p className={style.petProjects__stack}>Stack</p>
                  <ul className={style.petProjects__ul}>
                    {Object.entries(item.stacks).map(([key, value]) => (
                      <li key={nanoid()}>
                        {key}: <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* <div className={style.petProjects__inner}>
              <div className={style.petProjects__left}>
                <p className={style.petProjects__name}>
                  <a href="/">Tic-Tac-Toe</a>
                </p>
                <div className={style.petProjects__imgWrp}>
                  <a href="/">
                    <img
                      className={style.petProjects__img}
                      src={ticTacToeImage}
                      alt="todolist"
                    />
                  </a>
                </div>
              </div>
              <div className={style.petProjects__right}>
                <p className={style.petProjects__stack}>Stack</p>
                <ul className={style.petProjects__ul}>
                  <li>
                    Frontend: <span>React</span>
                  </li>
                  <li>
                    Backend: <span>Golang</span>
                  </li>
                  <li>
                    Architecture: <span>Monolithic</span>
                  </li>
                  <li>
                    DB: <span>SQLite, Gorm</span>
                  </li>
                  <li>
                    Router: <span>httprouter</span>
                  </li>
                  <li>
                    Config: <span>Cleanenv</span>
                  </li>
                  <li>
                    Logger: <span>logrus</span>
                  </li>
                  <li>
                    Testing: <span>Goconvey</span>
                  </li>
                  <li>
                    Registration: <span>JWT</span>
                  </li>
                  <li>
                    Protocol: <span>WebSocket</span>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
