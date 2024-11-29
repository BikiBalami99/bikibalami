import React from "react";
import styles from "./LetsTalk.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const LetsTalk = () => {
  return (
    <form
      className={styles.letsTalkForm}
      action="https://formsubmit.co/bikibalami1999@gmail.com"
      method="POST"
    >
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Full Name"
      />
      <input id="email" type="email" name="email" placeholder="Email Address" />
      <input type="hidden" name="_subject" value="New submission!" />

      {/* Thank you page */}
      <input
        type="hidden"
        name="_next"
        value="https://yourdomain.co/thanks.html"
      />

      <textarea
        placeholder="Your Message"
        className="form-control"
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
