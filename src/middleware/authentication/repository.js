exports.getRequester = async () => {
  return {
    name: "Generic Requester",
    permissions: {
      LIST_AUTHORS: true,
      VIEW_AUTHORS: true,
      LIST_BOOKS: true,
      VIEW_BOOKS: true,
    },
  };
};
