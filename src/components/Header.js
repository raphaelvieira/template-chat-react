import React from "react";
import user from "../assets/user.png";
function Header() {
  return (
    <div className="header">
      <div className="text">Facebook</div>
      <div className="profile">
        <img src={user} width="30px" />
      </div>
    </div>
  );
}

export default Header;
