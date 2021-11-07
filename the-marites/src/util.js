export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => b.active - a.active);
};
