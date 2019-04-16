import React from 'react';

// import classes from "./Input.css";

const input = props => {
  let inputElement = null;
  // const inputClasses = [classes.InputElement];

  // if (props.invalid && props.shouldValidate && props.touched) {
  //   inputClasses.push(classes.Invalid);
  // }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <React.Fragment>
          <h3>{props.elementConfig.placeholder}</h3>
          <input
            // className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </React.Fragment>
      );
      break;
    case 'textarea':
      inputElement = (
        <React.Fragment>
          <h3>{props.elementConfig.placeholder}</h3>
          <textarea
            // className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </React.Fragment>
      );
      break;
    case 'select':
      inputElement = (
        <React.Fragment>
          <h3>{props.elementConfig.placeholder}</h3>
          <select
            // className={inputClasses.join(' ')}
            value={props.value}
            onChange={props.changed}
          >
            {props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        </React.Fragment>
      );
      break;
    default:
      inputElement = (
        <React.Fragment>
          <h3>{props.elementConfig.placeholder}</h3>
          <input
            // className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </React.Fragment>
      );
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
