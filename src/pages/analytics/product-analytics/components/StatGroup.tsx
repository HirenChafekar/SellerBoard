import React from "react";
import styles from "../../../../assets/scss/product-analytics.module.scss";

const StatGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.stat_group}>
    {children}
  </div>
);

export default StatGroup;
