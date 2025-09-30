import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import styles from "../../../../assets/scss/product-analytics.module.scss";

interface FunnelItem {
  value: number;
  name: string;
}

interface SalesFunnelProps {
  data: FunnelItem[];
}

const SalesFunnel: React.FC<SalesFunnelProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    const colors = ["#0047AB", "#0059D6", "#007BFF", "#339EFF", "#66B2FF"];

    const option = {
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
            borderColor: "#fff",
            borderWidth: 1,
            color: (params: any) => colors[params.dataIndex % colors.length],
          },
          data: data.map((item) => ({
            value: item.value,
            name: item.name,
          })),
        },
      ],
    };

    chart.setOption(option);
    return () => chart.dispose();
  }, [data]);

  return <div ref={chartRef} className={styles.sales_funnel_chart}></div>;
};

export default SalesFunnel;
