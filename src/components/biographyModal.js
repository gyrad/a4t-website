import React from "react"
import Modal from "react-modal"
import styled from "styled-components"

Modal.setAppElement("#___gatsby")

const StyledBiographyModal = ({ className, isOpen, closeModal, bio }) => {
  const contentClassName = `${className}__content`
  const overlayClassName = `${className}__overlay`

  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={500}
    >
      {bio}
      <input type="button" onClick={closeModal} value="Close" />
    </Modal>
  )
}

const StyledStyledBiographyModal = styled(StyledBiographyModal)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999999;
    opacity: 0;
    transition: opacity 0.2s;
    &.ReactModal__Overlay--after-open {
      opacity: 1;
    }
    &.ReactModal__Overlay--before-close {
      opacity: 0;
      transition: opacity 0.4s;
    }
  }

  &__content {
    background: #fff;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    width: 95%;
    max-width: 600px;
    min-height: 150px;
    max-height: 500px;
    overflow: auto;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    transform: translate3d(-50%, -45%, 0) scale(0.9);
    opacity: 0;
    transition: transform 0.5s 0.3s ease-in-out, opacity 0.7s 0.3s ease-in-out;
    &.ReactModal__Content--after-open {
      opacity: 1;
      transform: translate3d(-50%, -50%, 0) scale(1);
    }

    &.ReactModal__Content--before-close {
      opacity: 0;
    }
  }

  h1 {
    margin: 0;
  }
`

export default StyledStyledBiographyModal
