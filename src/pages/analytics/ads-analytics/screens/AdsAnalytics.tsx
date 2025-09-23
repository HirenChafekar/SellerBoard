import React from "react";
import styles from "../../../../assets/scss/common.module.scss";
import styles1 from "../../../../assets/scss/home.module.scss";
import { Flex } from "antd";
import { NavigationAndTitleWrapper } from "../../../../components/NavigationAndTitleWrapper";
import useAdsAnalytics from "../hooks/adsAnalytics";

const OrderAnalytics: React.FC = () => {
  const { values, functions } = useAdsAnalytics();
  return (
    <div className={styles.common_main_layout}>
      <NavigationAndTitleWrapper
        title="Ads Analytics"
        showBackArrow
        redirectionPath="/sellerboard/home"
      />

    </div>
  );
};

export default OrderAnalytics;
