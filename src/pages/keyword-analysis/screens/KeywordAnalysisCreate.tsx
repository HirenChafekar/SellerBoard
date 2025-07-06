import { Progress } from "antd";
import styles from "../../../assets/scss/common.module.scss";
import styles1 from "../../../assets/scss/keywordanalysis.module.scss";
import { NavigationAndTitleWrapper } from "../../../components/NavigationAndTitleWrapper";
import { FirstForm } from "../components/FirstForm";
import { useKeywordAnalysisCreate } from "../hooks/keywordAnalysisCreate";

export const KeywordAnalysisCreate = () => {
  const { values, functions } = useKeywordAnalysisCreate();

  return (
    <div className={styles.common_main_layout}>
      <div className={styles.common_top_layout}>
        <NavigationAndTitleWrapper
          title="Keyword Analysis"
          description="Track, manage and forecast your customers and orders."
        />
      </div>

      <div style={{ marginTop: 32 }}>
        <Progress
          percent={values.progress}
          trailColor="#D9DCE7"
          strokeColor={"#7F56D9"}
          showInfo={false}
          style={{ width: "60%" }}
        />
        <p className={styles1.keywords_analysis_steps}>
          Step {values.step} of 5
        </p>

        {values.step === 1 && (
          <FirstForm values={values} functions={functions} />
        )}
      </div>
    </div>
  );
};
