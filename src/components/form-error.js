import React from 'react';

export default function FormError({ message }) {
  if (!message) {
    return null;
  }

  return <div className="form-error">{message}</div>;
}
