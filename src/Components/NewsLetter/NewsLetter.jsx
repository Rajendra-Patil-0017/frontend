import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [showPopup, setShowPopup] = useState(false);

  const validateEmail = (email) => {
    return email.includes('@') && email.endsWith('.com');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (!validateEmail(email)) {
      setShowPopup(true);
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading': return 'SUBSCRIBING...';
      case 'success': return 'SUBSCRIBED!';
      case 'error': return 'TRY AGAIN';
      default: return 'SUBSCRIBE';
    }
  };

  const getButtonClass = () => {
    let baseClass = 'newsletter-button';
    if (status === 'loading') baseClass += ' loading';
    if (status === 'success') baseClass += ' success';
    if (status === 'error') baseClass += ' error';
    return baseClass;
  };

  return (
    <>
      <div className='newsletter'>
        <h1 className="newsletter-title">GET EXCLUSIVE OFFERS ON YOUR E-MAIL</h1>
        <p className="newsletter-subtext">Subscribe to our newsletter for latest updates</p>
        <div className='newsletter-form'>
          <input
            className="newsletter-input"
            type="email"
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            required
          />
          <button
            className={getButtonClass()}
            onClick={handleSubmit}
            disabled={!email.trim() || status === 'loading'}
          >
            <span>{getButtonText()}</span>
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <p>enter valid email</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default NewsLetter;
