import React from "react";
import styles from "../../../../assets/scss/common.module.scss";
import styles1 from "../../../../assets/scss/home.module.scss";
import { Col, Flex } from "antd";
import { NavigationAndTitleWrapper } from "../../../../components/NavigationAndTitleWrapper";
import useAdsAnalytics from "../hooks/adsAnalytics";
import { GrpahInfo } from "../../../home/components/GrpahInfo";
import * as echarts from "echarts";
import { RevenueByCampaign } from "../components/RevenueByCampaign";
import { CampaignPerformance } from "../components/CampaignPerformance";

const OrderAnalytics: React.FC = () => {
  const { values, functions } = useAdsAnalytics();
  return (
    <div className={styles.common_main_layout}>
      <NavigationAndTitleWrapper
        title="Ads Analytics"
        showBackArrow
        redirectionPath="/sellerboard/home"
      />
      {/* <div className={styles1.grids}>
        {values.cardsArr.map((item, index) => (
          <BiggerCards item={item} key={index} />
        ))}
      </div> */}

      <Flex gap={24}>
        <Col style={{ width: "30%" }}>
          <div className={styles1.main_box} style={{ height: 392 }}>
            <RevenueByCampaign />
          </div>
        </Col>
        <Col style={{ width: "70%", flex: 1 }}>
          <div className={styles1.main_box}>
            <GrpahInfo
              title={"Timeline"}
              rangePresets={values.rangePresets}
              disabledDate={functions.disabledDate}
              startTimestamp={values.startTimestamp}
              endTimestamp={values.endTimestamp}
              dateRangeChange={functions.dateRangeChange}
              showSegmented={false}
              showSelection={true}
              selectionOptions={values.selectionOptions}
              selectedValue={values.selectedValue}
              setSelectedValue={functions.setSelectedValue}
              lineColor="#1463FF"
              areaStyle={{
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(25, 100, 254, 0.078)" },
                  { offset: 1, color: "rgba(255,255,255,0)" },
                ]),
              }}
            />
          </div>
        </Col>
      </Flex>
      {/* add code here */}
      <div className={styles1.main_box}>
        <CampaignPerformance />
      </div>
    </div>
  );
};

export default OrderAnalytics;
