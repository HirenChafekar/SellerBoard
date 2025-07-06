import { Button, Form, Input, InputNumber, Radio, Select } from "antd";
import { FieldLabel } from "../../../components/FieldLabel";
import styles from "../../../assets/scss/common.module.scss";
import "../../../assets/css/common.css";
import SVGComponent from "../../../utilts/Svgs";

export const SearchBYFilters = () => (
  <Form>
    <div style={{ display: "flex", columnGap: "32px" }}>
      <div style={{ width: "100%" }}>
        <div>
          <FieldLabel label="Category or Subcategory" />
          <Form.Item name="category">
            <Select
              placeholder="Enter Category or Subcategory"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </div>

        <div>
          <FieldLabel label="Review Rating" />
          <div className={styles.common_form_row}>
            <div style={{ width: "100%" }}>
              <Form.Item name="min_rating">
                <InputNumber
                  placeholder="Min Rating"
                  min={1}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>

            <div style={{ width: "100%" }}>
              <Form.Item name="max_rating">
                <InputNumber
                  placeholder="Max Rating"
                  min={1}
                  max={100}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.common_form_row}>
            <div style={{ width: "100%" }}>
              <FieldLabel label="Fulfillment" />
              <Form.Item name="template_name">
                <Input
                  placeholder="Enter Template Name"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>

            <div style={{ width: "100%" }}>
              <FieldLabel label="Amazon Prime" />
              <Form.Item name="is_amazon_prime">
                <Radio.Group className="common_radio">
                  <Radio value={0}>No</Radio>
                  <Radio value={1}>Yes</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div>
          <FieldLabel label="Brand Search" />
          <Form.Item name="brand_search">
            <Input
              placeholder="Enter Brand Names(s)"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </div>

        <div>
          <FieldLabel label="Variations" />
          <div className={styles.common_form_row}>
            <div style={{ width: "100%" }}>
              <Form.Item name="min_variation">
                <InputNumber
                  placeholder="Min Variation Count"
                  min={1}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>

            <div style={{ width: "100%" }}>
              <Form.Item name="max_variation">
                <InputNumber
                  placeholder="Max Variation Count"
                  min={1}
                  max={100}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>
          </div>
        </div>

        <div>
          <FieldLabel label="Title Keywords" />
          <Form.Item name="title_keywords">
            <Input
              placeholder="Enter Title Keywords"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </div>
      </div>
    </div>
    <Button type="primary" className={styles.common_btn_primary} style={{marginTop: 24}} htmlType="submit">
      <SVGComponent src="plus" color="#ffffff" /> Prepare Watchlist
    </Button>
  </Form>
);
