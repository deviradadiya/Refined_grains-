import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import MyOrder from "./MyOrder";

const Userprofile = () => {
  return (
      <>
        <div className="user-profile-page">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ProfileSidebar />
              </div>
              <div className="col-md-8">
                <MyOrder />
              </div>
            </div>
          </div>
        </div>
      </>

  );
};

export default Userprofile;
