import { Button } from "antd";
import styles from "../../../assets/scss/common.module.scss";
import { NavigationAndTitleWrapper } from "../../../components/NavigationAndTitleWrapper";
import SVGComponent from "../../../utilts/Svgs";
import { FtuxBlock } from "../../../components/FtuxBlock";
import amazonIcon from "../../../assets/images/amazon_icon.png";

export const Watchlist = () => {
  return (
    <div className={styles.common_main_layout}>
      <div className={styles.common_top_layout}>
        <NavigationAndTitleWrapper
          title="Watchlist"
          description="Track, manage and forecast your customers and orders."
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >
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
