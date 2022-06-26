export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateName = (name) => {
  return name.length > 0;
};

export const validateUsername = (username) => {
  return username.length > 4;
};

export const validatePassword = (password) => {
  return password.length >= 8 && password.length < 17;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return (
    confirmPassword.length >= 8 &&
    confirmPassword.length < 17 &&
    password === confirmPassword
  );
};
