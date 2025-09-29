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
      title: "Total Ad Spend",
      value: 2420,
      diff: 40,
    },
    {
      title: "ACOS (%)",
      value: 1210,
      diff: -10,
    }, // ⬇️ negative trend
    {
      title: "TACOS",
      value: 2420,
      diff: 40,
    },
    {
      title: "ROAS",
      value: 2420,
      diff: 40,
    },
     {
      title: "Impressions",
      value: 2420,
      diff: 40,
    },
    {
      title: "Clicks",
      value: 2420,
      diff: 40,
    },
    {
      title: "CTR",
      value: 1210,
      diff: -10,
    },
    {
      title: "CPC",
      value: 2420,
      diff: 40,
    },
    {
      title: "CPM",
      value: 2420,
      diff: 40,
    },
     {
      title: "Total Orders",
      value: 2420,
      diff: 40,
    },
  ];

  const selectionOptions = [
    { label: "ACOS", value: "acos" },
    { label: "TACOS", value: "tacos" },
    { label: "ROAS", value: "roas" },
  ];

  const [selectedValue, setSelectedValue] = useState(selectionOptions[0].value);

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
      rangePresets,
      selectionOptions,
      selectedValue
    },
    functions: {
      setStartTimestamp,
      setEndTimestamp,
      dateRangeChange,
      disabledDate,
      setSelectedValue
    },
  };
};

export default useAdsAnalytics;
