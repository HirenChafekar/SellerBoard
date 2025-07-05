import { Select } from "antd";
import logoImage from "../assets/images/logo.png";
import styles from "../assets/scss/sidebar.module.scss";
import SVGComponent from "../utilts/Svgs";

export default function SideBarHeader() {
  return (
    <div>
      <div className={styles.client_logo_container}>
        <img src={logoImage} className={styles.client_logo} />
        <span className={styles.client_name}>SellerBoard</span>
      </div>

      <div>
        <Select
          prefix={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SVGComponent src="select_prefix" />
            </div>
          }
          suffixIcon={<SVGComponent src="up_down_arrows" color="#717680" />}
          defaultValue={"account1"}
          options={[
            { value: "account1", label: "Account 1" },
            { value: "account2", label: "Account 2" },
            { value: "account3", label: "Account 3", disabled: true },
          ]}
          className={styles.sidebar_header_select}
          labelRender={(option) => (
            <span className={styles.sidebar_header_select_label}>
              {option.label}
            </span>
          )}
        />
      </div>
    </div>
  );
}
