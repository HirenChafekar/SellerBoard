import React from "react";
import styles from "../../../../assets/scss/common.module.scss";
import styles1 from "../../../../assets/scss/home.module.scss";
import useOrderAnalytics from "../hooks/orderAnalytics";
import { NavigationAndTitleWrapper } from "../../../../components/NavigationAndTitleWrapper";
import { CardWithGraph } from "../../../home/components/CardWithGraph";
import { GrpahInfo } from "../../../home/components/GrpahInfo";
import { TopPerformingProducts } from "../../../home/components/TopPerformingProducts";
import { Flex } from "antd";
import HeatMap from "../../../../components/HeatMap";
import GeographicalDistribution from "../../../../components/GeographicalDistribution";

const OrderAnalytics: React.FC = () => {
  const { values, functions } = useOrderAnalytics();
  return (
    <div className={styles.common_main_layout}>
      <NavigationAndTitleWrapper
        title="Order Analytics"
        showBackArrow
        redirectionPath="/sellerboard/home"
      />

      <div className={styles1.grids}>
        {values.cardsArr.map((item, index) => (
          <CardWithGraph item={item} index={index} />
        ))}
      </div>

      <div className={styles1.main_box}>
        <GrpahInfo
          title={"Order Breakdown"}
          segmentOptions={values.segmentOptions}
          segmentValue={values.segmentValue}
          segmentChange={functions.segmentChange}
          rangePresets={values.rangePresets}
          disabledDate={functions.disabledDate}
          startTimestamp={values.startTimestamp}
          endTimestamp={values.endTimestamp}
          dateRangeChange={functions.dateRangeChange}
        />
      </div>

      <div className={styles1.main_box}>
        <TopPerformingProducts />
      </div>

      <Flex gap={24} style={{ width: "100%" }}>
        <div className={styles1.main_box} style={{ width: "100%" }}>
          <GeographicalDistribution title="Geographical Distribution" />
        </div>
        <div className={styles1.main_box} style={{ width: "100%" }}>
          <HeatMap title={"Hourly Order Distribution"} />
        </div>
      </Flex>
    </div>
  );
};

export default OrderAnalytics;
