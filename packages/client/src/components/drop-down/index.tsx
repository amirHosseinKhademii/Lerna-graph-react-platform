import { FC, memo } from "react";
import { useToggle } from "hooks";
import { ICChevronDown, ICChevronRight } from "icons";
import { classNames } from "utils";

export const DropDown: FC<IDropdown> = memo(
  ({ className, label, children, active = false, icon }) => {
    const { open, toggle } = useToggle(active);

    return (
      <div
        className={classNames("col-full px-4 ", open ? "" : "py-3")}
        id="drop-down"
      >
        <button
          className={classNames(
            "w-full row-between focus:outline-none text-white  ",
            className,
            !open && "transform hover:-translate-y-1 hover:scale-105"
          )}
          onClick={() => toggle()}
          role="button"
        >
          <div className="row-items-center">
            {icon && icon()}
            <span className="text-lg text-gray-400">{label}</span>
          </div>

          {open ? (
            <ICChevronDown className="w-3 h-3" role="close" id="close" />
          ) : (
            <ICChevronRight className="w-3 h-3 " />
          )}
        </button>
        <div
          className={classNames(
            "w-full  rounded",
            open ? " h-auto min-h-10" : "h-0"
          )}
        >
          {open && (
            <div className="flex flex-col pl-8 pt-2" slot="children">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);
