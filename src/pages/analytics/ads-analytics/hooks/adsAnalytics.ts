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
    title: "Total Ads Spend",
    value: 4875,
    diff: 12,
  },
  {
    title: "ACOS (%)",
    value: 23.7,
    diff: -4,
  },
  {
    title: "TACOS",
    value: 15.2,
    diff: 3,
  },
  {
    title: "ROAS",
    value: 5.8,
    diff: 7,
  },
  {
    title: "Impressions",
    value: 124560,
    diff: -8,
  },
  {
    title: "Clicks",
    value: 8450,
    diff: 5,
  },
  {
    title: "CTR",
    value: 6.8,
    diff: -1.2,
  },
  {
    title: "CPC",
    value: 1.23,
    diff: -0.1,
  },
  {
    title: "CPM",
    value: 12.5,
    diff: 2.5,
  },
  {
    title: "Total Orders",
    value: 1560,
    diff: 9,
  },
];


  const prouctCardsArr = [
    {
      title: "Stock Levels",
      value: 2420,
      diff: 40,
    },
    {
      title: "Product Ratings",
      value: 1210,
      diff: -10,
    }, // ⬇️ negative trend
    {
      title: "Conversion Rate",
      value: 2420,
      diff: 40,
    },
    {
      title: "Total Sales",
      value: 2420,
      diff: 40,
    },
    {
      title: "Units Sold",
      value: 2420,
      diff: 40,
    },
    {
      title: "Refund Rate",
      value: 2420,
      diff: 40,
    },
  ];

  const selectionOptions = [
    { label: "ACOS", value: "acos" },
    { label: "TACOS", value: "tacos" },
    { label: "ROAS", value: "roas" },
  ];

   const [funnelData] = useState([
    { value: 50, name: "Impressions" },
    { value: 15, name: "Clicks" },
    { value: 11, name: "Add to Cart" },
    { value: 3, name: "Purchase" },
    { value: 8, name: "Returns" },
  ]);

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
      selectedValue,
      prouctCardsArr,
      funnelData
    },
    functions: {
      setStartTimestamp,
      setEndTimestamp,
      dateRangeChange,
      disabledDate,
      setSelectedValue,
    },
  };
};

export default useAdsAnalytics;
