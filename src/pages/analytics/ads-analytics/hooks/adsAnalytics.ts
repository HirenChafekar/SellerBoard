import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { dateToFullDate } from "../../../../utilts/timeUtils";

const useAdsAnalytics = () => {
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
    searchParams.get("segment") || "orders"
  );

  const segmentOptions = [
    { label: "Orders", value: "orders" },
    { label: "Cancellations", value: "cancellations" },
    { label: "Returns", value: "returns" },
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

  const cardsArr = [
    {
      title: "Total Orders",
      value: 2420,
      diff: 40,
      graphData: [100, 200, 300, 400],
    },
    {
      title: "ADV",
      value: 1210,
      diff: -10,
      graphData: [400, 300, 200, 100],
    }, // ⬇️ negative trend
    {
      title: "Refund Rate",
      value: 2420,
      diff: 40,
      graphData: [50, 80, 60, 120],
    },
    {
      title: "Cancellation Rate",
      value: 2420,
      diff: 40,
      graphData: [200, 180, 220, 260],
    },
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

  const dateRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    onRangeChange(dates, dateStrings);
  };

  return {
    values: {
      cardsArr,
      startTimestamp,
      endTimestamp,
      segmentValue,
      segmentOptions,
      rangePresets,
    },
    functions: {
      setStartTimestamp,
      setEndTimestamp,
      setSegmentValue,
      segmentChange,
      dateRangeChange,
      disabledDate,
    },
  };
};

export default useAdsAnalytics;
