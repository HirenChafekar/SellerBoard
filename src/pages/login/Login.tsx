import styles from "../../assets/scss/login.module.scss";
import { Button, Form, Input } from "antd";
import { FieldLabel } from "../../globalComponents/FieldLabel";
import { FieldType } from "../../interfaces/login.ts";
import logoImage from "../../assets/images/logo.png";
import loginFrame from "../../assets/images/login_frame.png";

export default function Login() {

  return (
    <div
      className={styles.login_container}
    >
      <div
        className={styles.login_container_left}
        style={{ height: "100vh", position:"relative" }}
      >
        <div style={{ display: "flex", flexDirection: "column", rowGap:"24px"}}>
          <div style={{display:"flex", justifyContent:"center"}}>
            <img src={logoImage} style={{ height: "60px" }} />
          </div>
          <div style={{display:"flex", flexDirection:"column", rowGap:"4px"}}>
            <p className={styles.login_title}>Sign in to Astrat Invest </p>
          </div>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
        //   onFinish={formSubmit}
        //   onFinishFailed={formSubmitFailed}
          autoComplete="off"
        >
          <FieldLabel label="Email" isRequired />
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
            style={{width:"100%"}}
          >
            <Input type="email" style={{ width: "450px" }} />
          </Form.Item>

          <FieldLabel label="Password" isRequired />
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            style={{width:"100%"}}
          >
            <Input.Password style={{ width: "450px" }} />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            style={{width:"100%"}}
            // loading={isPending}
          >
            Submit
          </Button>
        </Form>

        <div className="absolute">
          
        </div>
      </div>
      <div style={{ height: "100%", position: "relative" }}>
        <img src={loginFrame} width={"100%"} style={{ height: "100%" }} />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "25px",
            width: "70%",
          }}
        >
          <p className={styles.quant_title}>Unlock Opportunities with Quant</p>
          <p className={styles.quant_desc}>
            Offer extreme personalization, bespoke research,tailored to Indian
            markets.
          </p>
        </div>
      </div>
    </div>
  );
}
