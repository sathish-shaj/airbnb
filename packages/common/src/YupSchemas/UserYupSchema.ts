import * as yup from "yup";

export const emailNotLongEnough = "email must be at least 3 characters";
export const passwordNotLongEnough = "password must be at least 3 characters";
export const invalidEmail = "email must be a valid email";

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required();

export const validationUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: registerPasswordValidation
});
const LoginError = "Invalid Login";
export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, LoginError)
    .max(255)
    .email(LoginError)
    .required(),
  password: yup
    .string()
    .min(3, LoginError)
    .max(255)
    .required()
});
