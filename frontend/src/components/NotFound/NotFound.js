import React from "react"
import { useNavigate } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="notFound">
      <h2 className="notFounf__title">404</h2>
      <p className="notFounf__description">Страница не найдена</p>
      <button className="notFounf__button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  )
}

export default NotFound
