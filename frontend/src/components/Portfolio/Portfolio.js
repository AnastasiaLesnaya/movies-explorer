import React from "react";
import "./Portfolio.css";
import CustomLink from "./CustomLink";

function Portfolio() {

  const links = [
    {title: 'Статичный сайт', link: 'https://github.com/AnastasiaLesnaya/how-to-learn'},
    {title: 'Адаптивный сайт', link: 'https://anastasialesnaya.github.io/russian-travel/index.html'},
    {title: 'Одностраничное приложение', link: 'https://anastasialesnaya.github.io/mesto/'},
  ]

  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__list">
        {links.map(link => (
          <CustomLink
          key={link.link}
          title={link.title}
          link={link.link}
          />
        ))}
      </nav>
    </section>
  );
}

export default Portfolio;
