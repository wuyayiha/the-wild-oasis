//differenceInDays用于计算两个日期之间的天数差异，它接受两个参数，分别是两个日期对象或日期字符串，然后返回第一个日期和第二个日期之间的天数差异。如果第一个日期早于第二个日期，则返回一个正数；如果第一个日期晚于第二个日期，则返回一个负数；如果两个日期相等，则返回0。
//formatDistance用于以可读的方式格式化两个日期之间的时间间隔。它接受两个参数，分别是两个日期对象或日期字符串，以及一个可选的选项对象。然后返回一个字符串，表示两个日期之间的时间间隔，例如："3 days ago"（3 天前）、"5 months"（5 个月）等。
//parseISO用于将 ISO 8601 格式的日期字符串解析为 JavaScript 的 Date 对象。
import { differenceInDays, formatDistance, parseISO } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
