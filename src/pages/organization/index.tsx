import { Col, Row  } from "antd";
import cx from "classnames";
import styles from "../../assets/scss/main_content.module.scss";
import SideBar from "../../components/SideBar";


export default function Organization() {
    return(
        <div id="sellerboard">
            <Row
        className={cx(styles.padding_6, styles.main_wrapper)}
        gutter={8}
      >
           <Col span={5} style={{ display: "flex" }}>
            <SideBar />
          </Col>
          hiren
      </Row>
        </div>
    )
}