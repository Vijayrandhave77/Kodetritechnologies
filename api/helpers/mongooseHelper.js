export const generateOptions = (req) => {
  return {
    page: Number(req.query.page) || 1,
    limit: Number(req.query.count) || 15,
    customLabels: { docs: "data", totalDocs: "totalData" },
  };
};
