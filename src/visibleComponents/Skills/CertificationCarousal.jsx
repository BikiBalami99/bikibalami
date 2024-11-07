import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import Carousel from "../../helperComponents/Carousel/Carousel";
import expandIcon from "../../assets/icons/expandIcon.svg";

const CertificationCarousal = ({ skillType: { certificates } }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  useEffect(() => {
    if (isDialogOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isDialogOpen]);

  return (
    <div>
      <div className={styles.carouselContainer}>
        <Carousel arrayOfObjects={certificates} />
        <button onClick={openDialog} className={styles.expandButton}>
          <img src={expandIcon} alt="expandIcon" />
        </button>
      </div>
      {isDialogOpen && (
        <dialog ref={dialogRef} className={styles.modal}>
          <Carousel arrayOfObjects={certificates} />
          <form method="dialog">
            <button
              className={styles.modalCloseButton}
              type="button"
              onClick={closeDialog}
            >
              &times;
            </button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default CertificationCarousal;
