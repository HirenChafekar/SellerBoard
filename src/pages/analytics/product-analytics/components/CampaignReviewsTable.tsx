import React from "react";
import { Table, Button } from "antd";
import styles from "../../../../assets/scss/product-analytics.module.scss";

import SVGComponent from "../../../../utilts/Svgs";

interface Review {
  customerName: string;
  submittedOn: string;
  rating: number;
  review: string;
}

interface CampaignReviewsTableProps {
  reviews: Review[];
  title?: string;
}

export const CampaignReviewsTable: React.FC<CampaignReviewsTableProps> = ({
  reviews,
  title = "Reviews",
}) => {
 const columns = [
  { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
  { title: "Submitted On", dataIndex: "submittedOn", key: "submittedOn" },
  { 
    title: "Rating", 
    dataIndex: "rating", 
    key: "rating",
    render: (rating: number) => (
      <span style={{ color: rating >= 4 ? "green" : "red", fontWeight: 600 }}>
        {rating}
      </span>
    )
  },
  { title: "Review", dataIndex: "review", key: "review" },
];


  const handleExport = () => {
    const csvRows = [
      ["Customer Name", "Submitted On", "Rating", "Review"],
      ...reviews.map(r => [r.customerName, r.submittedOn, r.rating, r.review])
    ];
    const csvContent = "data:text/csv;charset=utf-8," 
      + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "campaign_reviews.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.product_analytics_table}>
      <div className={styles.table_header}>
        <h3>{title}</h3>
        <Button className="export_btn" icon={<SVGComponent src="download" />} onClick={handleExport}>
          Export
        </Button>
      </div>

      <Table
        dataSource={reviews.map((r, i) => ({ ...r, key: i }))}
        columns={columns}
        pagination={false}
        bordered={false}
      />
    </div>
  );
};
