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
    acos: 12.5,
    tacos: 15.2,
    cr: "23.5%",
    ratings: 4.5,
    ratingsCount: "11.5K",
  },
  {
    key: "2",
    asin: "B07ABC5678",
    productName: "Bluetooth Headphones X",
    sales: "₹ 8,25,670",
    unitsSold: 430,
    acos: 10.2,
    tacos: 13.5,
    cr: "21.8%",
    ratings: 4.2,
    ratingsCount: "8.3K",
  },
  {
    key: "3",
    asin: "B09LMN4321",
    productName: "Smart Watch Series 5",
    sales: "₹ 6,12,980",
    unitsSold: 190,
    acos: 14.3,
    tacos: 16.7,
    cr: "19.2%",
    ratings: 4.7,
    ratingsCount: "5.2K",
  },
  {
    key: "4",
    asin: "B08DEF9876",
    productName: "Gaming Keyboard Ultra",
    sales: "₹ 3,48,200",
    unitsSold: 150,
    acos: 11.8,
    tacos: 14.0,
    cr: "25.1%",
    ratings: 4.4,
    ratingsCount: "6.8K",
  },
  {
    key: "5",
    asin: "B07GHI6543",
    productName: "Portable Charger 20000mAh",
    sales: "₹ 5,95,300",
    unitsSold: 320,
    acos: 9.5,
    tacos: 12.2,
    cr: "22.7%",
    ratings: 4.6,
    ratingsCount: "12.1K",
  },
  {
    key: "6",
    asin: "B09JKL8765",
    productName: "Noise Cancelling Earbuds",
    sales: "₹ 7,48,900",
    unitsSold: 390,
    acos: 13.0,
    tacos: 17.3,
    cr: "20.5%",
    ratings: 4.3,
    ratingsCount: "9.4K",
  },
  {
    key: "7",
    asin: "B08MNO5432",
    productName: "4K Action Camera",
    sales: "₹ 4,12,750",
    unitsSold: 180,
    acos: 15.1,
    tacos: 18.0,
    cr: "18.9%",
    ratings: 4.5,
    ratingsCount: "7.6K",
  },
  {
    key: "8",
    asin: "B07PQR0987",
    productName: "LED Desk Lamp",
    sales: "₹ 2,85,900",
    unitsSold: 270,
    acos: 10.7,
    tacos: 13.4,
    cr: "24.0%",
    ratings: 4.4,
    ratingsCount: "10.2K",
  },
  {
    key: "9",
    asin: "B09STU7654",
    productName: "Wireless Charger Stand",
    sales: "₹ 3,65,480",
    unitsSold: 220,
    acos: 12.9,
    tacos: 15.8,
    cr: "21.3%",
    ratings: 4.5,
    ratingsCount: "6.9K",
  },
  {
    key: "10",
    asin: "B08VWX3210",
    productName: "Fitness Tracker Pro",
    sales: "₹ 6,88,750",
    unitsSold: 340,
    acos: 11.4,
    tacos: 14.9,
    cr: "22.0%",
    ratings: 4.6,
    ratingsCount: "9.7K",
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
