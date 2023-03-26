import React from "react";
import Button from "react-bootstrap/Button";
import "./ComplainDashboard.css";
const ComplainDashboard = () => {
  return (
    <div className="btn-grp">
      <Button href="/complain/developer" target="_blank" className="btn" variant="outline-primary">
        Game Developer
      </Button>
      <Button href="/complain/admin" target="_blank" className="btn" variant="primary">
        Admin
      </Button>
      <Button href="/complain/customer" target="_blank" className="btn" variant="outline-primary">
        Customer
      </Button>
    </div>
  );    
};

export default ComplainDashboard;
