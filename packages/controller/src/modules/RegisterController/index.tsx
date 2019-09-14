import React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import {
  RegisterMutation_register,
  RegisterMutationVariables
} from "../../generatedTypes/RegisterMutation";

// apollo-codegen generate src/**/*.tsx --schema schema.json --target typescript --output Gentypes.ts
// apollo-codegen introspect-schema http://localhost:4000 --output schema.json
// new
// apollo client:codegen --localSchemaFile=schema.json --target=typescript --includes=src/**/*.tsx --tagName=gql --addTy
interface Props {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

const REGISTER_MUTATION = gql`
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
  >(REGISTER_MUTATION, {
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
