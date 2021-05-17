import { FC, memo } from "react";

export const SelectBoxValue: FC<ISelect> = memo(({ multiple, value }) => {
  if (multiple && value && value.length > 0)
    return (
      <div>
        {(value || []).map((val, index) => (
          <span className="text-gray-700 pr-2" key={index}>
            {val},
          </span>
        ))}
      </div>
    );
  else return <span className="text-gray-700">{value}</span>;
});
