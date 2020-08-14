const authors = [
  {
    id: "E9E2326E-069A-4459-9787-894D76813106",
    name: "J.K. Rowling",
  },
  {
    id: "84F85031-07BA-4D88-950C-88D80D06C678",
    name: "Michael Crichton",
  },
  {
    id: "1B8B13F5-6EBD-4085-9261-3B2C668418B3",
    name: "J.R.R. Tolkien",
  },
];

export const authorResolver = {
  Query: {
    authors: () => authors,
  },
};
