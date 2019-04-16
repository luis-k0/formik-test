import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Input from './UI/Input/Input';
import { updateObject, checkValidity } from '../shared/utility';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Email'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        phone: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Phone'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        url: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Blog URL'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      }
    };
  }

  inputChangedHandler = (event, inputIdentifier) => {
    // const updateFormElement = updateObject(orderForm[inputIdentifier], {
    //   value: event.target.value,
    //   valid: checkValidity(
    //     event.target.value,
    //     orderForm[inputIdentifier].validation
    //   ),
    //   touched: true
    // });
    // const updatedOrderForm = updateObject(orderForm, {
    //   [inputIdentifier]: updateFormElement
    // });
    // // console.log(updateFormElement);
    // // verificando se todos os campos são válidos
    // let formIsValid = true;
    // for (let inputIdentifier in updatedOrderForm) {
    //   formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    // }
    // // this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    // setOrderForm(updatedOrderForm);
    // setFormIsValid(formIsValid);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.orderForm[key]
      });
    }

    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          {/* <h3>Name:</h3>
          <h3>Email:</h3>
          <h3>Phone:</h3>
          <h3>Blog URL:</h3> */}
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={event => this.inputChangedHandler(event, formElement.id)}
            />
          ))}
          <div className="small-6 small-centered text-center columns">
            <a href="#" className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
