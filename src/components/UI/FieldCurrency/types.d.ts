import React from "react";

export interface IViewProps {
  error?: boolean;
  label?: string;
  maxLength?: number;
  name?: string | undefined;
  id?: string | undefined;
  onChange?: (
    value: string | undefined,
    name?: string | undefined,
    values?: CurrencyInputOnChangeValues | undefined
  ) => void;
  placeholder?: string;

  value?:
    | ((string | number | null) & (string | number | readonly string[]))
    | undefined;
}
