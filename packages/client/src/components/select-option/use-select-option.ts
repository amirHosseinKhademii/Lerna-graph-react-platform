import { useCallback } from "react";

export const useSelectOption = ({ state }) => {
  return {
    handleChange: useCallback(
      ({ value, onChange }) => {
        const existed =
          state !== undefined &&
          state.length > 0 &&
          state.find((item) => item === value);
        const payload =
          state !== undefined
            ? existed
              ? [...state.filter((item) => item !== value)]
              : [...state, value]
            : [value];
        onChange(payload);
      },
      [state]
    ),
  };
};
