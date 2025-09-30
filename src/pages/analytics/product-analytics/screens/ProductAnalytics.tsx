import React from "react";
import styles from "../../../../assets/scss/product-analytics.module.scss";
import styles1 from "../../../../assets/scss/home.module.scss";
import { NavigationAndTitleWrapper } from "../../../../components/NavigationAndTitleWrapper";

import useCampaignReviews from "../hooks/product-Analytics";
import useAdsAnalytics from "../../ads-analytics/hooks/adsAnalytics";

import { CampaignReviewsTable } from "../components/CampaignReviewsTable";
import SalesFunnel from "../components/SalesFunnel";
import { CalendarOutlined } from "@ant-design/icons";
import { Flex, Col } from "antd";
import { GrpahInfo } from "../../../home/components/GrpahInfo";
import * as echarts from "echarts";
import ProductCard from "../components/ProductCard";
import AnalyticsStat from "../components/AnalyticsStat";
import StatGroup from "../components/StatGroup";

const ProductAnalytics: React.FC = () => {
  const { values: funnelValues } = useCampaignReviews();
  const { product, stats } = funnelValues;
  const { values: adsValues, functions: adsFunctions } = useAdsAnalytics();

  return (
    <div className={styles.product_analytics_layout}>
      <NavigationAndTitleWrapper
        title="Product Analytics"
        showBackArrow
        redirectionPath="/sellerboard/home"
      />

      
      <div className={styles.product_analytics_header}>
        <ProductCard {...product} />
        <StatGroup>
          {stats.map((stat) => (
            <AnalyticsStat key={stat.label} {...stat} />
          ))}
        </StatGroup>
      </div>

      
      <Flex className={styles.analytics_charts_wrapper} gap={44}>
        {/* Left: Sales Funnel */}
        <Col style={{ width: "25%" }}>
          <div className={styles.sales_funnel_container}>
            <div className={styles.sales_funnel_header}>
              <h3 className={styles.sales_funnel_title}>Sales Funnel</h3>
              <div className={styles.sales_funnel_actions}>
                Last 30 days <CalendarOutlined />
              </div>
            </div>
            <SalesFunnel data={funnelValues.funnelData} />
          </div>
        </Col>

        
        <Col style={{ flex: 1, marginLeft: "20px" }}>
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

      <CampaignReviewsTable reviews={funnelValues.reviewsArr} />
    </div>
  );
};

export default ProductAnalytics;
