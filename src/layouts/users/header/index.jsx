import React from "react";
import { NavLink } from "react-router-dom";
export default function HeaderUser() {
   return (
      <>
         <header className="header">
            <div className="container">
               {" "}
               <div className="top_bar">
                  {/* More tablet */}
                  <button className="top_bar__more">
                     <img
                        src="./src/assets/icons/more.svg"
                        alt="more"
                        className="top-bar__more-icon icon"
                     />
                  </button>

                  {/* Logo */}
                  <NavLink to={"/user"} className="logo">
                     <img
                        src="./src/assets/icons/logo.svg"
                        alt="Thư quán"
                        className="logo__img"
                     />
                     <h1 className="logo__title">Thư quán</h1>
                  </NavLink>

                  {/* Navbar */}
                  <nav className="navbar">
                     <ul className="navbar__list">
                        <li>
                           <NavLink className="navbar__link">Sách</NavLink>
                        </li>
                        <li>
                           <NavLink className="navbar__link">Thiết Bị</NavLink>
                        </li>
                        <li>
                           <NavLink className="navbar__link">
                              Lịch Sử Đặt
                           </NavLink>
                        </li>
                        <li>
                           <NavLink className="navbar__link">Liên Hệ</NavLink>
                        </li>
                     </ul>
                  </nav>

                  {/* Actions */}
                  <div className="top-act">
                     <div className="top-act__group top-act__group--single">
                        <button className="top-act__btn">
                           <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Tìm kiếm ..."
                              className="top-act__search-field "
                           />
                           <div className="top-act__separate"></div>
                           <img
                              src="./src/assets/icons/search.svg"
                              alt="Tìm kiếm"
                              className="top-act__icon icon"
                           />
                           <span className="top-act__title"></span>
                        </button>
                     </div>

                     <div className="top-act__group">
                        <button className="top-act__btn">
                           <img
                              src="./src/assets/icons/heart.svg"
                              alt="Tim"
                              className="top-act__icon icon"
                           />
                           <span className="top-act__title">03</span>
                        </button>

                        <div className="top-act__separate"></div>

                        <button className="top-act__btn">
                           <img
                              src="./src/assets/icons/order.svg"
                              alt="Đơn phiếu đặt"
                              className="top-act__icon icon"
                           />
                        </button>
                     </div>

                     <div className="top-act__user">
                        <img
                           src="./src/assets/images/avatar.jpg"
                           alt="Ảnh đại diện"
                           className="top-act__avatar"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
}
