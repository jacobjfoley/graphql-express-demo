module.exports = async (request, response, next) => {
  response.locals.data = {
    authors: {
      "1": {
        id: "1",
        name: "J.K. Rowling",
        books: ["1"],
      },
      "2": {
        id: "2",
        name: "J.R.R. Tolkien",
        books: ["2"],
      },
      "3": {
        id: "3",
        name: "Roald Dahl",
        books: ["3", "4"],
      },
    },
    books: {
      "1": {
        id: "1",
        name: "Harry Potter and the Philosopher's Stone",
        author: "1",
      },
      "2": {
        id: "2",
        name: "The Hobbit",
        author: "2",
      },
      "3": {
        id: "3",
        name: "Fantastic Mr. Fox",
        author: "3",
      },
      "4": {
        id: "4",
        name: "Charlie and the Chocolate Factory",
        author: "3",
      },
    },
  };

  next();
};
