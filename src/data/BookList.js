const currentBooks = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    category: "Science Fiction",
    description:
      "A dystopian novel set in a totalitarian society where the government controls every aspect of people's lives. Winston Smith struggles to find freedom and truth under constant surveillance.",
    image: `${process.env.PUBLIC_URL}/BookCovers/1984.jpg`,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    category: "Classic",
    description:
      "A story about justice, racism, and childhood in the American South. Through the eyes of Scout Finch, readers witness her father's fight to defend an innocent man.",
    image: `${process.env.PUBLIC_URL}/BookCovers/To Kill A MockingBird.jpg`,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    category: "Classic",
    description:
      "Set during the Roaring Twenties, this novel follows Jay Gatsby and his obsession with wealth, love, and the American Dream. It explores ambition, social class, and disillusionment.",
    image: `${process.env.PUBLIC_URL}/BookCovers/The Great Gatsby.jpg`,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 8.99,
    category: "Romance",
    description:
      "Elizabeth Bennet navigates relationships, family expectations, and social class in nineteenth-century England. Her complicated relationship with Mr. Darcy challenges her first impressions.",
    image: `${process.env.PUBLIC_URL}/BookCovers/Pride and Prejudice.jpg`,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 14.99,
    category: "Fantasy",
    description:
      "Bilbo Baggins, a peaceful hobbit, joins a group of dwarves on an unexpected adventure to reclaim their lost kingdom. Along the journey, he encounters dangerous creatures and discovers his own courage.",
    image: `${process.env.PUBLIC_URL}/BookCovers/The Hobbit.jpg`,
  },
  {
    id: 6,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 11.49,
    category: "Science Fiction",
    description:
      "This novel imagines a futuristic society where technology, conditioning, and artificial happiness control human life. It questions freedom, individuality, and the cost of a perfect society.",
    image: `${process.env.PUBLIC_URL}/BookCovers/Brave New World.jpg`,
  },
  {
    id: 7,
    title: "Moby-Dick",
    author: "Herman Melville",
    price: 13.99,
    category: "Adventure",
    description:
      "Captain Ahab leads his crew aboard the Pequod on a dangerous hunt for a giant white whale. The story explores obsession, revenge, nature, and humanity.",
    image: `${process.env.PUBLIC_URL}/BookCovers/Moby-Dick.jpg`,
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 10.49,
    category: "Classic",
    description:
      "Holden Caulfield narrates his experiences in New York after leaving school. The novel explores teenage identity, loneliness, alienation, and the difficulties of growing up.",
    image: `${process.env.PUBLIC_URL}/BookCovers/The Catcher in the Rye.jpg`,
  },
];

export default currentBooks;
