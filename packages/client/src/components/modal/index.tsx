import { createPortal } from "react-dom";
import { FC, memo } from "react";
import { ModalDom } from "./modal-dom";

export const Modal: FC<IModal> = memo((props) => {
  return createPortal(
    <ModalDom {...props} />,
    document.getElementById("modal-root")
  );
});
