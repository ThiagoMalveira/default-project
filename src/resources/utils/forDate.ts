import dayjs from "dayjs";
import "dayjs/locale/en";
import { months } from "@resources/helpers/utils";

export const formatStringDate = (date: string, dateFormat = "DD/MM/YYYY") => {
  const dt = dayjs(date?.split("T")[0] || date);

  return dayjs(dt).format(dateFormat);
};

export const formatMonthYearDate = (dateStr: string) => {
  const dt = dayjs(dateStr?.split("T")[0]);

  return `${months[dt.get("month")]} ${dt.get("year")}`;
};
