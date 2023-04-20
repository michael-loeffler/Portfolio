import React from 'react';

const styles = {
  footer: {
      display: 'flex',
      justifyContent: 'flex-center',
    },
}

export default function Footer() {
  return (
    <footer>
      <h5 style={styles.footer}>Footer</h5>
    </footer>
  );
}
