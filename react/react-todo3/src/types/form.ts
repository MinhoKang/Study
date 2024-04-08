import React, { BaseSyntheticEvent } from "react";

export interface FormProps {
  id: string;
  className: string;
  children: React.ReactNode;
  onSubmit?: (
    e?: BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void> | Promise<{ handleSignUp: () => Promise<void> }>;
}
