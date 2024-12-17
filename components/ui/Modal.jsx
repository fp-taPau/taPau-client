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
        <Content className="fixed left-1/2 top-1/2 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-md bg-secondaryPink py-8 px-6 shadow-lg ">
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <Cross1Icon className="h-5 w-5" />
          </button>
          <div className="flex flex-row items-center justify-center space-y-6 mx-16">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={title}
                className="w-[10rem] object-contain -ml-8"
              />
            )}
            <div className="flex flex-col items-center justify-center space-y-4 ml-10">
              <Title className="text-2xl font-bold text-secondaryText text-left -mt-6 mr-18">
                {title}
              </Title>
              <Description className="text-secondaryText text-left text-md -mt-4 italic mr-4">
                {description}
              </Description>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-center items-center gap-6 mt-8 mx-6">
            {optionOne && (
              <button
                onClick={optionOne.onClick}
                className="py-3 text-md font-semibold text-red-600 hover:bg-red-600 hover:text-white rounded border-2 border-red-600 transition-colors col-span-1"
              >
                {optionOne.label}
              </button>
            )}
            {optionTwo && (
              <button
                onClick={optionTwo.onClick}
                className="py-3 text-md font-semibold text-partyPink hover:bg-partyPink hover:text-white rounded border-2 border-partyPink transition-colors col-span-1"
              >
                {optionTwo.label}
              </button>
            )}
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default Modal;
