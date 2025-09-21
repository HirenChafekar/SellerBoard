import { NavigationAndTitleWrapper } from "../../../components/NavigationAndTitleWrapper";
import styles from "../../../assets/scss/common.module.scss";
import styles1 from "../../../assets/scss/home.module.scss";
import { CardWithGraph } from "../components/CardWithGraph";
import { GrpahInfo } from "../components/GrpahInfo";
import { DatePicker } from "antd";
import { useHome } from "../hooks/home";
import { DATE_FORMAT } from "../../../utilts/constant";
import dayjs from "dayjs";
import { getDateFromDateString } from "../../../utilts/timeUtils";
import { TopPerformingProducts } from "../components/TopPerformingProducts";

export const Home = () => {
  const { values, functions } = useHome();
  const { RangePicker} = DatePicker;
  const arr = [
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

  return (
    <div className={styles.common_main_layout}>
      <div className={styles.common_top_layout}>
        <NavigationAndTitleWrapper
          title="Welcome back, Yash"
          description="Track, manage and forecast your customers and orders."
        />
      </div>

      <div className={styles1.grids}>
        {arr.map((item, index) => (
          <CardWithGraph item={item} index={index} />
        ))}
      </div>

      <div className={styles1.main_box}>
        <GrpahInfo
          title={"Ads Performance"}
          segmentOptions={values.segmentOptions}
          segmentValue={values.segmentValue}
          segmentChange={functions.segmentChange}
          rangePresets={values.rangePresets}
          disabledDate={functions.disabledDate}
          startTimestamp={values.startTimestamp}
          endTimestamp={values.endTimestamp}
          dateRangeChange={functions.dateRangeChange}
          showStats={true}
          statsData={values.statsData}
        />
      </div>

      <div className={styles1.main_box}>
        <TopPerformingProducts />
      </div>

      <div className=""></div>
    </div>
  );
};
