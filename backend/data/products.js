const products = [
  {
    name: 'Battlecreek Mug',
    image:
      'https://images.unsplash.com/photo-1617902206819-ec9955c8fa44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    brand: 'MugMug',
    category: 'mugs',
    price: 40.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Tree Mug',
    image:
      'https://images.unsplash.com/photo-1542556398-b665428620ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    brand: 'MugMug',
    category: 'mugs',
    price: 30.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Old White Blank Mug',
    image:
      'https://images.unsplash.com/photo-1495100497150-fe209c585f50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    brand: 'MugMug',
    category: 'mugs',
    price: 20.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'White Mug',
    image:
      'https://images.unsplash.com/photo-1507290243274-299e646b93da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description:
      'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
    brand: 'MugMug',
    category: 'mugs',
    price: 40.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Black Whisky Mug',
    image:
      'https://images.unsplash.com/photo-1501708881774-9e6edfc73b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    description:
      'boris nisi ut aliquip ex ea commodo consequat. Duis aute irur',
    brand: 'MugMug',
    category: 'mugs',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Flamingo Mug',
    image:
      'https://images.unsplash.com/photo-1516317518460-4deaeea07922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description:
      'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
    brand: 'MugMug',
    category: 'mugs',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'White Coffee Mug',
    image:
      'https://images.unsplash.com/photo-1512441294539-d74b41132524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description:
      'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
    brand: 'MugMug',
    category: 'mugs',
    price: 10.99,
    countInStock: 7,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'White Long Coffee Mug',
    image:
      'https://images.unsplash.com/photo-1516390118834-21602d501886?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=807&q=80',
    description:
      'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
    brand: 'MugMug',
    category: 'mugs',
    price: 15.99,
    countInStock: 10,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: 'Coffee Begin Mug',
    image:
      'https://images.unsplash.com/photo-1504888527749-e68244b4d3d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description:
      'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
    brand: 'MugMug',
    category: 'mugs',
    price: 16,
    countInStock: 4,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: 'Grey Coffee Mug',
    image:
      'https://images.unsplash.com/photo-1577819671984-124b026a81ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description:
      'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
    brand: 'MugMug',
    category: 'mugs',
    price: 7.99,
    countInStock: 5,
    rating: 4,
    numReviews: 4,
  },
];

module.exports = products;
