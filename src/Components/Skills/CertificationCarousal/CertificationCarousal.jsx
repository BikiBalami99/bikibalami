import React, { useEffect, useRef, useState } from "react";
import expandIcon from "/assets/icons/expandIcon.svg";
import SkillsCarousel from "../../../helperComponents/Carousel/SkillsCarousel";
import styles from "./CertificationCarousall.module.css";

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
        <SkillsCarousel arrayOfObjects={certificates} />
        <button onClick={openDialog} className={styles.expandButton}>
          <img src={expandIcon} alt="expandIcon" />
        </button>
      </div>
      {isDialogOpen && (
        <dialog ref={dialogRef} className={styles.modal}>
          <div>
            <SkillsCarousel arrayOfObjects={certificates} />
          </div>
          <form method="dialog">
            <button
              className={`circleButton ` + styles.modalCloseButton}
              type="button"
              onClick={closeDialog}
              style={{ width: "40px" }}
              // Overwriting the default width of the button cause this looks better smaller.
            >
              <p> &times;</p>
            </button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default CertificationCarousal;
