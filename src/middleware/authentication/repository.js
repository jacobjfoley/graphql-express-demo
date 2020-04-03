exports.getRequester = async () => {
  return {
    name: "Generic Requester",
    permissions: {
      LIST_AUTHORS: true,
      VIEW_AUTHORS: true,
    },
  };
};
