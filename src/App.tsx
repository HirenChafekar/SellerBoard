import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { App as AntdApp, theme } from "antd";
import { ConfigProvider } from "antd";
import BaseRouter from "./routers/ BaseRouter";
import { componentTheme } from "./theme/componentTheme";
import { AppContext, useAppSelector } from "./App";
import { darkTheme, lightTheme } from "./theme/themeColor";


const App = () => {
  const { contextData } = useAppSelector();
  const { appTheme = "light" } = contextData || {};

  if (!contextData) {
    return (
      <div style={{ height: "100vh" }}>loading{/* <LoadingWrapper /> */}</div>
    );
  }
  return (
    <AppContext.Provider value={contextData}>
        <ConfigProvider
          theme={{
            algorithm:
              appTheme === "light"
                ? theme.defaultAlgorithm
                : theme.darkAlgorithm,
            components: componentTheme,
            token: appTheme === "light" ? lightTheme : darkTheme,
          }}
        >
          <div
            style={{
              backgroundColor: appTheme === "light" ? "white" : "black",
            }}
          >
            <AntdApp>
              <BrowserRouter>
                <BaseRouter />
              </BrowserRouter>
            </AntdApp>
          </div>
        </ConfigProvider>
    </AppContext.Provider>
  );
};

export default App;
