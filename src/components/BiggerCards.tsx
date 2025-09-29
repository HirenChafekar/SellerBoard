import styles from "../assets/scss/main_content.module.scss";
import { ArrowUpOutlined } from "@ant-design/icons";

export const BiggerCards = ({ item }) => {
    return (
        <div className={styles.bigger_cards}>
            <div className={styles.bigger_cards_title}>{item.title}</div>
            <div className={styles.bigger_cards_value_row}>
                <span className={styles.bigger_cards_value}>{item.value}</span>
                <span className={styles.bigger_cards_growth}>
                    <ArrowUpOutlined style={{ color: "#4CAF50", fontSize: 16, marginRight: 4 }} />
                    <span className={styles.bigger_cards_growth_percent}>{item.growth}%</span>
                </span>
            </div>
            <div className={styles.bigger_cards_subtext}>vs last month</div>
        </div>
    );
};