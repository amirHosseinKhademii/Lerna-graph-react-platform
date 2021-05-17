import { useCallback } from "react";
import {
  laterValidation,
  maxValidation,
  requiredValidation,
  minValidation,
} from "./utils";

export const useValidation = (props: IUseValidation) => {
  const { required, min, max, later } = props;

  return {
    validate: useCallback(
      (value) => {
        if (required) return requiredValidation(value, required);
        if (max) return maxValidation(value, max);
        if (min) return minValidation(value, min);
        if (later) return laterValidation(value, later);
      },
      [required, min, max, later]
    ) as any,
  };
};
