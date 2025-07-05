import { App, Carousel } from "antd";

import { Menu } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../app";
import styles from "../assets/scss/sidebar.module.scss";
import SideBarJson from "../helpers/sidebar.json";
import { IContextProps } from "../interfaces/initial";

import SVGComponent from "../utilts/Svgs";

import SideBarHeader from "./SidebarHeader";

export default function SideBar() {
  const { message } = App.useApp();

  // const orgInfo = store.getState().orgInfo;
  const navigate = useNavigate();
  const menuClick = (path: string, e) => {
    path ? navigate(path) : e.preventDefault();
  };
  const locationCurr = useLocation();

  const hostName = location.hostname;
  const { SubMenu } = Menu;

  const [openKeys, setOpenKeys] = useState([]);

  const [defaultSelectedKeysLocal, setDefaultSelectedKeys] = useState(null);

  const checkRoute = (params: string) => {
    return locationCurr.pathname.includes(params);
  };

  useEffect(() => {
    let openKeysConst = [];
    let defaultSelectedKeysConst = [];

    SideBarJson.forEach((item) => {
      if (item?.link_to && defaultSelectedKeysConst.length == 0) {
        checkRoute(item?.link_to) ? (defaultSelectedKeysConst = [item.key]) : "";
      }
    });
    setDefaultSelectedKeys(defaultSelectedKeysConst);

    setOpenKeys(openKeysConst);
  }, []);

  const handleSubMenuClick = (key) => {
    setOpenKeys((prevOpenKeys) => {
      if (prevOpenKeys.includes(key)) {
        return [];
      } else {
        return [key];
      }
    });
  };

  const renderSubMenu = (item) => {
    if (item?.children?.length > 0) {
      return (
        <SubMenu
          key={item.key}
          title={item.name}
          icon={<SVGComponent src={item?.icon} />}
          onTitleClick={() => handleSubMenuClick(item.key)}
        >
          {item.children.map((child) => (
            <Menu.Item key={child.key}>
              <span className={styles.beta_container}>
                <Link
                  to={child.link_to}
                  onClick={(e) => menuClick(child.link_to, e)}
                  className={child?.new ? styles.beta_container_link : ""}
                >
                  {child.name}
                </Link>
              </span>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item
          key={item.key}
          title={item.name}
          icon={<SVGComponent src={item?.icon} />}
        >
          <Link to={item.link_to} onClick={(e) => menuClick(item.link_to, e)}>
            {item.name}
          </Link>
        </Menu.Item>
      );
    }
  };

  return (
    <div className={styles.sidebar_container_main}>
      <div className={styles.sidebar_container}>
        <SideBarHeader />
        <div className={styles.menu_items}>
          {defaultSelectedKeysLocal && (
            <Menu
              mode="inline"
              theme="dark"
              openKeys={openKeys}
              defaultSelectedKeys={defaultSelectedKeysLocal}
            >
              {SideBarJson.map((item) => renderSubMenu(item))}
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
}
