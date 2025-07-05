import { Col, Row } from "antd";
import styles from "../../assets/scss/main_content.module.scss";
import SideBar from "../../components/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Organization() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div id="sellerboard">
      <Row className={styles.main_wrapper} gutter={0}>
        <Col span={5} style={{ display: "flex" }}>
          <SideBar />
        </Col>
        <Col span={19} style={{ flex: 1 }}>
          {/* allow billing and profile page redirection */}

          <div className={styles.main_layout}>
            <div id="container_div" className={styles.full_page_container}>
              {!loading && <Outlet />}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
