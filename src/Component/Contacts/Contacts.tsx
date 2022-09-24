import React from 'react';
import s from './Contacts.module.css'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';




const SERVICE_ID = "service_y9nsc9q";
const TEMPLATE_ID = "template_rn52w4z";
const USER_ID = "ARVywANSU1CyZGq6h";
const Contacts = () => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Сообщение успешно отправленно'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Упс, ошибочка:)',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <div className={s.forms_section}>
      <div className={s.wrapper_v2__forms_grid}>
        <div className={s.normal_wrapper}>
          <h2 className={s.heading_55px__24px_bottom}>Напиши мне</h2>
          <p className={s.paragraph_18px__light_grey}>Теперь, когда вы много знаете обо мне, дайте мне знать, если вам интересно работать со мной.</p>
        </div>
        <div className={s.form_block__w_form}>
          <Form onSubmit={handleOnSubmit}>
            <label className={s.paragraph_16px__white}>Имя</label>
            <Form.Field
              type='text'
              id='form-input-control-last-name'
              control={Input}
              name='user_name'
              required
            />
            <label className={s.paragraph_16px}>Email Адрес</label>
            <Form.Field
              type='email'
              id='form-input-control-email'
              control={Input}
              name='user_email'
              required
            />
            <label className={s.paragraph_16px}>Сообщение</label>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              name='user_message'
              required
            />
            <Button className={s.form_button__w_button} type='submit'>Отправить</Button>
          </Form>
        </div>
      </div>
    </div >
  );
};

export default Contacts;