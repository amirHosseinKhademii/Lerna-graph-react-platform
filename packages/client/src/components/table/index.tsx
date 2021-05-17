import { FC, memo } from "react";
import { Pagination } from "components";
import { classNames } from "utils";

import { TableHead } from "./table-head";
import { TableRow } from "./table-row";

export const Table: FC<ITable> = memo(
  ({ className, columns, data, expand }) => {
    return (
      <div
        className={classNames("w-full col-start ", className)}
        slot="wrapper"
      >
        <TableHead columns={columns} />
        {(data || []).map((item, index) => (
          <TableRow
            key={index}
            item={item}
            columns={columns}
            index={index}
            expand={expand}
          />
        ))}
        <Pagination className="mt-10" total={data.length} page={1} />
      </div>
    );
  }
);
