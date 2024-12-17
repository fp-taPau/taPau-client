import React from "react";
import {
  Root,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
} from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

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
    <Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Content className="fixed left-1/2 top-1/2 max-w-2xl w-full -translate-x-1/2 -translate-y-1/2 rounded-md bg-secondaryPink py-6 shadow-lg">
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <Cross1Icon className="h-5 w-5" />
          </button>
          <div className="flex flex-col items-center justify-center mx-10">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={title}
                className="w-60 h-auto mx-auto mt-6 mb-6"
              />
            )}
            <Title className="text-2xl font-bold text-secondaryText text-center">
              {title}
            </Title>
            <Description className="text-secondaryText mb-4 text-center px-8">
              {description}
            </Description>
            <div className="fleCross1Icon flex justify-around gap-4 mt-6">
              {optionOne && (
                <button
                  onClick={optionOne.onClick}
                  className="px-4 py-2 text-md font-semibold text-partyPink hover:bg-partyPink hover:text-white rounded border-2 border-partyPink hover:transition-colors cursor-pointer"
                >
                  {optionOne.label}
                </button>
              )}
              {optionTwo && (
                <button
                  onClick={optionTwo.onClick}
                  className="px-4 py-2 text-md font-semibold text-partyPink hover:bg-partyPink hover:text-white rounded border-2 border-partyPink hover:transition-colors cursor-pointer"
                >
                  {optionTwo.label}
                </button>
              )}
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default Modal;
