import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@radix-ui/react-icons";

const Modal = ({
  title,
  imageSrc,
  description,
  optionOne,
  optionTwo,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Content */}
        <Dialog.Content className="fixed left-1/2 top-1/2 max-w-lg w-full -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg">
          {/* Close Button */}
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}

          {/* Title */}
          <Dialog.Title className="text-2xl font-bold text-gray-800 mb-2">
            {title}
          </Dialog.Title>

          {/* Description */}
          <Dialog.Description className="text-gray-600 mb-4">
            {description}
          </Dialog.Description>

          {/* Options */}
          <div className="flex justify-end gap-4">
            {optionOne && (
              <button
                onClick={optionOne.onClick}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
              >
                {optionOne.label}
              </button>
            )}
            {optionTwo && (
              <button
                onClick={optionTwo.onClick}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
              >
                {optionTwo.label}
              </button>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
