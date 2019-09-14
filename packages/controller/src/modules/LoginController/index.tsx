import React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import {
  LoginMutation,
  LoginMutationVariables
} from "../../generatedTypes/LoginMutation";

interface Props {
  children: (data: {
    submit: (values: LoginMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`;
export const LoginController: React.FC<Props> = props => {
  const [input, setInput] = React.useState({ email: "", password: "" });

  const [Response, { error, data }] = useMutation<
    { Response: LoginMutation },
    LoginMutationVariables
  >(LOGIN_MUTATION, {
    variables: { email: input.email, password: input.password }
  });
  const submit = async (values: LoginMutationVariables) => {
    setInput({ email: values.email, password: values.password });
    await Response();
    if (error) {
      console.log("error", error);
    }
    if (data) {
      console.log("data", data.Response.login);
    }
    return null;
  };
  return props.children({ submit: submit });
};
