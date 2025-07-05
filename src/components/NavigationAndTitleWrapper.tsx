import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import SVGComponent from "../utilts/Svgs";
import styles from "../assets/scss/navigationandtitlewrapper.module.scss";
interface NavigationAndTitleWrapperProps {
  title: string;
  showBackArrow?: boolean;
  redirectionPath?: string;
  showInfo?: boolean;
  tooltipContent?: string;
  loading?: boolean;
  goToLastVisitedPage?: boolean;
  description?: string;
  descriptionClass?: string;
}

export const NavigationAndTitleWrapper = ({
  title,
  showBackArrow = false,
  redirectionPath = "../",
  showInfo = false,
  tooltipContent = "",
  loading = false,
  goToLastVisitedPage = false,
  description = "",
  descriptionClass = "",
}: NavigationAndTitleWrapperProps): JSX.Element => {
  const renderBackArrow = () => (
    <Link
      to={goToLastVisitedPage ? "#" : redirectionPath}
      onClick={() => {
        goToLastVisitedPage ? history.back() : null;
      }}
      style={{ display: "flex", alignItems: "center", columnGap: "6px" }}
    >
      <SVGComponent src="backcarat" color="#262626" />
      <h2 className={styles.navigation_and_title_wrapper_title}> {title}</h2>
    </Link>
  );

  const renderInfoTooltip = () =>
    showInfo && (
      <Tooltip title={tooltipContent} placement="bottomRight">
        <span
          style={{ cursor: "pointer", display: "flex", marginLeft: "10px" }}
        >
          <SVGComponent src="info" color="#454545" />
        </span>
      </Tooltip>
    );

  if (loading) {
    return <div>Navigation Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", columnGap: "6px" }}>
        {showBackArrow ? (
          <>
            {renderBackArrow()}
            {renderInfoTooltip()}
          </>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
          >
            <div>
              <h2 className={styles.navigation_and_title_wrapper_title}>
                {title}
              </h2>
              {renderInfoTooltip()}
            </div>
            {description && (
              <span
                className={
                  descriptionClass ||
                  styles.navigation_and_title_wrapper_desc
                }
              >
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
