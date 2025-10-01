import styles from "../assets/scss/main_content.module.scss";
import SVGComponent from "../utilts/Svgs";

export const BiggerCards = ({ item }) => {
  return (
    <div className={styles.bigger_cards}>
      <span>{item.title}</span>
      <div className={styles.bigger_cards_content}>
        <span>{item.value}</span>
        <div className={styles.bigger_cards_content_right}>
            <div className={styles.bigger_cards_content_right_diff}>
          <SVGComponent
            src={item?.diff > 0 ? "arrowUp" : "arrowDown"}
            color={item?.diff > 0 ? "#12B76A" : "#F04438"}
          />
          <span style={{ color: item?.diff > 0 ? "#027A48" : "#B42318" }}>
            {item?.diff}%
          </span>
          </div>

          <p>vs last month</p>
        </div>
      </div>
    </div>
  );
};
