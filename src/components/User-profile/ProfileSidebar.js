import React from "react";
import thomas from "../../assets/images/Thomas.png";
import logout from "../../assets/svg/logout-btn.svg";
import {NavLink} from "react-router-dom";

const ProfileSidebar = () => {

  const AccountSetting = [
    { name: "profile Information", path: "/account-setting" },
    { name: "manage Address", path: "/account-setting?tab=manage-address" },
  ];

  const MyStuff = [
    { name: "my Reviews", path: "my-stuff" },
    { name: "my Favourite", path: "my-stuff?tab=favourites" },
  ];


  return (
      <>
        <aside className="profile-sidebar">
          <div className="profile-details d-flex align-items-center mb_58">
            <div className="img-wrapper mr_20">
              <img src={thomas} alt="Avatar" className="img-fluid" width={50} />
            </div>
            <div>
              <p className="fw_400 fs_16 lh-1 text-color">
                Hello,
                <br/>
                Thomas W. Holmes
              </p>
            </div>
          </div>

          <ul className={'ps-0 m-0 sidebar-nav'}>
            <li>
              <NavLink className="nav-link" to={"/my-order"}>
                <svg width="26" height="26" viewBox="0 0 26 26" stroke="#2C2C2C" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <rect x="0.5" y="0.5" width="25" height="25" />
                    <path d="M11.7035 4.74967L5.66629 10.7868C5.40974 11.0432 5.23501 11.3699 5.16419 11.7256C5.09338 12.0814 5.12966 12.4501 5.26845 12.7852L5.33079 12.9181C5.48452 13.2185 5.71821 13.4707 6.00611 13.6469C6.29401 13.823 6.62495 13.9163 6.96245 13.9163H9.33295V20.333C9.33295 20.8192 9.52611 21.2855 9.86992 21.6294C10.2137 21.9732 10.6801 22.1663 11.1663 22.1663H14.833L14.9705 22.1617C15.4317 22.1271 15.8627 21.9193 16.1772 21.5802C16.4917 21.241 16.6664 20.7955 16.6663 20.333L16.6654 13.9163H19.0368C19.3993 13.9163 19.7537 13.8087 20.0551 13.6072C20.3565 13.4058 20.5915 13.1195 20.7302 12.7845C20.8689 12.4496 20.9052 12.081 20.8345 11.7254C20.7638 11.3699 20.5893 11.0432 20.333 10.7868L14.2958 4.74967C13.952 4.40597 13.4858 4.21289 12.9996 4.21289C12.5135 4.21289 12.0473 4.40597 11.7035 4.74967Z" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                My orders
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to={'/account-setting'}>
                <svg width="28" height="28" viewBox="0 0 28 28" stroke="#2C2C2C" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 14.125C1 15.8486 1.33949 17.5553 1.99908 19.1477C2.65867 20.7401 3.62545 22.187 4.84422 23.4058C6.06299 24.6245 7.50988 25.5913 9.10228 26.2509C10.6947 26.9105 12.4014 27.25 14.125 27.25C15.8486 27.25 17.5553 26.9105 19.1477 26.2509C20.7401 25.5913 22.187 24.6245 23.4058 23.4058C24.6245 22.187 25.5913 20.7401 26.2509 19.1477C26.9105 17.5553 27.25 15.8486 27.25 14.125C27.25 12.4014 26.9105 10.6947 26.2509 9.10228C25.5913 7.50988 24.6245 6.06299 23.4058 4.84422C22.187 3.62545 20.7401 2.65867 19.1477 1.99908C17.5553 1.33949 15.8486 1 14.125 1C12.4014 1 10.6947 1.33949 9.10228 1.99908C7.50988 2.65867 6.06299 3.62545 4.84422 4.84422C3.62545 6.06299 2.65867 7.50988 1.99908 9.10228C1.33949 10.6947 1 12.4014 1 14.125Z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.75 11.208C9.75 12.3683 10.2109 13.4811 11.0314 14.3016C11.8519 15.1221 12.9647 15.583 14.125 15.583C15.2853 15.583 16.3981 15.1221 17.2186 14.3016C18.0391 13.4811 18.5 12.3683 18.5 11.208C18.5 10.0477 18.0391 8.93489 17.2186 8.11442C16.3981 7.29394 15.2853 6.83301 14.125 6.83301C12.9647 6.83301 11.8519 7.29394 11.0314 8.11442C10.2109 8.93489 9.75 10.0477 9.75 11.208Z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.62012 24.1128C5.98107 22.9115 6.71965 21.8585 7.72631 21.1101C8.73297 20.3616 9.95406 19.9576 11.2085 19.958H17.0418C18.2978 19.9576 19.5204 20.3625 20.5278 21.1127C21.5351 21.8628 22.2735 22.9181 22.633 24.1215" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                account settings
              </NavLink>

              <ul className={"sub-menu"}>
                {AccountSetting.map((item, idx) => (
                    <NavLink key={idx} to={item.path} className="nav-link">
                      {item.name}
                    </NavLink>
                ))}
              </ul>
            </li>

            <li>
              <NavLink className="nav-link" to={'/payment'}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="#2C2C2C" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9583 6.83333V2.45833C19.9583 2.07156 19.8047 1.70063 19.5312 1.42714C19.2577 1.15365 18.8868 1 18.5 1H3.91667C3.14312 1 2.40125 1.30729 1.85427 1.85427C1.30729 2.40125 1 3.14312 1 3.91667M1 3.91667C1 4.69021 1.30729 5.43208 1.85427 5.97906C2.40125 6.52604 3.14312 6.83333 3.91667 6.83333H21.4167C21.8034 6.83333 22.1744 6.98698 22.4479 7.26047C22.7214 7.53396 22.875 7.90489 22.875 8.29167V12.6667M1 3.91667V21.4167C1 22.1902 1.30729 22.9321 1.85427 23.4791C2.40125 24.026 3.14312 24.3333 3.91667 24.3333H21.4167C21.8034 24.3333 22.1744 24.1797 22.4479 23.9062C22.7214 23.6327 22.875 23.2618 22.875 22.875V18.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.334 12.667V18.5003H18.5007C17.7271 18.5003 16.9852 18.193 16.4383 17.6461C15.8913 17.0991 15.584 16.3572 15.584 15.5837C15.584 14.8101 15.8913 14.0682 16.4383 13.5213C16.9852 12.9743 17.7271 12.667 18.5007 12.667H24.334Z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                PAYMENTS
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to={'/my-stuff'}>
                <svg width="28" height="23" viewBox="0 0 28 23" stroke="#2C2C2C" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 22.0504C2.99525 20.8984 5.25858 20.292 7.5625 20.292C9.86642 20.292 12.1297 20.8984 14.125 22.0504C16.1203 20.8984 18.3836 20.292 20.6875 20.292C22.9914 20.292 25.2547 20.8984 27.25 22.0504" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 3.09142C2.99525 1.93947 5.25858 1.33301 7.5625 1.33301C9.86642 1.33301 12.1297 1.93947 14.125 3.09142C16.1203 1.93947 18.3836 1.33301 20.6875 1.33301C22.9914 1.33301 25.2547 1.93947 27.25 3.09142" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.8975 7.86488C18.8975 8.49778 19.1489 9.10476 19.5964 9.55229C20.0439 9.99982 20.6509 10.2512 21.2838 10.2512C21.9167 10.2512 22.5237 9.99982 22.9712 9.55229C23.4188 9.10476 23.6702 8.49778 23.6702 7.86488C23.6702 7.23198 23.4188 6.625 22.9712 6.17747C22.5237 5.72994 21.9167 5.47852 21.2838 5.47852C20.6509 5.47852 20.0439 5.72994 19.5964 6.17747C19.1489 6.625 18.8975 7.23198 18.8975 7.86488Z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.3066 20.5922V15.2892C17.3066 14.586 17.586 13.9116 18.0833 13.4143C18.5805 12.9171 19.2549 12.6377 19.9582 12.6377H22.6097C23.3129 12.6377 23.9873 12.9171 24.4846 13.4143C24.9818 13.9116 25.2612 14.586 25.2612 15.2892V20.5922" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 3.0918V22.0501"  stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.125 3.0918V22.0501" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27.25 3.0918V22.0501" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                MY STUFF
              </NavLink>

              <ul className={"sub-menu"}>
                {MyStuff.map((item, idx) => (
                    <NavLink key={idx} to={item.path} className="nav-link">
                      {item.name}
                    </NavLink>
                ))}
              </ul>
            </li>
          </ul>

          <div className="logout-btn mt-auto pt-5">
            <img src={logout} alt="My Orders"/>
            <a href="#" className="pl_28 fs_18 fw_700 fw-bold">
              LOGOUT
            </a>
          </div>
        </aside>
      </>

  );
};

export default ProfileSidebar;
