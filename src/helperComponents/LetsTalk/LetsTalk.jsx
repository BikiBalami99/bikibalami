import React, { useEffect, useState } from "react";
import styles from "./LetsTalk.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ButtonLoadingAnimation from "../ButtonLoadingAnimation/ButtonLoadingAnimation";

const LetsTalk = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [formDisabled, setFormDisabled] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormDisabled(true);
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/bikibalami1999@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        console.log("We succesfully sent a request");
        handleClose();
      } else {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "An unknown error occured");
      handleClose();
    } finally {
      setIsLoading(false);
    }
  }

  function handleClose() {
    setTimeout(() => {
      onClose();
      setIsLoading(false);
      setIsSuccess(false);
      setError(null);
      setFormDisabled(false);
    }, 3000);
  }

  return (
    <form
      className={styles.letsTalkForm}
      onSubmit={handleSubmit}
      data-loading={isLoading}
      data-success={isSuccess}
      data-error={error ? "true" : "false"}
      method="POST" // Optional: you can add this to be explicit
    >
      <input
        type="hidden"
        name="_subject"
        value="Submission from your portfolio website"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="#"></input>
      <input
        disabled={formDisabled}
        id="name"
        type="text"
        name="name"
        required
        placeholder="Full Name"
      />
      <input
        disabled={formDisabled}
        id="email"
        type="email"
        name="email"
        required
        placeholder="Email Address"
      />
      <textarea
        disabled={formDisabled}
        placeholder="Your Message"
        name="message"
        rows="10"
        required
      ></textarea>

      <PrimaryButton
        buttonModifierClass={{ paddingTop: "3rem", width: "100%" }}
        textModifierClass={{ fontSize: "1.3rem" }}
        type="submit"
      >
        Send
      </PrimaryButton>
    </form>
  );
};

export default LetsTalk;
