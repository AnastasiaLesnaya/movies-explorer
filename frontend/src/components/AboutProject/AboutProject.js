import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="about">
      <div className="project__container">
        <h2 className="project__title">О проекте</h2>
        <ul className="project__text-block">
          <li className="project__info">
            <h3 className="project__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project__info-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="project__info">
            <h3 className="project__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project__info-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="project__time">
          <h3 className="project__time-title project__time-title_green">
            1 неделя
          </h3>
          <h3 className="project__time-title">4 недели</h3>
          <p className="project__time-work">Back-end</p>
          <p className="project__time-work">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
