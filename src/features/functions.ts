//Sort by Property
export const sortByProperty = <T extends Record<string, string>>(
  arr: T[],
  property: keyof T
): T[] => {
  return arr?.slice().sort((a, b) => {
    const propA = a[property]?.toUpperCase();
    const propB = b[property]?.toUpperCase();
    if (propA < propB) {
      return -1;
    }
    if (propA > propB) {
      return 1;
    }
    return 0;
  });
};

//Sort by type
export const sortByType = <T extends { type: string }>(data: T[]): T[] => {
  return data?.slice().sort((a, b) => {
    const typeA = a.type.toUpperCase();
    const typeB = b.type.toUpperCase();

    if (typeA < typeB) {
      return -1;
    }
    if (typeA > typeB) {
      return 1;
    }
    return 0;
  });
};
