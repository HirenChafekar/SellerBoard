import { DatePicker, Segmented } from "antd";
import styles1 from "../../../assets/scss/home.module.scss";
import { DATE_FORMAT } from "../../../utilts/constant";
import dayjs from "dayjs";
import { getDateFromDateString } from "../../../utilts/timeUtils";
import SVGComponent from "../../../utilts/Svgs";
import EChartsReact from "echarts-for-react";
import * as echarts from "echarts";

export const GrpahInfo = ({
  title,
  segmentOptions,
  segmentChange,
  segmentValue,
  rangePresets,
  disabledDate,
  startTimestamp,
  endTimestamp,
  dateRangeChange,
  showStats = false,
  statsData = [],
}) => {
  const { RangePicker } = DatePicker;

  const renderClassStats = ({ bgColor, icon, iconColor, text, number }) => {
    return (
      <div className={styles1.graphinfo_block}>
        <div
          className={styles1.graphinfo_block_icon}
          style={{ backgroundColor: bgColor }}
        >
          <SVGComponent src={icon} color={iconColor} />
        </div>
        <div className={styles1.graphinfo_block_text}>
          <span className={styles1.graphinfo_block_text_title}>{text}</span>
          <span className={styles1.graphinfo_block_text_number}>{number}</span>
        </div>
      </div>
    );
  };

  // ✅ Example fixed data
  const chartData = {
    dates: Array.from({ length: 61 }, (_, i) =>
      dayjs("2023-08-31").add(i, "day").format("D MMM")
    ), // 31 Aug → 30 Sep
    values: [
      200, 1200, 800, 600, 500, 3000, 1800, 1000, 1500, 2100, 500, 2000, 2200,
      1700, 400, 0, 300, 700, 1200, 2500, 2900, 1200, 1500, 2000, 1800, 2500,
      1200, 3000, 1000, 2800, 3100, 2600, 2000, 1500, 0, 800, 1200, 2000, 2700,
      2300, 1900, 1000, 2200, 2600, 1800, 3000, 1500, 1000, 2500, 2100, 2800,
      2900, 3200, 2500, 1800, 2000, 2600, 2700, 3100, 3300, 3500,
    ],
  };

  const chartOptions = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: 0, // ✅ remove left padding
      right: 0,
      bottom: 0,
      top: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: chartData.dates,
      boundaryGap: false,
      axisLabel: {
        formatter: (value, index) => (index % 2 === 0 ? value : ""), // ✅ skip every other date
      },
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
        data: chartData.values,
        type: "line",
        smooth: true, // ✅ makes it look soft & curvy
        showSymbol: false, // ✅ no dots
        lineStyle: {
          width: 2,
          color: "#00C48C",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(0,196,140,0.25)" },
            { offset: 1, color: "rgba(255,255,255,0)" },
          ]),
        },
      },
    ],
  };

  return (
    <div className={styles1.graphinfo_container}>
      <div className={styles1.graphinfo_header}>
        <span>{title}</span>
        <div>
          <Segmented
            options={segmentOptions}
            onChange={segmentChange}
            value={segmentValue}
            className={styles1.graphinfo_segment}
          />
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

      {showStats ? (
        <div className={styles1.graphinfo_blocks}>
          {statsData.map((stats) =>
            renderClassStats({
              bgColor: stats.bgColor,
              text: stats.text,
              number: stats.number,
              icon: stats.icon,
              iconColor: stats.iconColor,
            })
          )}
        </div>
      ) : null}

      {/* ✅ Add ECharts line graph */}
      <div style={{ width: "100%", height: 300, marginTop: 20 }}>
        <EChartsReact option={chartOptions} style={{ height: "100%" }} />
      </div>
    </div>
  );
};
