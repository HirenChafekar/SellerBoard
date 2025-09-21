
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const hours = [
  "12am", "2am", "4am", "6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"
];
const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

// Generate dummy data: [x, y, value] where x=day, y=hour
const data = [];
for (let hour = 0; hour < hours.length; hour++) {
  for (let day = 0; day < days.length; day++) {
    // Random value for demo, you can adjust for more realistic heat
    data.push([day, hour, Math.floor(Math.random() * 10 + (day === 4 ? 10 : 0))]);
  }
}

const HeatMap: React.FC<{ title?: string }> = ({ title }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: { position: "top" },
      grid: {
        height: "430px",
        width: "98%",
        top: 0,
        left: "1%",
        right: "1%",
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: days,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          fontWeight: 500,
          fontSize: 14,
          color: '#222',
        },
      },
      yAxis: {
        type: "category",
        data: hours,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          fontWeight: 500,
          fontSize: 14,
          color: '#222',
        },
      },
      visualMap: {
        min: 0,
        max: 20,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "15%",
        show: false,
        inRange: {
          color: [
            "#E8EFFF",
            "#C7DAFF",
            "#9ABCFF",
            "#6B9DFF",
            "#3E7FFF",
            "#1463FF",
            "#1154D9",
            "#0E46B5",
            "#0B3891",
            "#092D73",
          ],
        },
      },
      series: [
        {
          name: "",
          type: "heatmap",
          data: data,
          label: { show: false },
          itemStyle: {
            borderRadius: 2,
            borderColor: "#fff",
            borderWidth: 2,
          },
          emphasis: {
            itemStyle: {
              borderWidth: 0,
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    chart.setOption(option);
    return () => { chart.dispose(); };
  }, []);

  return (
    <div style={{ padding: "0px", background: "#fff", borderRadius: 12 }}>
      {title && <div style={{ fontWeight: 600, fontSize: 24, marginBottom: 12, padding: '16px 0 0 24px' }}>{title}</div>}
      <div ref={chartRef} style={{ width: "100%", height: 450 }} />
    </div>
  );
};

export default HeatMap;
