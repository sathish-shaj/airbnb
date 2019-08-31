import * as React from "react";
import { RegisterView } from "./view/RegisterView";

// container -> view
// container -> connector -> view
//   Logic      share Logic  RN(or)R(the view is different for React and RN)
// controller -> connector -> view

export const RegisterConnector = () => {
  const submit = async (values: any) => {
    console.log(values);
    return null;
  };
  return (
    <div>
      <RegisterView submit={submit} />
    </div>
  );
};
