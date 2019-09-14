import React from "react";
import { LoginView } from "./view/LoginView";
import { LoginController } from "@abb/controller";
import { FormikValues, FormikErrors } from "formik";

export const LoginConnector: React.FC = () => {
  return (
    <LoginController>
      {({
        submit
      }: {
        submit: () => Promise<FormikErrors<FormikValues> | null>;
      }) => <LoginView submit={submit} />}
    </LoginController>
  );
};
