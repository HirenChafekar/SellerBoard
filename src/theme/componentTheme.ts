interface componentTheme {
    Button: {
      controlHeight: number;
      paddingContentHorizontal: number;
      borderRadius?: number;
    };
    Menu: {
      darkItemBg: string;
      colorBgContainer: string;
      colorBgElevated: string;
      iconMarginInlineEnd: number;
      darkItemSelectedBg: string;
      darkSubMenuItemBg: string;
      darkItemHoverBg: string;
      darkItemColor: string;
      activeBarBorderWidth: number;
    };
    Drawer: {
      lineWidth: number;
    };
    Typography: {
      fontSizeHeading1: number;
      fontSizeHeading5: number;
      fontFamilyCode: string;
    };
    Table: {
      headerBg: string;
      headerBorderRadius: number;
      headerSortActiveBg: string;
      cellPaddingBlock: number;
      padding: number;
    };
    Tag: {
      colorSuccessBorder: string;
      colorErrorBorder: string;
      paddingXXS: number;
      lineType: string;
    };
    Progress: {
      circleTextColor: string;
    };
    Input: {
      controlHeight: number;
      addonBg: string;
    };
    Select: {
      controlHeight: number,
    };
    DatePicker: {
      controlHeight: number,
    },
    InputNumber: {
      controlHeight: number,
    }
  }
  
  export const componentTheme: componentTheme = {
    Button: {
      controlHeight: 40,
      paddingContentHorizontal: 16,
      borderRadius: 6,
    },
    Menu: {
      darkItemBg: "transparent",
      colorBgContainer: "rgba(255, 255, 255, 0)",
      colorBgElevated: "rgba(255, 255, 255, 0)",
      iconMarginInlineEnd: 12,
      darkItemSelectedBg: "#ffffff29",
      darkSubMenuItemBg: 'transparent',
      darkItemHoverBg: "#ffffff17",
      darkItemColor: "#FFFFFF",
      activeBarBorderWidth: 0,
    },
    Typography: {
      fontSizeHeading1: 48,
      fontSizeHeading5: 18,
      fontFamilyCode: "Inter",
    },
    Input: {
      controlHeight: 40,
      addonBg: "#E1E4EA"
    },
    Select: {
      controlHeight: 40,
    },
    DatePicker: {
      controlHeight: 40,
    },
    Table: {
      headerBg: "rgba(242, 244, 247, 1)",
      headerBorderRadius: 6,
      headerSortActiveBg: "rgba(242, 244, 247, 1)",
      cellPaddingBlock: 12,
      padding: 16,
    },
    Tag: {
      colorSuccessBorder: "transparent",
      colorErrorBorder: "transparent",
      paddingXXS: 2,
      lineType: "none"
    },
    Progress: {
      circleTextColor: "rgba(20,99,255,1)",
    },
    Drawer: {
      lineWidth: 0,
    },
    InputNumber: {
      controlHeight: 40,
    }
  };
  