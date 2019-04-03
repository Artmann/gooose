import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/sign-in">Sign In</Link>
    </div>
  );
}
