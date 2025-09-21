import { Button, Table } from "antd";
import styles from "../../../assets/scss/common.module.scss";
import styles1 from "../../../assets/scss/home.module.scss";
import SVGComponent from "../../../utilts/Svgs";

export const TopPerformingProducts = ({
  title = "Top Performing Products",
}) => {
  // Example data matching your screenshot
  const dataSource = [
    {
      key: "1",
      asin: "B08XYZ1234",
      productName: "Wireless Mouse Pro",
      sales: "₹ 4,87,441",
      unitsSold: 274,
      acos: 274,
      tacos: 274,
      cr: "23.5%",
      ratings: 4.5,
      ratingsCount: "11.5K",
    },
  ];

  const columns = [
    {
      title: "ASIN",
      dataIndex: "asin",
      key: "asin",
      width: 120,
      render: (text: string) => (
        <span
          style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "80%",
            color: "#BFBFBF",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Product name",
      dataIndex: "productName",
      key: "productName",
      width: 200,
      render: (text: string) => (
        <span>
          {text} <SVGComponent src="externalLink" color="#bfbfbf" />
        </span>
      ),
    },
    {
      title: "Sales",
      dataIndex: "sales",
      key: "sales",
    },
    {
      title: "Units Sold",
      dataIndex: "unitsSold",
      key: "unitsSold",
      align: "right" as const,
    },
    {
      title: "ACOS %",
      dataIndex: "acos",
      key: "acos",
      align: "right" as const,
    },
    {
      title: "TACOS %",
      dataIndex: "tacos",
      key: "tacos",
      align: "right" as const,
    },
    {
      title: (
        <span>
          CR %{" "}
          <SVGComponent src="sort" color="#bfbfbf" height="12px" width="12px" />
        </span>
      ),
      dataIndex: "cr",
      key: "cr",
      align: "right" as const,
      sorter: (a: any, b: any) => parseFloat(a.cr) - parseFloat(b.cr),
    },
    {
      title: "Ratings",
      dataIndex: "ratings",
      key: "ratings",
      align: "center" as const,
      render: (_: any, record: any) => (
        <div className={styles.flex}>
          <div className={styles.flex}>
            <SVGComponent src="star" color="#FFA305" />
            {record.ratings}{" "}
          </div>
          <span style={{ color: "#bfbfbf", marginLeft: 4 }}>
            <div className={styles.flex}>
              <SVGComponent src="personBehindPersonSmall" color="#BFBFBF" />
              {record.ratingsCount}
            </div>
          </span>
        </div>
      ),
    },
    {
      title: "Details",
      key: "details",
      align: "center" as const,
      render: () => (
        <span style={{ cursor: "pointer" }}>
          <SVGComponent src="arrowRightSmall" color="#bfbfbf" />
        </span>
      ),
    },
  ];

  return (
    <div className={styles1.graphinfo_container}>
      <div className={styles1.graphinfo_header}>
        <span>{title}</span>
        <Button icon={<SVGComponent src="download" />}>Export</Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={false}
        style={{ marginTop: 16 }}
      />
    </div>
  );
};
