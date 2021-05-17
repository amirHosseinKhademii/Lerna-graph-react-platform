import { FC, memo } from "react";
import { classNames } from "utils";

export const DropDownOption: FC<IDropdownOption> = memo(
  ({ children, onClick, active }) => {
    return (
      <span
        slot="wrapper"
        className={classNames(
          active ? "text-cyan-300 font-semibold" : " text-gray-300",
          " cursor-pointer hover:animate-pulse px-4 pb-3 text-sm"
        )}
        onClick={onClick}
      >
        {children}
      </span>
    );
  }
);
