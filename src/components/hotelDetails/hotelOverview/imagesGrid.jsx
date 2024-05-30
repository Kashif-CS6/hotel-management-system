"use client";
import React from "react";
import Image from "next/image";
import RatingCard from "./ratingCard";
import Modal from "react-modal";
import ModalImagesGrid from "./modalImagesGrid";

const ImagesGrid = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("modal is open");
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      
    },
  };
  return (
    <div className="grid grid-rows-4 gap-2">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>Close</button> */}
        <ModalImagesGrid closeModal={closeModal} />
      </Modal>
      <div className="grid grid-cols-3 row-span-3 gap-2">
        <div className="row-span-2 col-span-1 grid gap-2 grid-rows-2">
          <Image
            src="/hotel (8).jpg"
            width={500}
            height={200}
            className="w-full h-full object-cover overflow-hidden"
          />
          <Image
            src="/destinations (2).jpg"
            width={500}
            height={200}
            className="w-full h-full object-cover overflow-hidden"
          />
        </div>
        <div className="col-span-2 h-full relative">
          <Image
            src="/hotel (2).jpg"
            width={500}
            height={500}
            className="h-full w-full  object-cover overflow-hidden"
          />
          <div className="absolute top-2 right-2">
            <RatingCard />
          </div>
        </div>
      </div>
      <div className="row-span-1 grid grid-cols-4 gap-2">
        {Array.from({ length: 3 }, (_, i) => (
          <Image
            key={i}
            src="/hotel (2).jpg"
            width={500}
            height={500}
            className="aspect-video w-full object-cover"
          />
        ))}
        <div
          style={{ backgroundImage: "url('/hotel (6).jpg')" }}
          className="relative h-full w-full bg-cover bg-center bg-no-repeat cursor-pointer"
          onClick={openModal}
        >
          <div className="bg-slate-700 h-full w-full bg-opacity-50 flex items-center justify-center font-semibold text-white">
            +10 Photos
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
