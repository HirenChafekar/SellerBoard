import React from "react";
import styles from "../../../../assets/scss/product-analytics.module.scss";

type AnalyticsStatProps = {
  label: string;
  value: string | number;
  change: string;
};

const AnalyticsStat: React.FC<AnalyticsStatProps> = ({ label, value, change }) => {
  return (
    <div className={styles.analytics_stat}>
      {/* Place label above value */}
      <div className={styles.stat_label}>{label}</div>
      <div className={styles.stat_value}>{value}</div>
      <div className={styles.stat_change}>{change}</div>
    </div>
  );
};

export default AnalyticsStat;
