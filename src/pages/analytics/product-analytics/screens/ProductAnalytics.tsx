import React from "react";
import styles from "../../../../assets/scss/common.module.scss";
import styles1 from "../../../../assets/scss/home.module.scss";
import styles2 from "../../../../assets/scss/main_content.module.scss";
import styles3 from "../../../../assets/scss/product-analytics.module.scss";
import { NavigationAndTitleWrapper } from "../../../../components/NavigationAndTitleWrapper";
import useCampaignReviews from "../hooks/product-Analytics";
import useAdsAnalytics from "../../ads-analytics/hooks/adsAnalytics";
import { CampaignReviewsTable } from "../components/CampaignReviewsTable";
import { CalendarOutlined } from "@ant-design/icons";
import { Flex, Col } from "antd";
import { GrpahInfo } from "../../../home/components/GrpahInfo";
import * as echarts from "echarts";
import ProductCard from "../components/ProductCard";
import AnalyticsStat from "../components/AnalyticsStat";
import StatGroup from "../components/StatGroup";
import { BiggerCards } from "../../../../components/BiggerCards";
import { RevenueByCampaign } from "../../ads-analytics/components/RevenueByCampaign";
import { SalesFunnel } from "../components/SalesFunnel";
import GeographicalDistribution from "../../../../components/GeographicalDistribution";
import HeatMap from "../../../../components/HeatMap";

const ProductAnalytics: React.FC = () => {
  const { values: funnelValues } = useCampaignReviews();
  const { product, stats } = funnelValues;
  const { values: adsValues, functions: adsFunctions } = useAdsAnalytics();

  return (
    <div className={styles.common_main_layout}>
      <NavigationAndTitleWrapper
        title="Product Analytics"
        showBackArrow
        redirectionPath="/sellerboard/home"
      />

      <Flex gap={10} style={{ marginTop: 24 }}>
        <Col style={{ width: "50%" }}>
          <ProductCard {...product} />
        </Col>
        <Col style={{ width: "50%" }}>
          <div
            className={styles2.grids}
            style={{
              background: "white",
              padding: 16,
              flexWrap: "wrap",
              borderRadius: 10,
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            }}
          >
            {adsValues.prouctCardsArr.map((item, index) => (
              <BiggerCards item={item} key={index} />
            ))}
          </div>
        </Col>
      </Flex>

      <Flex gap={24}>
        <Col style={{ width: "35%" }}>
          <div className={styles1.main_box} style={{ height: 392 }}>
            <SalesFunnel data={funnelValues.funnelData} />
          </div>
        </Col>
        <Col style={{ width: "65%", flex: 1 }}>
          <div className={styles1.main_box}>
            <GrpahInfo
              title={"Timeline"}
              rangePresets={adsValues.rangePresets}
              disabledDate={adsFunctions.disabledDate}
              startTimestamp={adsValues.startTimestamp}
              endTimestamp={adsValues.endTimestamp}
              dateRangeChange={adsFunctions.dateRangeChange}
              showSegmented={false}
              showSelection={true}
              selectionOptions={adsValues.selectionOptions}
              selectedValue={adsValues.selectedValue}
              setSelectedValue={adsFunctions.setSelectedValue}
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

      <Flex gap={24} style={{ width: "100%" }}>
        <div className={styles1.main_box} style={{ width: "100%" }}>
          <GeographicalDistribution title="Geographical Distribution" />
        </div>
        <div className={styles1.main_box} style={{ width: "100%" }}>
          <HeatMap title={"Hourly Order Distribution"} />
        </div>
      </Flex>

      <CampaignReviewsTable reviews={funnelValues.reviewsArr} />
    </div>
  );
};

export default ProductAnalytics;
