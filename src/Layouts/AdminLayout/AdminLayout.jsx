import React, { useState } from "react";
import Header from "../../Components/Admin/Header/Header";
import NavBar from "../../Components/Admin/NavBar/NavBar";
const AdminLayout = (props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  console.log(mobileNavOpen);
  return (
    <div>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        openMobile={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
      />
      {props.children}
    </div>
  );
};

export default AdminLayout;
