import React from "react";
import { FormikErrors, FormikValues } from "formik";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";

interface Props {
  children: (data: {
    submit: (
      values: FormikValues
    ) => Promise<FormikErrors<FormikValues> | null>;
  }) => JSX.Element | null;
}

interface RegisgerInput {
  path: string;
  message: string;
}

const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController: React.FC<Props> = props => {
  const [input, setInput] = React.useState({ email: "", password: "" });

  const [
    Response,
    {
      error
      /* ,data */
    }
  ] = useMutation<
    { Response: RegisgerInput },
    {
      email: string;
      password: string;
    }
  >(registerMutation, {
    variables: { email: input.email, password: input.password }
  });

  const submit = async (values: FormikValues) => {
    setInput({ email: values.email, password: values.password });
    await Response();
    if (error) {
      console.log("error", error);
    }
    return null;
  };

  return props.children({ submit: submit });
};
