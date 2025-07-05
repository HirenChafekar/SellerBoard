// interfaces/initial.ts

export interface ITradeLog {
  key: string | number;
  event_name: string;
  error: string;
  sell_buy : string;
  count : number;
  symbols: string[];
  client_id: string;
  user_id: string;
  timestamp: string;
}

export interface IContextProps {
  appTheme: string; // 'light' or 'dark'
  setAppTheme: (theme: string) => void;
}