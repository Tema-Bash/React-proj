import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <section className="form">
      <h2 className="form__title">Заполните форму <br/> и мы с вами cвяжемся</h2>
      <input className="form__input form__input_type_name" name="formName" id="" placeholder="Как к вам обращаться" type="text" />
      <input className="form__input form__input_type_email" name="formEmail" id="" placeholder="Ваш e-mail" type="email" />
      <input className="form__input form__input_type_number" name="formNamber" id="" placeholder="Телефон" type="tel" />
      <textarea className="form__input form__input_type_about" placeholder="Расскажите про вашу задачу" name="formAbout" id="" cols="30" rows="10"></textarea>
      <button className="form__submit" aria-label="Отправить" type="submit" >
        Отправить 
        <svg className='form__svg-icon' width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path className='form__icon' d="M12.6667 1.6665L21.2929 10.2927C21.6834 10.6833 21.6834 11.3164 21.2929 11.7069L12.6667 20.3332M2 10.9998H20.6667H2Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <p className="form__warning">Нажимая отправить вы соглашаетесь на обработку персональных данных</p>
    </section>
  )
}

export default Form