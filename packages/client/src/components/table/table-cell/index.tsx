import { FC, memo } from "react";
import { Check } from "components";
import { classNames } from "utils";

import { useTableCell } from "./use-table-cell";

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    const { handleCheck, checkList } = useTableCell();

    return (
      <div
        slot="wrapper"
        className={classNames(
          "flex items-center",
          index === columns.length - 1 ? " justify-end" : "justify-start",
          column.width
        )}
      >
        {column.withCheck && (
          <Check
            checked={checkList.find((it) => it === item.id) ? true : false}
            onClick={handleCheck(item.id)}
            className="mr-2"
          />
        )}
        {column.render ? (
          column.render()
        ) : (
          <span className="text-gray-600 text-lg"> {item[column.key]}</span>
        )}
      </div>
    );
  }
);
