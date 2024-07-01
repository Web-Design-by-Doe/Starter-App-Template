const loginFormState = {
  email: "",
  password: "",
};

const registerFormState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const passwordResetRequestFormState = {
  email: "",
};

const passwordResetFormState = {
  password: "",
  confirm_password: "",
  userId: "",
  secret: "",
};

const updateUserNameFormState = {
  name: "",
};

export {
  loginFormState,
  registerFormState,
  passwordResetRequestFormState,
  passwordResetFormState,
  updateUserNameFormState,
};
