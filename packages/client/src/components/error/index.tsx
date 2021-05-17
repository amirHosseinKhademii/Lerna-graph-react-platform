import { FC, memo } from "react";

export const Error: FC<IError> = memo(({ error }) => {
  if (error && typeof error === "string")
    return (
      <p className=" text-xs mt-2 text-rose-500  " slot="wrapper">
        {error}
      </p>
    );
  else return null;
});
