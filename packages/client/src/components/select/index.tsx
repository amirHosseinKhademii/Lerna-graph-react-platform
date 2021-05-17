import { FC, memo } from "react";
import { Controller } from "react-hook-form";
import { useToggle, useValidation } from "hooks";
import { Input, Button, Error } from "components";
import { classNames } from "utils";

import { SelectBackDrop } from "./select-back-drop";
import { SelectBox } from "./select-box";
import { SelectDropBox } from "./select-drop-box";

export const Select: FC<ISelect> = memo(
  ({
    error,
    label,
    control,
    className,
    name,
    children,
    value,
    required,
    multiple,
    register,
    isInput,
    setValue,
    onCancel,
  }) => {
    const { open, toggle } = useToggle();
    const { validate } = useValidation({ required });

    if (isInput)
      return (
        <div className="w-full flex items-end">
          <Input
            label="CHO Counting"
            name="CHOCounting"
            register={register}
            error={error}
            value={value}
          />
          <Button
            className="h-12 ml-2 bg-cyan-600 text-white"
            onClick={() => {
              setValue(name, multiple ? [] : "");
              onCancel();
            }}
          >
            Back
          </Button>
        </div>
      );
    else
      return (
        <div
          className={classNames("w-full col-start", className)}
          slot="wrapper"
        >
          {label && (
            <label className="text-gray-800 mb-2" slot="label">
              {label}
            </label>
          )}

          <Controller
            name={name}
            control={control}
            rules={{ validate }}
            render={({ field: { onChange } }) => (
              <div className={`w-full flex-col relative`} slot="controlled">
                {open ? (
                  <SelectDropBox
                    onChange={onChange}
                    toggle={toggle}
                    value={value}
                    multiple={multiple}
                  >
                    {children}
                  </SelectDropBox>
                ) : (
                  <SelectBox
                    onChange={onChange}
                    toggle={toggle}
                    value={value}
                    error={error}
                    multiple={multiple}
                    setValue={setValue}
                    name={name}
                  />
                )}
              </div>
            )}
          />
          <Error error={error} />
          {open && <SelectBackDrop toggle={toggle} />}
        </div>
      );
  }
);
