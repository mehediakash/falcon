export const fakeProduct = {
  name: "Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt",
  rating: 4.7,
  reviews: 2254,
  image: {
    "1": {
      url: "https://server.tuffersbd.com/uploads/products/products-1747322558307-507180200.jpg"
    }
  },
  variations: [
    {
      id: "fake-var-1",
      discount_price: 1139.33,
      image: "https://server.tuffersbd.com/uploads/products/products-1747322558308-816810684.jpg",
      variation_attributes: {
        color: "Navy Blue",
        size: "M"
      }
    },
    {
      id: "fake-var-2",
      discount_price: 1250.00,
      image: "https://server.tuffersbd.com/uploads/products/products-1747322558309-156127508.jpg",
      variation_attributes: {
        color: "Gray",
        size: "L"
      }
    },
    {
      id: "fake-var-3",
      discount_price: 1250.00,
      image: "https://server.tuffersbd.com/uploads/products/products-1747322558309-593637869.jpg",
      variation_attributes: {
        color: "Gray",
        size: "L"
      }
    }
    ,
    {
      id: "fake-var-4",
      discount_price: 1250.00,
      image: "https://server.tuffersbd.com/uploads/products/products-1747396980784-702654318.jpg",
      variation_attributes: {
        color: "Gray",
        size: "L"
      }
    },
    {
      id: "fake-var-5",
      discount_price: 1250.00,
      image: "https://server.tuffersbd.com/uploads/products/products-1747396980785-151358076.jpg",
      variation_attributes: {
        color: "Gray",
        size: "L"
      }
    }
  ],
  product_detail: {
    discount_price: 1139.33,
    variation_attributes: {
      color: "Navy Blue",
      size: "M"
    }
  },
  colors: ["Navy Blue", "Green", "White", "Gray"],
  sizes: ["XS", "S", "M", "L", "XL"],
  description: `Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays.`,
  specifications: [
    "GMP Cosmetic Good Manufacturing Practice",
    "Cruelty Free",
    "No Animal Testing",
    "Zempla Global Standard",
    "Comply with Global Standard"
  ]
};

export  const fakeCategories = [
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      {
        id: 11,
        name: "Mobile Phones",
        subchilds: [{ id: 111, name: "Smartphones" }, { id: 112, name: "Feature Phones" }]
      },
      {
        id: 12,
        name: "Computers",
        subchilds: [{ id: 121, name: "Laptops" }, { id: 122, name: "Desktops" }]
      }
    ]
  },
  {
    id: 2,
    name: "Fashion",
    subcategories: [
      {
        id: 21,
        name: "Men",
        subchilds: [{ id: 211, name: "Shirts" }, { id: 212, name: "Pants" }]
      },
      {
        id: 22,
        name: "Women",
        subchilds: [{ id: 221, name: "Dresses" }, { id: 222, name: "Tops" }]
      }
    ]
  },
  {
    id: 3,
    name: "Home Appliances",
    subcategories: []
  },
  {
    id: 4,
    name: "Books",
    subcategories: []
  },
  {
    id: 5,
    name: "Groceries",
    subcategories: []
  },
  {
    id: 6,
    name: "Home Appliances",
    subcategories: []
  },
  {
    id: 7,
    name: "Books",
    subcategories: []
  },
  {
    id: 8,
    name: "Groceries",
    subcategories: []
  }
];

export const descriptionText = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

export const specificationItems = [
  "GMP Cosmetic Good Manufacturing Practice",
  "Cruelty Free",
  "No Animal Testing",
  "Zempia Global Standard",
  "Comply with Global Standard"
];