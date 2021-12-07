import "./blog.css";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const Sidebar = observer(() => {
  const { post } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About admin</span>
        <img
          src="https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/247320059_2470451986423118_1667056275135202114_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-LQ03Uu53OwAX_D6zEh&_nc_ht=scontent-dus1-1.xx&oh=643308ae0f2979379256e9e478cb52cf&oe=61B3B0DF"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {post.categories.map((category) => (
            <li
              className="sidebarListItem"
              onClick={() => post.setSelectedCategory(category)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
