import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const FormItem = Form.Item;

export const InputField: React.FC<
  FieldProps<any> & {
    prefix: React.ReactNode;
  }
> = ({
  field: { ...field },
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}): React.ReactElement => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <FormItem help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
      <Input {...field} {...props} />
    </FormItem>
  );
};
