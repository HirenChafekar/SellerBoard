import styles from "@/assets/scss/sidebar.module.scss";
import { App, Avatar, Button, Menu, Popover, Tooltip } from "antd";
import SideBarJson from "@/helpers/sidebar.json";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SVGComponent from "@/utils/Svgs";
import { CustomUser, useV1TokenLogoutCreateHook, useV1UsersMeRetrieveHook } from "@/api/astrat";

// Define TypeScript interface for Sidebar items
interface SidebarItem {
  key: string;
  name: string;
  icon?: string;
  children: SidebarItem[];
  roles: string[];
  inst: string[];
  link_to?: string;
  hidden: boolean;
}

// Sidebar Component
export default function SideBar() {
  const [defaultSelectedKeysLocal, setDefaultSelectedKeys] = useState<
    string[] | null
  >(null);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<CustomUser | null>(null);

  const navigate = useNavigate();
  const locationCurr = useLocation();
  const logout = useV1TokenLogoutCreateHook();
  const userInfo = useV1UsersMeRetrieveHook();
  const { message } = App.useApp();

  // Function to check if the current route matches a sidebar item link
  const checkRoute = (params: string): boolean => {
    return locationCurr.pathname.includes(params);
  };

  // Function to handle menu item click
  const menuClick = (
    path: string | undefined,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (path) {
      navigate(path);
    } else {
      e.preventDefault();
    }
  };

  const handleLogOut = async () => {
    setLoading(true);
    try {
      await logout();
      message.destroy();
      message.success("Logged out successfully!");
      navigate("/login");
      localStorage.removeItem("accessToken");
    } catch (error) {
      message.error("Logout failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await userInfo();
      setUser(response)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let openKeysConst: string[] = [];
    let defaultSelectedKeysConst: string[] = [];

    // Iterate through the Sidebar JSON data
    (SideBarJson as SidebarItem[]).forEach((item) => {
      if (item.children.length > 0) {
        item.children.forEach((child) => {
          if (child.link_to && checkRoute(child.link_to)) {
            defaultSelectedKeysConst = [child.key];
            openKeysConst = [item.key];
          }
        });
      }

      if (item.link_to && defaultSelectedKeysConst.length === 0) {
        if (checkRoute(item.link_to)) {
          defaultSelectedKeysConst = [item.key];
        }
      }
    });

    setDefaultSelectedKeys(defaultSelectedKeysConst);
    setOpenKeys(openKeysConst);
  }, [locationCurr.pathname]);

  // Function to handle submenu click
  const handleSubMenuClick = (key: string) => {
    setOpenKeys((prevOpenKeys) => (prevOpenKeys.includes(key) ? [] : [key]));
  };

  useEffect(() => {
    if (loading) {
      message.loading("Logging out...");
    }
  }, [loading]);

  useEffect(() => {
    getUserInfo();
  },[])

  // Function to render submenu
  const renderSubMenu = (item: SidebarItem) => {
    if (!item.hidden) {
      if (item.children.length > 0) {
        return (
          <Menu.SubMenu
            key={item.key}
            title={item.name}
            icon={item.icon ? <SVGComponent src={item.icon} /> : null}
            onTitleClick={() => handleSubMenuClick(item.key)}
          >
            {item.children.map(
              (child) =>
                !child.hidden && (
                  <Menu.Item key={child.key}>
                    <Link
                      to={child.link_to || "#"}
                      onClick={(e) => menuClick(child.link_to, e)}
                    >
                      {child.name}
                    </Link>
                  </Menu.Item>
                )
            )}
          </Menu.SubMenu>
        );
      } else if (item.link_to) {
        return (
          <Menu.Item
            key={item.key}
            icon={item.icon ? <SVGComponent src={item.icon} /> : null}
          >
            <Link to={item.link_to} onClick={(e) => menuClick(item.link_to, e)}>
              {item.name}
            </Link>
          </Menu.Item>
        );
      }
    }
    return null;
  };

  return (
    <div className={styles.sidebar_container_main}>
      <div className={styles.sidebar_container}>
        <div
          className={styles.menu_items}
          style={{ height: "calc(100vh - 142px)" }}
        >
          {defaultSelectedKeysLocal && (
            <Menu
              mode="inline"
              theme="dark"
              openKeys={openKeys}
              selectedKeys={defaultSelectedKeysLocal}
              onOpenChange={(keys) => setOpenKeys(keys as string[])}
            >
              {(SideBarJson as SidebarItem[]).map((item) =>
                renderSubMenu(item)
              )}
            </Menu>
          )}
        </div>

        <div className={styles.sidebar_user_details}>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "8px" }}
          >
            <Avatar> {user?.name?.charAt(0)}</Avatar>

            <div className={styles.user_name_section}>
              <Tooltip title={user?.name} placement="topLeft">
                <span className={styles.user_name}>{user?.name}</span>
              </Tooltip>
              <Tooltip title={user?.role}>
                <span className={styles.user_role}>{user?.role}</span>
              </Tooltip>
            </div>
          </div>
          <div>
            <Popover
              content={
                <div className={styles.sidebar_footer}>
                  <Button
                    type="text"
                    size="small"
                    danger
                    onClick={handleLogOut}
                  >
                    Logout
                  </Button>
                </div>
              }
              style={{ cursor: "pointer" }}
            >
              <div>
                <SVGComponent src="three_dots_menu_icon" />
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
