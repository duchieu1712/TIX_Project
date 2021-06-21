import React from "react";
import Modal from "@material-ui/core/Modal";
const PopupTrailer = (props) => {
  const { trailer, open } = props;

  const handleClose = () => {
    props.onHandleClose(!open);
  };
  return (
    <Modal
      className="videoTrailer d-flex justify-content-center align-items-center"
      open={open}
      onClose={handleClose}
    >
      <iframe
        width="800"
        height="500"
        src={trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Modal>
  );
};

export default PopupTrailer;
