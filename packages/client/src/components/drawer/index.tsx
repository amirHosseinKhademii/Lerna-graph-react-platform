import { FC, memo } from "react";
import { classNames } from "utils";

export const Drawer: FC<IDrawer> = memo(({ children, open }) => {
  return (
    <div
      className={classNames(
        "fixed top-0 right-0 h-full flex-col shadow-2xl trans z-30 bg-gradient-to-b from-blue-gray-500 ",
        open ? "w-72" : "w-0"
      )}
      slot="wrapper"
    >
      {children && <div slot="children">{children}</div>}
    </div>
  );
});
