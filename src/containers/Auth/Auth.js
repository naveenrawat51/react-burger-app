import React, { useState, useEffect } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.css";
import * as action from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";
import { checkValidity } from "../../shared/utility";

const Auth = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your Email Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Your Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
      },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormISValid] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    return () => {
      if (!props.buildingBurger && props.authRedirectPath !== "/") {
        props.onSetRedirectPath();
      }
    };
  }, []);

  const inputChangeHandler = (event, controlName) => {
    const formData = {
      ...JSON.parse(JSON.stringify(loginForm)),
      [controlName]: {
        ...loginForm[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          loginForm[controlName].validation
        ),
        touched: true,
      },
    };

    let formIsValid = true;
    for (let inputIdentifier in formData) {
      formIsValid = formData[inputIdentifier].valid && formIsValid;
    }
    setLoginForm(formData);
    setFormISValid(formIsValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(loginForm.email.value, loginForm.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in loginForm) {
    formElementsArray.push({
      id: key,
      config: loginForm[key],
    });
  }

  let form = formElementsArray.map((formElement, index) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      changed={(event) => inputChangeHandler(event, formElement.id)}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
    />
  ));

  if (props.loading) {
    form = <Spinner />;
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p style={{ color: "red" }}>{props.error}</p>;
  }
  return (
    <div className={classes.Auth}>
      {props.isAuthenticated ? <Redirect to={props.authRedirectPath} /> : null}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success" disabled={!formIsValid}>
          {isSignup ? "SIGNUP" : "SIGNIN"}
        </Button>
      </form>
      <Button btnType="Danger" clicked={switchAuthModeHandler}>
        SWITCH TO {isSignup ? "SIGNIN" : "SIGNUP"}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token ? true : false,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(action.auth(email, password, isSignup)),
    onSetRedirectPath: () => dispatch(action.setAuthRedirectPath("/")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
