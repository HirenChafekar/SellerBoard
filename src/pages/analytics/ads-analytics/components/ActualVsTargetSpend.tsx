import { DatePicker } from "antd";
import styles1 from "../../../../assets/scss/home.module.scss";
import { DATE_FORMAT } from "../../../../utilts/constant";
import dayjs from "dayjs";
import { getDateFromDateString } from "../../../../utilts/timeUtils";
import EChartsReact from "echarts-for-react";

// 📊 Example dummy data — replace with your API or props later
const chartData = {
  dates: [
    "1 July", "2 July", "3 July", "4 July", "5 July", "6 July", "7 July", "8 July", "9 July"
  ],
  actual: [720, 500, 670, 790, 960, 400, 0, 420, 580],
  target: [570, 890, 550, 450, 650, 520, 580, 690, 460]
};

export const ActualVsTargetSpend = ({
  title,
  rangePresets,
  dateRangeChange,
  disabledDate,
  startTimestamp,
  endTimestamp
}) => {
  const { RangePicker } = DatePicker;

  // ⚡ Chart options
  const chartOptions = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    legend: {
      data: ["Actual Spend", "Target Spend"],
      bottom: 0
    },
    grid: {
      left: "3%",
      right: "3%",
      bottom: "12%",
      top: "8%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: chartData.dates,
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "#ccc" } },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (val) => (val >= 1000 ? `${val / 1000}k` : val),
      },
      splitLine: {
        lineStyle: { color: "#f0f0f0" },
      },
    },
    series: [
      {
        name: "Actual Spend",
        type: "bar",
        data: chartData.actual,
        itemStyle: { color: "#1976d2" }, // blue
        barGap: 0,
        emphasis: { focus: "series" }
      },
      {
        name: "Target Spend",
        type: "bar",
        data: chartData.target,
        itemStyle: { color: "#00c48c" }, // green
        emphasis: { focus: "series" }
      }
    ]
  };

  return (
    <div className={styles1.graphinfo_container}>
      <div className={styles1.graphinfo_header}>
        <span>{title}</span>
        <div>
          <RangePicker
            presets={rangePresets}
            onChange={dateRangeChange}
            allowClear={false}
            format={DATE_FORMAT}
            disabledDate={disabledDate}
            value={[
              dayjs(getDateFromDateString(startTimestamp), DATE_FORMAT),
              dayjs(getDateFromDateString(endTimestamp), DATE_FORMAT),
            ]}
          />
        </div>
      </div>

      {/* 📊 Grouped bar chart */}
      <div style={{ width: "100%", height: 320, marginTop: 20 }}>
        <EChartsReact option={chartOptions} style={{ height: "100%" }} />
      </div>
    </div>
  );
};
