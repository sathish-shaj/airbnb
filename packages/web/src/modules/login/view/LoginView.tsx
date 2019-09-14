import * as React from "react";
import { Form, Button, Icon } from "antd";
import {
  withFormik,
  FormikErrors,
  FormikValues,
  FormikProps,
  Field
} from "formik";
import { LoginSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import { Link } from "react-router-dom";

interface Props {
  submit: (values: FormikValues) => Promise<FormikErrors<FormikValues> | null>;
}
const FormItem = Form.Item;
const LV: React.FC<FormikProps<FormikValues> & Props> = (
  props
): React.ReactElement => {
  const { handleSubmit } = props;
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div style={{ margin: "auto", width: "456px" }}>
          <Field
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            name="email"
            placeholder="Email"
            component={InputField}
          />
          <Field
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            name="password"
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <a className="login-form-forgot" href="google.com">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              login
            </Button>
            <div style={{ display: "inline-block", width: "10px" }}></div>
            Or
            <div style={{ display: "inline-block", width: "10px" }}></div>
            <Link to="/register">register now!</Link>
          </FormItem>
        </div>
      </form>
    </>
  );
};

export const LoginView = withFormik<Props, FormikValues>({
  validationSchema: LoginSchema,
  // validateOnBlur: false,
  // validateOnChange: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(LV);
