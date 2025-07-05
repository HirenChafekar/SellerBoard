
import SVGComponent from "@/utils/Svgs";
import { Button, Dropdown } from "antd";
import styles from "@/assets/scss/main_content.module.scss";

export const MoreOptions = ({
  items = [],
  index = 0,
  itemClicked = (_: any, __: any, ___: any) => {},
  onlyIcon = true,
  btnText = "",
  showDefaultStye = true,
  actionSvg = "threedots",
  record = {}
}) => {
  return (
    <Dropdown
      menu={{
        items,
        onClick: ({ key, domEvent }) => {
          domEvent.stopPropagation();
          itemClicked(index, key, record);
        },
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button
        className={showDefaultStye ? styles.more_options : ""}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {onlyIcon ? (
          <SVGComponent src={actionSvg} color="#8c8c8c" />
        ) : (
          <span>
            {btnText} <SVGComponent src="arrowDown" color="#8c8c8c" />
          </span>
        )}
      </Button>
    </Dropdown>
  );
};
