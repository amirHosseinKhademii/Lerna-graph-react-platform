import { Modal, Button } from "components";
import { FC, memo } from "react";
import { classNames } from "utils";

export const Confirm: FC<IConfirm> = memo(
  ({
    onConfirm,
    onCancel,
    description,
    title = "Are You Sure?",
    type = "delete",
  }) => {
    return (
      <Modal
        size="sm"
        className={classNames(
          "col-center px-4 md:px-10 xl:px-26 py-10",
          type === "delete"
            ? "bg-gradient-to-b from-red-500"
            : "bg-gradient-to-b from-amber-500"
        )}
        slot="dialog"
      >
        <span className="text-lg text-gray-800" slot="title">
          {title}
        </span>
        <span className="pt-10 text-gray-300" slot="description">
          {description}
        </span>
        <div className="row-around w-full mt-10" slot="actions">
          <Button
            icon
            role="cancel"
            className="h-10  w-20 xl:w-40 bg-gradient-to-b from-gray-400 "
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            icon
            className="h-10 w-20 xl:w-40 mb-6 bg-gradient-to-b from-amber-600 text-white"
            role="confirm"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    );
  }
);
