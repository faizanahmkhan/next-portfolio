import tictactoevid from "../public/Tictactoe-Presentation.mp4"
import { useState, useEffect, useRef } from "react";
import '../styles/Home.module.css'

export default function TicVideoPlayer() {
    const [isOpen, setIsOpen] = useState(false);
    const closeButtonRef = useRef(null);
  
    useEffect(() => {
      if (isOpen) {
        closeButtonRef.current.focus();
     document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    }, [isOpen]);

    const handleKeyDown = (event) => {
        if (event.keyCode === 27) {
          handleClose();
        }
      }
  
    const handleOpen = () => {
      setIsOpen(true);
    }
    const handleClose = () => {
      setIsOpen(false);
    }
  
    return (
      <div>
        <button onClick={handleOpen}
        className="5xl:px-12 3xl:px-2 2xl:px-12 xl:px-8 lg:px-2 md:px-8 sm:px-12 xs:px-4 "
        >Live Demo {">"}</button>
        {isOpen && (
          <div className="video-overlay" aria-label="Video Modal" tabIndex="-1">
            <button className="close-button" onClick={handleClose} aria-label="Close Video Modal" ref={closeButtonRef}>
              X
            </button>
            <div className="video-container">
              <video src={tictactoevid} controls width='100%' />
            </div>
          </div>
        )}
          <style jsx>{`
            .video-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.8);
              z-index: 9999;
            }
            .video-container {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            video {
              width: 100%;
            }
            .close-button {
              position: absolute;
              top: 20px;
              right: 20px;
              font-size: 20px;
              font-weight: semibold;
              background-color: transparent;
              border: 0;
              color: white;
              cursor: pointer;
            }
          `}</style>
        </div>
      )
    }