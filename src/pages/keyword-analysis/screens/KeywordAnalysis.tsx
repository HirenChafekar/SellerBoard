import styles from "../../../assets/scss/common.module.scss";
import { NavigationAndTitleWrapper } from "../../../components/NavigationAndTitleWrapper";

export const KeywordAnalysis = () => {
  return (
    <div className={styles.common_main_layout}>
      <div className={styles.common_top_layout}>
        <NavigationAndTitleWrapper
          title="Keyword Analysis"
          description="Track, manage and forecast your customers and orders."
        />
      </div>

      Keyword Analysis Screen
    </div>
  );
};
