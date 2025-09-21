import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import indiaMap from "../helpers/india.json"; // You need to add a topojson/geojson for India here


// List of all states in the GeoJSON
const allStates = [
  "Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const dummyData = [
  { name: "Maharashtra", value: 120 },
  { name: "Karnataka", value: 80 },
  { name: "Gujarat", value: 60 },
  { name: "Tamil Nadu", value: 90 },
  { name: "West Bengal", value: 70 },
  { name: "Uttar Pradesh", value: 110 },
  { name: "Rajasthan", value: 50 },
  { name: "Kerala", value: 40 },
  { name: "Punjab", value: 30 },
  { name: "Delhi", value: 100 },
  { name: "Jammu and Kashmir", value: 55 },
  { name: "Assam", value: 45 },
  { name: "Bihar", value: 65 },
  { name: "Haryana", value: 35 },
  { name: "Goa", value: 20 },
  { name: "Chhattisgarh", value: 25 },
  { name: "Odisha", value: 38 },
  { name: "Jharkhand", value: 28 },
  { name: "Madhya Pradesh", value: 75 },
  { name: "Andhra Pradesh", value: 85 },
  { name: "Tripura", value: 15 },
  { name: "Manipur", value: 10 },
  { name: "Nagaland", value: 8 },
  { name: "Sikkim", value: 5 },
  { name: "Meghalaya", value: 12 },
  { name: "Arunachal Pradesh", value: 7 },
  { name: "Mizoram", value: 6 },
  { name: "Uttarakhand", value: 18 },
  { name: "Himachal Pradesh", value: 22 },
  { name: "Andaman and Nicobar", value: 3 },
  { name: "Lakshadweep", value: 2 },
];

// Merge: all states get value 0, then override with dummyData
const baseData = allStates.map(name => ({ name, value: 0 }));
const mergedData = baseData.map(state => {
  const found = dummyData.find(d => d.name === state.name);
  return found ? found : state;
});

const GeographicalDistribution: React.FC<{ title?: string }> = ({ title }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    // @ts-ignore
    echarts.registerMap("india", indiaMap);
    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: "item",
        confine: true,
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        min: 0,
        max: 120,
        left: "right",
        inRange: {
          color: ["#E8EFFF", "#3E2C7F"],
        },
        text: ["High", "Low"],
        calculable: true,
        show: false,
      },
      series: [
        {
          name: "Orders",
          type: "map",
          roam: false,
          map: "india",
          zoom: 1.1,
          itemStyle: {
            areaColor: "#E8EFFF",
            borderColor: "white",
          },
          emphasis: {
            label: { show: true },
            itemStyle: {
              areaColor: "#3E2C7F",
              borderColor: "#fff",
              borderWidth: 1,
            },
          },
          label: {
            show: true,
            color: "#3E2C7F",
            fontSize: 12,
          },
          data: mergedData,
        },
      ],
    };
    chart.setOption(option);
    return () => { chart.dispose(); };
  }, []);

  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: 24 }}>
      {title && <div style={{ fontWeight: 600, fontSize: 24, marginBottom: 12 }}>{title}</div>}
      <div ref={chartRef} style={{ width: "100%", height: 600, maxWidth: 700 }} />
    </div>
  );
};

export default GeographicalDistribution;
