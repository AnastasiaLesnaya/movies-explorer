import React from "react"
import { useNavigate } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="notFound">
      <div className="notFound__container">
        {" "}
        <h1 className="notFound__title">404</h1>
        <p className="notFound__description">Страница не найдена</p>
      </div>
      <button className="notFound__button" onClick={() => navigate(-2)}>
        Назад
      </button>
    </section>
  )
}

export default NotFound
