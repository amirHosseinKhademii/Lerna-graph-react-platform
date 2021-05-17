import { Button } from "components/button";
import { ICChevronUp } from "icons";
import { cloneElement, FC, memo } from "react";

export const SelectDropBox: FC<ISelect> = memo(
  ({ onChange, children, toggle, multiple, value, ref }) => (
    <div
      className="w-full col-start min-h-[3rem] max-h-60 overflow-y-auto rounded  px-4 py-2  z-50 pt-18px absolute top-1px border-2 shadow border-indigo-400 bg-white"
      ref={ref}
      slot="wrapper"
    >
      <Button
        icon
        className="absolute right-4 top-3 z-50"
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
      >
        <ICChevronUp className="w-4 h-4 text-gray-500   " role="arrow-up" />
      </Button>

      {children.length
        ? children.map((child, index) =>
            cloneElement(child, {
              onChange,
              toggle,
              key: index,
              multiple,
              state: value,
            })
          )
        : cloneElement(children, {
            onChange,
            toggle,
            multiple,
            state: value,
          })}
    </div>
  )
);
