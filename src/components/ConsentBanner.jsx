import React from 'react';

function ConsentBanner({ onAccept, onDecline }) {
  return (
      <div style={styles.banner} className="flex justify-between items-end p-5 border-t border-ternary-light dark:border-ternary-dark">
        <p>We use cookies to analyze website traffic. Do you consent to our use of cookies for this purpose?</p>
        <button onClick={onAccept} style={styles.button} className='px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500'>Accept</button>
        <button onClick={onDecline} style={styles.button} className='px-4 py-2 text-primary-light  bg-gray-600 hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500'>Decline</button>
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
    margin: '0 10%',
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