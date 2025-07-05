import { NavigationAndTitleWrapper } from "../../../components/NavigationAndTitleWrapper";
import styles from "../../../assets/scss/common.module.scss";
import styles1 from "../../../assets/scss/home.module.scss";
import { Button } from "antd";
import SVGComponent from "../../../utilts/Svgs";
import { FtuxBlock } from "../../../components/FtuxBlock";
import amazonIcon from "../../../assets/images/amazon_icon.png";

export const Home = () => {
  return (
    <div>
      <div className={styles.common_top_layout}>
        <NavigationAndTitleWrapper
          title="Welcome back, Yash"
          description="Track, manage and forecast your customers and orders."
        />

        <div className={styles.common_btn_container}>
          <Button className={styles.common_btn}>
            <SVGComponent src="upload_cloud" color="#414651" />
            <span>Import</span>
          </Button>
          <Button type="primary" className={styles.common_btn_primary}>
            <SVGComponent src="plus" color="#ffffff" />
            <span>Add</span>
          </Button>
        </div>
      </div>

      <div className={styles1.home_add_billing_profile}>
        <div className={styles1.home_add_billing_profile_left}>
          <span className={styles1.home_add_billing_profile_title}>
            Add Billing Profile Details
          </span>
          <span className={styles1.home_add_billing_profile_desc}>
            Please complete or select a billing profile for your account. This
            is not impacting your advertising. If you have any questions please
            reach out to chat support.
          </span>
        </div>
        <Button className={styles.common_btn}>
          <SVGComponent src="bookmark" color="#414651" />
          <span>Add Details</span>
        </Button>
      </div>

      <div style={{ marginTop: 32 }}>
        <FtuxBlock
          icon={<img src={amazonIcon} />}
          title="Let’s get you started"
          desc="To begin, connect your Amazon account. We will fetch the details of your listings and help you optimize your keywords."
          btnRender={
            <Button type="primary" className={styles.common_btn_primary}>
              <SVGComponent src="plus" color="#ffffff" />
              <span>Connect Account</span>
            </Button>
          }
        />
      </div>
    </div>
  );
};
