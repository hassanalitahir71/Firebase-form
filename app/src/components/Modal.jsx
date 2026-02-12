import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { createPortal } from "react-dom";

function Modal({ Open, onClose, children }) {
  return createPortal(
    <>
      {Open && (
        <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-sm">
          <div className="flex h-68 w-86 flex-col items-center gap-3 rounded-lg bg-white p-3">
            <IoCloseCircleOutline
              className="mb-4.5 cursor-pointer self-end text-3xl"
              onClick={onClose}
            />
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
