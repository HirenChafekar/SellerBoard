import { Button, Table } from "antd";
import styles from "../../../../assets/scss/common.module.scss";
import styles1 from "../../../../assets/scss/home.module.scss";
import SVGComponent from "../../../../utilts/Svgs";

export const CampaignPerformance = ({
  title = "Campaign Performance",
}) => {
  const dataSource = [
    {
      key: "1",
      name: "Campaign A",
      impressions: 274,
      clicks: 274,
      ctr: "27.4%",
      acos: "23.5%",
      roas: "2.5",
      cvr: "23.5%",
      profit: "23.5%",
    },
    {
      key: "2",
      name: "Campaign B",
      impressions: 274,
      clicks: 274,
      ctr: "27.4%",
      acos: "23.5%",
      roas: "2.5",
      cvr: "23.5%",
      profit: "23.5%",
    },
    {
      key: "3",
      name: "Campaign C",
      impressions: 274,
      clicks: 274,
      ctr: "27.4%",
      acos: "23.5%",
      roas: "2.5",
      cvr: "23.5%",
      profit: "23.5%",
    },
    {
      key: "4",
      name: "Campaign D",
      impressions: 274,
      clicks: 274,
      ctr: "27.4%",
      acos: "23.5%",
      roas: "2.5",
      cvr: "23.5%",
      profit: "23.5%",
    },
    {
      key: "5",
      name: "Campaign E",
      impressions: 274,
      clicks: 274,
      ctr: "27.4%",
      acos: "23.5%",
      roas: "2.5",
      cvr: "23.5%",
      profit: "23.5%",
    },
  ];

  const columns = [
    {
      title: "Campaign Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Impressions",
      dataIndex: "impressions",
      key: "impressions",
    },
    {
      title: "Clicks",
      dataIndex: "clicks",
      key: "clicks",
    },
    {
      title: "CTR",
      dataIndex: "ctr",
      key: "ctr",
    },
    {
      title: "ACOS %",
      dataIndex: "acos",
      key: "acos",
    },
    {
      title: "ROAS",
      dataIndex: "roas",
      key: "roas",
    },
    {
      title: "CVR",
      dataIndex: "cvr",
      key: "cvr",
    },
    {
      title: "Profit",
      dataIndex: "profit",
      key: "profit",
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
