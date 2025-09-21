import dayjs, { Dayjs } from "dayjs";
import { dateToFullDate } from "../../../utilts/timeUtils";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useHome = () => {
  const [searchParams] = useSearchParams();
  const [startTimestamp, setStartTimestamp] = useState(
    searchParams.get("startTimestamp") ||
      dayjs().subtract(31, "days").startOf("day").format()
  );
  const [endTimestamp, setEndTimestamp] = useState(
    searchParams.get("endTimeStamp") ||
      dayjs().subtract(1, "days").endOf("day").format()
  );
  const [segmentValue, setSegmentValue] = useState(
    searchParams.get("segment") || "ad_spend"
  );

  const segmentOptions = [
    { label: "Ad Spend", value: "ad_spend" },
    { label: "Ad Revenue", value: "ad_revenue" },
    { label: "Ad Orders", value: "ad_orders" },
  ];
  const rangePresets = [
    {
      label: "Yesterday",
      value: [dayjs().add(-1, "d"), dayjs().add(-1, "d")],
    },
    {
      label: "Last Month",
      value: [dayjs().add(-31, "d"), dayjs().add(-1, "d")],
    },
    {
      label: "Last 2 Months",
      value: [dayjs().add(-61, "d"), dayjs().add(-1, "d")],
    },
    {
      label: "Last 3 Months",
      value: [dayjs().add(-91, "d"), dayjs().add(-1, "d")],
    },
    {
      label: "Last 6 Months",
      value: [dayjs().add(-181, "d"), dayjs().add(-1, "d")],
    },
    {
      label: "fiscal_year",
      value: [
        dayjs(
          `April 1 ${
            dayjs().month() >= 3 ? dayjs().year() : dayjs().year() - 1
          }`
        ),
        dayjs().add(-1, "d"),
      ],
    },
  ];

  const statsData = [
    {
      bgColor: "#FFF6E6",
      text: "CPC",
      icon: "warning",
      iconColor: "#D98B04",
      number: 11,
    },
    {
      bgColor: "#E8EFFF",
      text: "CPM",
      icon: "clock",
      iconColor: "#1463FF",
      number: 2344,
    },
    {
      bgColor: "#FDECEC",
      text: "CTR",
      icon: "cross",
      iconColor: "#EF4444",
      number: 34,
    },
    {
      bgColor: "#E8F9F2",
      text: "Impressions",
      icon: "tick",
      iconColor: "#1BC47D",
      number: 90,
    },
    {
      bgColor: "#E8F9F2",
      text: "RPC",
      icon: "tick",
      iconColor: "#1BC47D",
      number: 90,
    },
    {
      bgColor: "#F0F0F0",
      text: "Clicks",
      icon: "personBehindPerson",
      iconColor: "#262626",
      number: "45%",
    },
  ];

   const cardsArr = [
    {
      title: "Total Sales",
      value: 2420,
      diff: 40,
      graphData: [100, 200, 300, 400],
    },
    {
      title: "Units Sold",
      value: 1210,
      diff: -10,
      graphData: [400, 300, 200, 100],
    }, // ⬇️ negative trend
    { title: "TACOS", value: 2420, diff: 40, graphData: [50, 80, 60, 120] },
    { title: "ACOS", value: 2420, diff: 40, graphData: [200, 180, 220, 260] },
    { title: "ROAS", value: 2420, diff: 40, graphData: [150, 250, 200, 300] },
  ];

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      setStartTimestamp(
        dateToFullDate({
          date: dateStrings[0],
          format: "DD/MM/YYYY",
          startOrEnd: "start",
        })
      );

      setEndTimestamp(
        dateToFullDate({
          date: dateStrings[1],
          format: "DD/MM/YYYY",
          startOrEnd: "end",
        })
      );
    } else {
      console.log("Clear");
    }
  };

  const disabledDate = (current: Dayjs) => {
    return current && current >= dayjs().subtract(1, "days").endOf("day");
  };

  const segmentChange = (value: string) => {
    setSegmentValue(value);
  };

  const dateRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
    onRangeChange(dates, dateStrings);
  };

  return {
    values: {
      rangePresets,
      startTimestamp,
      endTimestamp,
      segmentValue,
      segmentOptions,
      statsData,
      cardsArr
    },
    functions: { disabledDate, setSegmentValue, segmentChange, dateRangeChange },
  };
};
