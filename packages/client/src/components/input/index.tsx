import { FC, memo } from "react";
import { useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils";

export const Input: FC<IInput> = memo(
  ({
    error,
    label,
    type,
    placeholder,
    register,
    className,
    name,
    required,
    max,
    min,
    later,
    size,
    disabled,
    value,
    onClick,
    withError,
    icon,
  }) => {
    const { validate } = useValidation({ required, max, min, later });

    return (
      <div className={`w-full col-end relative ${className}`} slot="wrapper">
        {label && (
          <label
            slot="label"
            className={classNames(
              size === "small"
                ? "text-[10px] mb-1 text-gray-700"
                : "mb-2 text-gray-700"
            )}
          >
            {label}
          </label>
        )}
        <input
          {...(register && { ...register(name, { validate }) })}
          slot="input"
          type={type}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          value={value}
          onClick={onClick}
          className={classNames(
            " w-full border rounded  focus:outline-none focus:shadow  text-gray-700 placeholder-gray-500 text-center",
            error || withError
              ? "border-red-400 shadow bg-gradient-to-l from-red-300 "
              : disabled
              ? "bg-gray-300"
              : "border-gray-300 focus:ring-2 focus:ring-indigo-400 bg-gradient-to-l from-indigo-300",
            size === "large"
              ? "h-14 "
              : size === "small"
              ? "h-8 text-[10px]"
              : "h-12",
            icon ? "px-10" : "px-4"
          )}
        />
        {icon && (
          <div
            className={classNames(
              "absolute left-3",
              label
                ? size === "small"
                  ? "top-6"
                  : "top-12"
                : size === "small"
                ? "top-2"
                : "top-4"
            )}
          >
            {icon()}
          </div>
        )}

        <Error error={error} />
      </div>
    );
  }
);
