// List all authors in the database.
exports.listAuthors = async () => {
  // Retrieve data from a file, service or database using service clients
  // stored in the request context.
  return [
    {
      id: "123",
      name: "Joe Bloggs",
      books: [{ id: "456", name: "Just Blogging" }],
    },
  ];
};
