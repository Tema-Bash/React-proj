import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <section className="form">
    <h2 className="form__title">Заполните форму и мы с вами cвяжемся</h2>
    <input className="form__input form__input_type_name" name="" id="" placeholder="Как к вам обращаться" type="text" />
    <input className="form__input form__input_type_email" name="" id="" placeholder="Ваш e-mail" type="email" />
    <input className="form__input form__input_type_number" name="" id="" placeholder="Телефон" type="tel" />
    <textarea className="form__input form__input_type_about" placeholder="Расскажите про вашу задачу" name="" id="" cols="30" rows="10"></textarea>
    <button className="form__submit" aria-label="Отправить" type="submit">Отправить &rarr;</button>
    <p className="form__warning">Нажимая отправить вы соглашаетесь на обработку персональных данных</p>
  </section>
  )
}

export default Form
