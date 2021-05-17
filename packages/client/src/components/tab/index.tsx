import { FC } from "react";
import { useToggle } from "hooks";
import { classNames } from "utils";
import { TabExpand } from "./tab-expand";
import { TabActions } from "./tab-actions";
import { useTab } from "./use-tab";

export const Tab: FC<ITab> = ({
  children,
  text,
  className,
  expandable = false,
  initialIsOpen = false,
}) => {
  const { open, onExpand } = useTab({ initialIsOpen, expandable });
  return (
    <div className={classNames("w-full col-center", className)}>
      <div
        className={classNames(
          "w-full flex items-center justify-between  py-4 px-4 bg-cyan-600 ",
          expandable && "cursor-pointer",
          expandable ? (open ? "rounded-t" : "rounded") : "rounded-t"
        )}
        onClick={onExpand}
      >
        <span className="text-2xl text-white">{text}</span>
        <TabActions expandable={expandable} open={open} />
      </div>
      <TabExpand expandable={expandable} open={open}>
        {children}
      </TabExpand>
    </div>
  );
};
