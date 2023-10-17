import React from 'react';

function ConsentBanner({ onAccept, onDecline }) {
  return (
    <div style={styles.banner}>
      <p>We use cookies to analyze website traffic. Do you consent to our use of cookies for this purpose?</p>
      <button onClick={onAccept} style={styles.button}>Accept</button>
      <button onClick={onDecline} style={styles.button}>Decline</button>
    </div>
  );
}
//TODO: update styles to match site
const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    color: '#fff',
    padding: '1em',
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center',
  },
  button: {
    margin: '0 1em',
    padding: '0.5em 1em',
    cursor: 'pointer',
  }
};

export default ConsentBanner;