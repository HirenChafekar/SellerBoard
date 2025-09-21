import styles1 from "../../../assets/scss/home.module.scss";
import SVGComponent from "../../../utilts/Svgs";
import EChartsReact from "echarts-for-react";
import * as echarts from "echarts";

export const CardWithGraph = ({ item, index }) => {
  return (
    <div className={styles1.grids_indi} key={index}>
      <div className={styles1.grids_indi_header}>
        <span>{item?.title}</span>
      </div>
      <div className={styles1.grids_indi_body}>
        <div>
          <p className={styles1.grids_indi_value}>{item?.value}</p>
          <div className={styles1.grids_indi_diff}>
            <SVGComponent
              src={item?.diff > 0 ? "arrowUp" : "arrowDown"}
              color={item?.diff > 0 ? "#12B76A" : "#F04438"}
            />
            <span style={{ color: item?.diff > 0 ? "#027A48" : "#B42318" }}>
              {item?.diff}%
            </span>
          </div>
          <p className={styles1.grids_indi_last_month_text}>vs last month</p>
        </div>

        <span
          style={{
            cursor: "default",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "24px",
              minWidth: "64px",
              minHeight: "24px",
            }}
          >
            <EChartsReact
              option={{
                tooltip: { show: false },
                xAxis: {
                  show: false,
                  boundaryGap: false,
                  data: ["Week 1", "Week 2", "Week 3", "Week 4"],
                },
                yAxis: { show: false },
                grid: {
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  containLabel: false,
                },
                series: [
                  {
                    type: "line",
                    smooth: true,
                    itemStyle: {
                      color: item.diff > 0 ? "#1BC47D" : "#F04438",
                    },
                    areaStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color:
                            item.diff > 0
                              ? "rgba(61, 213, 152, 0.20)"
                              : "rgba(240, 68, 56, 0.20)",
                        },
                        {
                          offset: 1,
                          color: "rgba(255, 255, 255, 0.00)",
                        },
                      ]),
                    },
                    showSymbol: false,
                    data: item.graphData,
                  },
                ],
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </span>
      </div>
    </div>
  );
};
