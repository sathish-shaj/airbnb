import * as React from "react";
import { FormikErrors, FormikValues } from "formik";

export interface Props {
  children: (data: {
    submit: (
      values: FormikValues
    ) => Promise<FormikErrors<FormikValues> | null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<Props> = props => {
  const submit = async (values: FormikValues) => {
    console.log(values);
    return null;
  };

  return props.children({ submit: submit });
};
