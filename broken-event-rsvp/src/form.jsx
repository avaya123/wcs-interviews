import { useState } from 'react';
import './styles.css';

export default function Form() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  let email = '';
  let dietary = '';

  const submitForm = event => {
    event.preventDefault();
    setSubmitted(true);
  };

  const unsubmitForm = () => {
    setSubmitted(false);
    setName("");
  };

  return (
    <>
      {!submitted ? (
        <form className='rsvp-form' onSubmit={submitForm}>
          <input
            className='rsvp-input'
            value={name}
            type='text'
            placeholder='Full Name'
            onChange={e => setName(e.target.value)}
          />
          <input
            className='rsvp-input'
            value={email}
            type='email'
            placeholder='Email'
            onChange={undefined}
          />
          <input
            className='rsvp-input'
            value={dietary}
            type='text'
            placeholder='Dietary Restrictions (optional)'
            onChange={undefined}
          />
          <input className='rsvp-submit-btnn' type='submit' value='RSVP' />
        </form>
      ) : (
        <div>
          <p> Thank you for your RSVP, {name}! </p>
          <button onClick={unsubmitForm}>Cancel RSVP</button>
        </div>
      )}
    </>
  );
}
