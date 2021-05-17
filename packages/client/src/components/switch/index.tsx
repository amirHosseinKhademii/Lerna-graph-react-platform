import { FC, memo } from "react";
import { Controller } from "react-hook-form";
import { useToggle } from "hooks";
import { classNames } from "utils";

import { SwitchBox } from "./switch-box";

export const Switch: FC<ISwitch> = memo(
  ({ label, checked, control, name, className }) => {
    const { open, toggle } = useToggle(checked);

    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <div
            className={classNames(
              "flex items-center h-20 overflow-hidden",
              className
            )}
          >
            <div className="row-between mr-4">
              <SwitchBox onChange={onChange} open={open} toggle={toggle} />
            </div>
            <span className="text-gray-800">{label}</span>
          </div>
        )}
      />
    );
  }
);
