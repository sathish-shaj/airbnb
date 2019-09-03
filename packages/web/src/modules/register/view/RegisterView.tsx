import * as React from "react";
import { Form, Icon, Input, Button } from "antd";
import { withFormik, FormikErrors, FormikValues, FormikProps } from "formik";
import { validationUserSchema } from "@abb/common";

interface Props {
  submit: (values: FormikValues) => Promise<FormikErrors<FormikValues> | null>;
}
const FormItem = Form.Item;
export const RV: React.FC<FormikProps<FormikValues> & Props> = (
  props
): React.ReactElement => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched
  } = props;
  console.log(errors);
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <div style={{ margin: "auto", width: "456px" }}>
        <FormItem
          help={touched.email && errors.email ? errors.email : ""}
          validateStatus={touched.email && errors.email ? "error" : undefined}
        >
          <Input
            name="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem
          help={touched.password && errors.password ? errors.password : ""}
          validateStatus={
            touched.password && errors.password ? "error" : undefined
          }
        >
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
  validationSchema: validationUserSchema,
  // validateOnBlur: false,
  // validateOnChange: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RV);
