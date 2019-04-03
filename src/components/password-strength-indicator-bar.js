import React from "react";

export default function PasswordStrengthIndicatorBar({ active, color }) {
  const style = active ? { background: color } : {};

  return <div className="password-strength-indicator__bar" style={style} />;
}
