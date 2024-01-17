/**
 * Calculate a ttl for queries whose response will change when the date changes,
 * such as those that contain the user's current phase or cycle day.
 *
 * @param ttl - Original time to live for the cache in milliseconds.
 * @returns The time to live in milliseconds, respecting the end of the day.
 */
export const getTtlRespectingDayChange = (ttl: number, date?: Date) => {
  const msUntilEndOfDay = millisecondsUntilEndOfDay(date);

  return ttl > msUntilEndOfDay ? msUntilEndOfDay : ttl;
};

export const millisecondsUntilEndOfDay = (date: Date = new Date()) => {
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  return (24 * 60 * 60 - h * 60 * 60 - m * 60 - s) * 1000;
};

/**
 * Generates React Query cache options based on a time to live (in milliseconds)
 *
 * @param ttl - The time to live for the cache in milliseconds.
 */
export const getReactQueryCacheTtl = (ttl: number) => ({
  staleTime: ttl,
  cacheTime: ttl,
});
