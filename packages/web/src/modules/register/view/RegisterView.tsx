import * as React from "react";
import { Form, Icon, Input, Button } from "antd";
import { withFormik, FormikErrors, FormikValues, FormikProps } from "formik";
import * as yup from "yup";

interface Props {
  submit: (values: FormikValues) => Promise<FormikErrors<FormikValues> | null>;
}
const FormItem = Form.Item;
export const RV: React.FC<FormikProps<FormikValues> & Props> = (
  props
): React.ReactElement => {
  const { handleBlur, handleChange, handleSubmit, values } = props;
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <div style={{ margin: "auto", width: "456px" }}>
        <FormItem>
          <Input
            name="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem>
          {/*  */}
          <Input
            name="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
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
            Register Now
          </Button>
          <div style={{ display: "inline-block", width: "10px" }}></div>
          Or
          <div style={{ display: "inline-block", width: "10px" }}></div>
          <a href="google.com">login now!</a>
        </FormItem>
      </div>
    </form>
  );
};

export const RegisterView = withFormik<Props, FormikValues>({
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RV);
