import React, { Component } from 'react';
import { Formik, Form as Form2, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PropTypes } from 'prop-types';

const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
// const urlRegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
const urlRegExp = /(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
// const urlRegExp = new RegExp(
//   "^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$",
//   'g'
// );

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Required'),
  url: Yup.string()
    .url('Invalid format!')
    // .matches(urlRegExp, 'Invalid format!')
    .required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Invalid format!')
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false
    };
  }

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            url: '',
            phone: ''
          }}
          validationSchema={FormSchema}
          // validate={values => {
          //   let errors = {};
          //   if (!values.name) {
          //     errors.name = 'Required';
          //   }
          //   if (!values.email) {
          //     errors.email = 'Required';
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = 'Invalid email address';
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, validateForm, errors }) => (
            // <form>
            <Form2>
              <h3>Name:</h3>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
              <h3>Email:</h3>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <h3>Password:</h3>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <h3>URL:</h3>
              <Field type="text" name="url" />
              <ErrorMessage name="url" component="div" />
              <h3>Phone:</h3>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" />
              <div className="small-6 small-centered text-center columns">
                <a
                  href="#"
                  className="button success expand round text-center"
                  disabled={isSubmitting}
                  onClick={() =>
                    validateForm().then(() => this.props.onValidate(errors))
                  }
                >
                  Verify
                </a>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button success expand round text-center"
                >
                  Submit
                </button>
              </div>
              {/* <h3>Name:</h3>
          <h3>Email:</h3>
          <h3>Phone:</h3>
          <h3>Blog URL:</h3>

          <div className="small-6 small-centered text-center columns">
            <a href="#" className="button success expand round text-center">
              Verify
            </a>
          </div> */}
              {/* </form> */}
            </Form2>
          )}
        </Formik>
      </div>
    );
  }
}

export default Form;
