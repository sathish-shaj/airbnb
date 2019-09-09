import React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import {
  RegisterMutation_register,
  RegisterMutationVariables
} from "../../types/Gentypes";

interface Props {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController: React.FC<Props> = props => {
  const [input, setInput] = React.useState({ email: "", password: "" });

  const [Response, { error, data }] = useMutation<
    { Response: RegisterMutation_register },
    RegisterMutationVariables
  >(registerMutation, {
    variables: { email: input.email, password: input.password }
  });

  const submit = async (values: RegisterMutationVariables) => {
    setInput({ email: values.email, password: values.password });
    await Response();
    if (error) {
      console.log("error", error);
    }
    console.log("data", data);
    return null;
  };

  return props.children({ submit: submit });
};
