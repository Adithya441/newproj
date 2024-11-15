import React from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const encryptData = (data) => {
    const encrypted = CryptoJS.AES.encrypt(data, 'secret-key').toString(); // Encrypt the data
    return encodeURIComponent(encrypted); // Encode the encrypted data to make it URL-safe
  };

const MeterLinkRenderer = (props) => {
  const encryptedMeterno = encryptData(props.value); // Encrypt the meterno

  return (
    <Link to={`/detail/${encryptedMeterno}`} style={{ color: 'blue' }}>
      {props.value}
    </Link>
  );
};

export default MeterLinkRenderer;
