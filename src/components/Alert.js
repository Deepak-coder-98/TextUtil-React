import React, { memo } from "react";

const Alert = memo(function Alert({alert}) {
    if(alert == null){
        return null;
    }
    const {message, type} = alert;
  return (
      <div className={`alert alert-${type}`} role="alert">
        <strong>{message}</strong>
      </div>
  );
});

export default Alert;
