const books = [
  {
    id: "36989EF7-1A82-493E-8542-A348F5E027FA",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    id: "4E2651A5-2B93-4CB6-849B-98E17A177E87",
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
  {
    id: "8B7E84DF-1C6C-4C5A-B46C-8B88ACEBB53E",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
];

export const bookResolver = {
  Query: {
    books: () => books,
  },
};
