import { Button, Collapse, CollapseProps, Form, Input } from "antd";
import styles from "../../../assets/scss/common.module.scss";
import styles1 from "../../../assets/scss/keywordanalysis.module.scss";
import { FieldLabel } from "../../../components/FieldLabel";

export const FirstForm = ({ values, functions }) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: `Select Learners`,
      children: (
        <div className={styles.common_collapse_children}>
          <div>
            <FieldLabel label="Product Title" />
            <Form.Item name="product_title">
              <Input
                placeholder="Enter Product Title"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>

          <div>
            <FieldLabel label="About the Product" />
            <Form.Item name="product_about">
              <Input.TextArea
                placeholder="Write a few lines about the product.."
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>

          <div>
            <FieldLabel label="Features/Benefits" />
            <Form.Item name="features_benefits">
              <Input.TextArea
                placeholder="Why should one use the product?"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: `Demographics`,
      children: (
        <div className={styles.common_collapse_children}>
          <div>
            <FieldLabel label="Product Title" />
            <Form.Item name="product_title">
              <Input
                placeholder="Enter Product Title"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>

          <div>
            <FieldLabel label="About the Product" />
            <Form.Item name="product_about">
              <Input.TextArea
                placeholder="Write a few lines about the product.."
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>

          <div>
            <FieldLabel label="Features/Benefits" />
            <Form.Item name="features_benefits">
              <Input.TextArea
                placeholder="Why should one use the product?"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginTop: 32, width: "60%" }}>
      <div style={{ marginTop: 24 }}>
        <p className={styles.common_text_title}>
          Help us understand your product
        </p>
        <p className={styles.common_text_desc}>
          This will help us provide you with the best keyword recommendations.
        </p>

        <Form
          style={{ marginTop: 24 }}
          form={values.firstForm}
          onFinish={functions.firstFormSubmit}
        >
          <Collapse
            items={items}
            defaultActiveKey={["1", "2"]}
            bordered={false}
            className="common_collapse"
          />

          <Button
            type="primary"
            className={styles.common_btn_primary}
            style={{ marginTop: 24 }}
            htmlType="submit"
          >
            Proceed
          </Button>
        </Form>
      </div>
    </div>
  );
};
