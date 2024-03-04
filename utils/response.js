export const response = (
  res,
  status,
  data,
  message,
  totalItems,
  totalPages,
  currentPage
) => {
  const pagination = {
    totalItems,
    totalPages,
    currentPage,
  };
  return res.status(status).json({ data, message, pagination });
};
