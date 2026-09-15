import { useState } from "react";
import "./styles.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dietary, setDietary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const unsubmitForm = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setDietary("");
  };

  return (
    <>
      {!submitted ? (
        <form className="rsvp-form" onSubmit={submitForm}>
          <input
            className="rsvp-input"
            value={name}
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="rsvp-input"
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="rsvp-input"
            value={dietary}
            type="text"
            placeholder="Dietary Restrictions (optional)"
            onChange={(e) => setDietary(e.target.value)}
          />
          <input className="rsvp-submit-btn" type="submit" value="RSVP" />
        </form>
      ) : (
        <div>
          <p>
            Thank you for your RSVP, {name}! We&apos;ll send a confirmation to{" "}
            {email}.
          </p>
          <button onClick={unsubmitForm}>Cancel RSVP</button>
        </div>
      )}
    </>
  );
}
