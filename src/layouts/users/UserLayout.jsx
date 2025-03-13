import React from "react";
import HeaderUser from "./header";
import RenderBody from "./renderBody";
import Footer from "./footer";
import SlideShow from "./slideShow";

export default function UserLayout() {
   return (
      <>
         <HeaderUser />
         <div className="container">
            <SlideShow />
            <RenderBody />
         </div>
         <Footer />
      </>
   );
}
