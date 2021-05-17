import { FC, memo } from "react";
import { classNames } from "utils";

export const SwitchBox: FC<ISwitch> = memo(({ onChange, toggle, open }) => (
  <div slot="wrapper">
    <div
      slot="toggle-wrapper"
      className={classNames(
        "flex items-center w-14 h-8 px-1 rounded-full cursor-pointer drop-shadow-lg",
        open
          ? "bg-gradient-to-l from-indigo-500 justify-end"
          : "bg-gradient-to-r from-gray-500 justify-start"
      )}
      onClick={() => {
        onChange(!open);
        toggle();
      }}
    >
      <div
        slot="toggle"
        className={classNames(
          "w-6 h-6 rounded-full border  ",
          open
            ? "bg-indigo-600 border-indigo-700"
            : "bg-gray-600 border-gray-700"
        )}
      />
    </div>
  </div>
));
