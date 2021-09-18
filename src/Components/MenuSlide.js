import React from "react";
import MenuItems from "./MenuItems";

const MenuSlide= () => {
    return(
        <div class="btn-group dropleft">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropright
            </button>
            <div class="dropdown-menu" x-placement="right-start">
                <MenuItems />
                {/* <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a> */}
            </div>
        </div>
    )};

export default MenuSlide;