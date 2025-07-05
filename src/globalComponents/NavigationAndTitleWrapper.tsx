import SVGComponent from "@/utils/Svgs";
import { Breadcrumb, Tooltip } from "antd";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface NavigationAndTitleWrapperProps {
  breadcrumbsList?: BreadcrumbItem[];
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
  breadcrumbsList,
  title,
  showBackArrow = true,
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
      <h2 style={{ color: "#262626" }}> {title}</h2>
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
      {false && <Breadcrumb items={breadcrumbsList} />}
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
              <h2 style={{ fontWeight: "600", fontSize: "20px", color: "#262626"  }}>{title}</h2>
              {renderInfoTooltip()}
            </div>
            {description && (
              <span
                className={descriptionClass}
                style={{ color: descriptionClass ? "" : "#7B8C9F" }}
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
