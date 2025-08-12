import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import MyOrder from "./Order/MyOrder";
import AccountSetting from "./AccountSetting/AccountSetting";
import MyStuff from "./MyStuff/MyStuff";
import UserPayment from "./Payment/UserPayment";

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
                  <div className={'pt_74'}>
                      {/*<MyOrder />*/}
                      {/*<AccountSetting />*/}
                      <UserPayment />
                      {/*<MyStuff />*/}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </>

  );
};

export default Userprofile;
