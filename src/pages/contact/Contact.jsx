import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { fullName, email, subject, message } = formData;

    if (!fullName || !email || !subject || !message) {
      setFeedbackMessage("Please fill in all required fields.");
      setMessageColor(styles.errorMessage);
      return;
    }

    emailjs
      .send(
        "service_0cc9w0l", // EmailJS Service ID
        "template_w26ieau", // EmailJS Template ID
        {
          from_name: fullName,
          from_email: email,
          subject: subject,
          message: message,
        },
        "HgEh_NxxshPwNgnG8" // Your Public Key
      )
      .then(
        () => {
          setMessageColor(styles.successMessage);
          setFeedbackMessage("Message sent successfully!");
          setTimeout(() => setFeedbackMessage(""), 5000);
          setFormData({ fullName: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error sending email: ", error);
          setMessageColor(styles.errorMessage);
          setFeedbackMessage("Oops! Something went wrong. Please try again later.");
          setTimeout(() => setFeedbackMessage(""), 5000);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      {feedbackMessage && <p className={`${styles.feedback} ${messageColor}`}>{feedbackMessage}</p>}

      <form onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        />
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

