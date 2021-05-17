import { FC, memo } from "react";
import { ICChevronLeft, ICChevronRight } from "icons";

export const Pagination: FC<IPagination> = memo(
  ({ className, total, page }) => {
    return (
      <div className={`w-full row-between ${className}`} slot="wrapper">
        <div />
        {total / 10 > 1 && (
          <div className="row-items-center">
            <ICChevronLeft
              className="w-4 h-4 text-gray-700 mr-3"
              role="left-arrow"
            />
            {Array.from(new Array(total))
              .slice(0, 2)
              .map((item, index) => (
                <button
                  slot="paginator"
                  key={index}
                  className={`w-10 h-10 rounded-lg row-center mr-2 shadow  hover:text-white  focus:outline-none ${
                    page === index + 1
                      ? "bg-cyan-600 text-white hover:opacity-80"
                      : "hover:bg-indigo-500"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            <ICChevronRight
              className="w-4 h-4 text-gray-700 ml-2"
              role="right-arrow"
            />
          </div>
        )}
      </div>
    );
  }
);
