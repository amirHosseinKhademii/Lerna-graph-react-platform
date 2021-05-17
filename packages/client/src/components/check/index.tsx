import { FC, memo } from "react";
import { classNames } from "utils/classes";

export const Check: FC<ICheck> = memo(
  ({ onClick, className, disabled, checked }) => {
    return (
      <input
        slot="wrapper"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        className={classNames("w-5 h-5 checked:bg-indigo-600", className)}
        onClick={(e) => !disabled && onClick && onClick(e)}
      />
    );
  }
);
