import React, { Component } from 'react';
import FormField from '../utils/formFields';

import { validate } from '../utils/validate';

class FormOne extends Component {
  state = {
    maxAge: 80,
    loading: false,
    formData: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter Your Name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter Your Last Name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      age: {
        element: 'select',
        value: '',
        config: {
          name: 'age_input',
          type: 'text'
        },
        validation: {
          required: true,
          minNum: 20
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      message: {
        element: 'textarea',
        value: '',
        config: {
          name: 'message_input',
          type: 'text',
          rows: 3,
          placeholder: 'Enter Your Message Here...'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  generateOptions = () => {
    const ageArray = [];
    for (let i = 1; i <= this.state.maxAge; i++) {
      ageArray.push(i);
    }

    return ageArray.map((value, i) => {
      return (
        <option value={value} key={i}>
          {value}
        </option>
      );
    });
  };

  updateForm = element => {
    const newFormData = {
      ...this.state.formData
    };
    const newElement = {
      ...newFormData[element.id]
    };

    newElement.value = element.event.target.value;

    // check for validation
    let validateData = validate(newElement);
    newElement.valid = validateData[0];
    newElement.validationMessage = validateData[1];

    if (element.blur) {
      newElement.touched = element.blur;
    }

    newFormData[element.id] = newElement;

    this.setState({
      formData: newFormData
    });
  };

  onSuccess = () => {
    let formDataCopy = {
      ...this.state.formData
    };

    for (let key in this.state.formData) {
      formDataCopy[key].value = '';
      formDataCopy[key].valid = false;
      formDataCopy[key].touched = false;
    }
    this.setState({ formData: formDataCopy });
    alert(`Thanks ${this.state.formData.name.value}`);
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    this.setState({
      loading: true
    });

    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      this.setState({
        loading: true
      });
      for (let key in this.state.formData) {
        dataToSubmit[key] = this.state.formData[key].value;
      }
      console.log('submit this form with', dataToSubmit);

      setTimeout(() => {
        this.setState({
          loading: false
        });
        this.onSuccess();
      }, 3000);
    } else {
      alert('Sorry the form is not valid');
    }
  };

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label>Name</label>
            <FormField
              formData={this.state.formData.name}
              change={element => this.updateForm(element)}
              id="name"
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <FormField
              formData={this.state.formData.lastname}
              change={element => this.updateForm(element)}
              id="lastname"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <FormField
              formData={this.state.formData.age}
              change={element => this.updateForm(element)}
              id="age"
            >
              <option value="">Select Age Bozo</option>
              {this.generateOptions()}
            </FormField>
          </div>

          <div className="form-group">
            <label>Enter your message here</label>
            <FormField
              formData={this.state.formData.message}
              change={element => this.updateForm(element)}
              id="message"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={event => this.submitForm(event)}
            disabled={this.state.loading}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default FormOne;
