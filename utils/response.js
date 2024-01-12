export const response = (res, status, data, message) => {
  res.status(status).json({ data, message });
};
