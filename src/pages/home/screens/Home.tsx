import { NavigationAndTitleWrapper } from "../../../components/NavigationAndTitleWrapper";
import styles from "../../../assets/scss/common.module.scss";
import styles1 from "../../../assets/scss/home.module.scss";
import { CardWithGraph } from "../components/CardWithGraph";
import { GrpahInfo } from "../components/GrpahInfo";
import { useHome } from "../hooks/home";
import { TopPerformingProducts } from "../components/TopPerformingProducts";

export const Home = () => {
  const { values, functions } = useHome();

  return (
    <div className={styles.common_main_layout}>
      <div className={styles.common_top_layout}>
        <NavigationAndTitleWrapper
          title="Welcome back, Yash"
          description="Track, manage and forecast your customers and orders."
        />
      </div>

      <div className={styles1.grids}>
        {values.cardsArr.map((item, index) => (
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
