import { FC, memo } from "react";
import { useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils";

export const TextArea: FC<ITextArea> = memo(
  ({
    error,
    label,
    placeholder,
    register,
    className,
    name,
    required,
    max,
    min,
  }) => {
    const { validate } = useValidation({ required, max, min });

    return (
      <div className={classNames("w-full col-start resize-y", className)}>
        {label && <label className="text-gray-800 mb-2">{label}</label>}
        <textarea
          {...(register && { ...register(name, { validate }) })}
          placeholder={placeholder}
          name={name}
          className={classNames(
            "w-full min-h-[3rem] h-12 border rounded  focus:outline-none focus:shadow px-4 py-2 text-gray-700 placeholder-gray-500",
            error
              ? "border-red-400 bg-gradient-to-r from-red-300"
              : "border-gray-300 focus:ring-2  focus:ring-indigo-400 bg-gradient-to-r from-indigo-300"
          )}
        />
        <Error error={error} />
      </div>
    );
  }
);
