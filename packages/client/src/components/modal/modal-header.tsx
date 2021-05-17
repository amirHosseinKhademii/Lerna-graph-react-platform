import { FC, memo } from "react";
import { Button } from "components";
import { ICClose } from "icons";

export const ModalHeader: FC<IModal> = memo(
  ({ header, onClose, withHeader }) => {
    if (withHeader)
      return (
        <div
          className=" w-full row-between bg-gradient-to-b from-cyan-400 to-cyan-200 "
          slot="header"
        >
          {header ? (
            <span className="pl-8 text-2xl text-gray-700">{header}</span>
          ) : (
            <div />
          )}
          {onClose && (
            <Button
              icon
              className="mr-2 md:mr-8 my-4 md:my-6 "
              onClick={onClose}
            >
              <ICClose
                role="close"
                className=" w-6 h-6 md:w-8 md:h-8  text-gray-600"
              />
            </Button>
          )}
        </div>
      );
    else return null;
  }
);
