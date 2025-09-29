import React from "react";
import EChartsReact from "echarts-for-react";
import styles1 from "../../../../assets/scss/home.module.scss";

export const RevenueByCampaign = () => {
  const chartOptions = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%"
      
    },
    legend: {
      bottom: 0,
      left: "center",
      data: ["Campaign A", "Campaign B", "Campaign C"]
    },
    color: ["#1964FE", "#4CC9B0", "#F4C542"],
    series: [
      {
        name: "Revenue by Campaign",
        type: "pie",
        radius: ["55%", "75%"], // slightly larger, fills space
        avoidLabelOverlap: false,
        label: { show: false, position: "center" },
        emphasis: {
          label: { show: true, fontSize: 18, fontWeight: "bold" }
        },
        labelLine: { show: false },
        data: [
          { value: 187800, name: "Campaign A" },
          { value: 62600, name: "Campaign B" },
          { value: 62600, name: "Campaign C" }
        ]
      }
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: "40%",
        style: {
          text: "Revenue",
          textAlign: "center",
          fill: "#666",
          fontSize: 14
        }
      },
      {
        type: "text",
        left: "center",
        top: "55%",
        style: {
          text: "₹3,13,000",
          textAlign: "center",
          fill: "#000",
          fontSize: 20,
          fontWeight: "bold"
        }
      }
    ]
  };

  return (
    <div className={styles1.graphinfo_container} style={{ padding: "12px" }}>
      <div
        className={styles1.graphinfo_header}
      >
        <span>Revenue by Campaign</span>
      </div>
      <EChartsReact option={chartOptions} style={{ height: "320px" }} /> 
      {/* reduced height */}
    </div>
  );
};
