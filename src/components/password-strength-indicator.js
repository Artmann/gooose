import PasswordStrengthIndicatorBar from "./password-strength-indicator-bar";
import React from "react";
import zxcvbn from "zxcvbn";

const passwordStrength = password => {
  const { score } = zxcvbn(password);

  if (score === 2) {
    return 1;
  }

  if (score > 2) {
    return 2;
  }

  return 0;
};

export default function PasswordStrengthIndicator({ password }) {
  const strength = passwordStrength(password);
  const messages = ["Too Weak", "Could be stronger", "Strong password"];
  const message = messages[strength];

  return (
    <div className="password-strength-indicator">
      <div className="password-strength-indicator__bars">
        <PasswordStrengthIndicatorBar active={true} color="#944b4b" />
        <PasswordStrengthIndicatorBar active={strength >= 1} color="#9c9c5a" />
        <PasswordStrengthIndicatorBar active={strength >= 2} color="#60a56a" />
      </div>
      <div className="password-strength-indicator__message">{message}</div>
    </div>
  );
}
