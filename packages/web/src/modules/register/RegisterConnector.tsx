import React from "react";
import { RegisterView } from "./view/RegisterView";
import { RegisterController } from "@abb/controller";
import { FormikValues, FormikErrors } from "formik";

// container -> view
// container -> connector -> view
//   Logic      share Logic  RN(or)R(the view is different for React and RN)
// controller -> connector -> view

export const RegisterConnector: React.FC = () => {
  return (
    <RegisterController>
      {({
        submit
      }: {
        submit: () => Promise<FormikErrors<FormikValues> | null>;
      }) => <RegisterView submit={submit} />}
    </RegisterController>
  );
};
