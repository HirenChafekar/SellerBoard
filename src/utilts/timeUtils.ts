import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const getDateFromDateString = (dateString: string) => {
  return dayjs(dateString).format("DD/MM/YYYY");
};

export const dateToFullDate = ({
  date,
  format,
  startOrEnd = "",
  timezone: tz = null,
}: {
  date: string | Date;
  format?: string;
  startOrEnd?: "start" | "end" | "";
  timezone?: string | null;
}) => {
  let dayjsObj = tz ? dayjs.tz(date, format, tz) : dayjs(date, format);

  switch (startOrEnd) {
    case "start":
      return dayjsObj.startOf("day").format();
    case "end":
      return dayjsObj.endOf("day").format();
    default:
      return dayjsObj.format(format || "YYYY-MM-DDTHH:mm:ssZ"); // ✅ fallback
  }
};
