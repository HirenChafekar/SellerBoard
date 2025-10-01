import React from "react";
import EChartsReact from "echarts-for-react";
import styles1 from "../../../../assets/scss/home.module.scss";

interface FunnelItem {
  value: number;
  name: string;
}

interface SalesFunnelProps {
  data: FunnelItem[];
}

export const SalesFunnel: React.FC<SalesFunnelProps> = ({ data }) => {
  const colors = ["#0047AB", "#0059D6", "#007BFF", "#339EFF", "#66B2FF"];

  const chartOptions = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}",
    },
    legend: {
      orient: "vertical",
      right: 10,
      top: "middle",
      itemGap: 20,
      data: data.map((d) => d.name),
      textStyle: { fontSize: 14, color: "#333" },
    },
    series: [
      {
        name: "Sales Funnel",
        type: "funnel",
        left: "0",
        width: "50%",
        sort: "descending",
        gap: 0,
        minSize: "15%",
        maxSize: "100%",
        label: {
          show: true,
          position: "inside",
          formatter: "{c}",
          color: "#fff",
          fontSize: 14,
        },
        labelLine: { show: false },
        itemStyle: {
          borderColor: "transparent",
          borderWidth: 0,
          color: (params: any) => colors[params.dataIndex % colors.length],
        },
        data: data.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
    ],
  };

  return (
    <div className={styles1.graphinfo_container} style={{ padding: "12px" }}>
      <div className={styles1.graphinfo_header}>
        <span>Sales Funnel</span>
      </div>
      <EChartsReact option={chartOptions} style={{ height: "320px" }} />
    </div>
  );
};
