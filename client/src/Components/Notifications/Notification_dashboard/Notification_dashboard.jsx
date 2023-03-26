import React from "react";
import Button from "react-bootstrap/Button";
import "./Notification_dashboard.css";
const Notification_dashboard = () => {
  return (
    <div className="btn-grp">
      <Button href="/notifications/developer" target="_blank" className="btn" variant="outline-primary">
        Game Developer
      </Button>
      <Button href="/notifications/admin" target="_blank" className="btn" variant="primary">
        Admin
      </Button>
      <Button href="/notifications/customer" target="_blank" className="btn" variant="outline-primary">
        Customer
      </Button>
    </div>
  );    
};

export default Notification_dashboard;
