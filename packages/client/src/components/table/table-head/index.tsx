import { FC, memo } from "react";
import { classNames } from "utils";

export const TableHead: FC<ITableHead> = memo(({ columns }) => (
  <div className="w-full row-start border-b border-gray-400  py-4 px-6  rounded-t bg-gradient-to-b from-cyan-600 to-cyan-300">
    {(columns || []).map((column, index) => (
      <div
        className={classNames(
          "flex items-center text-lg font-semibold",
          index === columns.length - 1 ? " justify-end" : "justify-start",
          column.width
        )}
        key={index}
      >
        <span className="text-white">{column.head}</span>
      </div>
    ))}
  </div>
));
