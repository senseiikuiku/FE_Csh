import React from "react";
import { Outlet } from "react-router-dom";
import categoryItem_1 from "@/assets/images/category/item-1.png";
import categoryItem_2 from "@/assets/images/category/item-2.png";
import categoryItem_3 from "@/assets/images/category/item-3.png";

export default function RenderBody() {
   return (
      <>
         <div>
            {/* browse books / devices */}
            <div className="home__container">
               <h2 className="home_heading">Browse Categories</h2>
               <div className="row row-cols-3 row-cols-md-1">
                  {/* Category Item 1 */}
                  <div className="col">
                     <article className="cate-item">
                        <img src={categoryItem_1} alt="" className="cate-item__thumb" />
                        <section className="cate-item__title">
                           $24 - $150
                        </section>
                        <p className="cate-item__desc">
                           New sumatra mandeling coffe blend
                        </p>
                     </article>
                  </div>
               </div>
            </div>
            <div>
               <Outlet />
            </div>
         </div>
      </>
   );
}
