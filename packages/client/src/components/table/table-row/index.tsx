import { FC, memo } from "react";
import { classNames } from "utils";
import { useToggle } from "hooks";

import { TableCell } from "../table-cell";

export const TableRow: FC<ITableRow> = memo(({ item, columns, expand }) => {
  const { open, toggle } = useToggle();

  return (
    <div className="w-full flex flex-col border-b border-gray-300 bg-white">
      <div
        onClick={() => (expand ? toggle() : {})}
        className={classNames(
          "w-full row-start py-4 px-6 ",
          open
            ? "bg-gradient-to-b from-cyan-300 to-cyan-200"
            : "hover:bg-cyan-100",
          expand && "cursor-pointer"
        )}
      >
        {(columns || []).map((column, index) => (
          <TableCell
            key={index}
            item={item}
            index={index}
            column={column}
            columns={columns}
          />
        ))}
      </div>
      {open && expand ? (
        <div className="w-full row-start p-4 bg-gradient-to-b from-cyan-200 to-cyan-100">
          {expand(item)}
        </div>
      ) : null}
    </div>
  );
});
