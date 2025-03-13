import React from "react";
import { nanoid } from "nanoid";

import style from "./Home.module.scss";
import "../App.scss";

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
                      <img className={style.petProjects__img} src={item.img} alt="" />
                    </a>
                  </div>
                </div>
                <div className={style.petProjects__right}>
                  <p className={style.petProjects__stack}>Stack</p>
                  <ul className={style.petProjects__ul}>
                    {Object.entries(item.stacks).map(([key, value]) => (
                      <li key={nanoid()}>
                        {key}: <span>{value}</span>
                        {key === "GIT" && (
                          <a className={style.specialLink} target="__blank" href={item.gitLink}>
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
