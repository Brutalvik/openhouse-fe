//Sort
export const sortByProperty = <T extends Record<string, string>>(
  arr: T[],
  property: keyof T
): T[] => {
  return arr?.slice().sort((a, b) => {
    const propA = a[property].toUpperCase();
    const propB = b[property].toUpperCase();
    if (propA < propB) {
      return -1;
    }
    if (propA > propB) {
      return 1;
    }
    return 0;
  });
};
