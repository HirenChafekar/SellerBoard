import styles from "../../assets/scss/login.module.scss";
import { App, Button, Form, Input } from "antd";
import { FieldLabel } from "../../components/FieldLabel.tsx";
import { FieldType } from "../../interfaces/login.ts";
import logoImage from "../../assets/images/logo.png";
import loginFrame from "../../assets/images/login_frame.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Login() {
  const navigate = useNavigate();
  const { message } = App.useApp();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/sellerboard/home");
    }
  }, [navigate]);

  // Dummy credentials
  const dummyUsers = [
    { username: "test1@example.com", password: "password1" },
    { username: "test2@example.com", password: "password2" },
    { username: "admin@example.com", password: "admin123" },
    { username: "hiren@gmail.com", password: "test" },
  ];

  const onFinish = (values: FieldType) => {
    const found = dummyUsers.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );
    if (found) {
      // Generate a random accessToken and store in localStorage
      const accessToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem("accessToken", accessToken);
      navigate("/sellerboard/home");
    } else {
      message.error("Wrong Credentials!");
    }
  };

  return (
    <div
      className={styles.login_container}
    >
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
          <p className={styles.quant_title}>Your One-Stop Solution to Career Success</p>
          <p className={styles.quant_desc}>
            We combine AI-powered guidance, personalized learning paths, and expert insights to help you reach your professional aspirations.
          </p>
        </div>
      </div>
      <div
        className={styles.login_container_left}
        style={{ height: "100vh", position:"relative" }}
      >
        <div style={{ display: "flex", flexDirection: "column", rowGap:"24px"}}>
          <div style={{display:"flex", justifyContent:"center"}}>
            <img src={logoImage} style={{ height: "60px" }} />
          </div>
          <div style={{display:"flex", flexDirection:"column", rowGap:"4px"}}>
            <p className={styles.login_title}>Sign in to Seller Board </p>
            <span className={styles.login_subtitle}>Supercharge your Amazon store</span>
          </div>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
      
    </div>
  );
}
