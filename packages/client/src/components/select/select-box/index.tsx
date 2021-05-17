import { FC, memo } from "react";
import { classNames } from "utils";
import { SelectBoxActions } from "./select-box-actions";
import { SelectBoxValue } from "./select-box-value";

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple, setValue, name, ref }) => {
    return (
      <div
        className="w-full flex-col bg-white rounded"
        ref={ref}
        slot="wrapper"
      >
        <div
          role="toggler"
          onClick={() => toggle()}
          className={classNames(
            " w-full row-between focus:outline-none overflow-hidden cursor-pointer px-4  rounded border text-gray-300",
            multiple ? "min-h-[3rem]" : "h-12",
            error
              ? "border-red-400 shadow bg-gradient-to-r from-red-300"
              : "border-gray-300 bg-gradient-to-r from-indigo-300"
          )}
        >
          <SelectBoxValue multiple={multiple} value={value} />
          <SelectBoxActions
            multiple={multiple}
            value={value}
            setValue={setValue}
            name={name}
          />
        </div>
      </div>
    );
  }
);
