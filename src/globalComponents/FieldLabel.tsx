import styles from "../assets/scss/main_content.module.scss";
import cx from "classnames";

export const FieldLabel = ({
  label = "",
  isRequired = false,
  customStyles = {},
  optional = false,
  customClassName = {},
}) => {
  return (
    <div
      className={cx(styles.input_field_label_container, customClassName)}
      style={customStyles}
    >
      <span className={styles.input_field_label_container_text}>{label}</span>
      {isRequired ? (
        <span style={{ color: "#EF4444", fontSize: "14px", fontWeight: "500" }}>
          {" "}
          *
        </span>
      ) : null}
      {optional && <span className={styles.optional_text}>{"(optional)"}</span>}
    </div>
  );
};
