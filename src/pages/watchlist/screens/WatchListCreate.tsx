import { NavigationAndTitleWrapper } from "../../../components/NavigationAndTitleWrapper";
import { Tabs, TabsProps } from "antd";
import styles from "../../../assets/scss/common.module.scss";
import "../../../assets/css/common.css";
import { SearchBYFilters } from "../components/SearchBYFilters";

export const WatchlistCreate = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Search by Filters",
      children: <SearchBYFilters />,
    },
    {
      key: "2",
      label: "Search by ASINs",
      children: "Content of Tab Pane 2",
    }
  ];

  return (
    <div className={styles.common_main_layout}>
      <div className={styles.common_top_layout}>
        <NavigationAndTitleWrapper
          title="Watchlist"
          description="Track, manage and forecast your customers and orders."
        />
      </div>

      <Tabs
        defaultActiveKey="1"
        items={items}
        className="common_tabs"
        style={{ marginTop: 32 }}
      />
    </div>
  );
};
