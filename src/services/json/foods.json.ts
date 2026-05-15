import type { Foods } from "../../typescript/interface/foods.interface";
export const foods: Foods[] = [
  {
    id: "F101",
    name: "Cheese Burger",
    slug: "cheese-burger",
    description: "Juicy grilled burger with extra cheese.",
    restaurant: "Burger Hub",
    price: 12,
    discountPrice: 10,
    stock: 100,
    isAvailable: true,
    tags: ["burger", "fast-food", "cheese"],

    category: {
      id: "FC1",
      name: "Fast Food",
      slug: "fast-food",
      icon: "burger",
    },

    images: [
      "https://example.com/burger-1.jpg",
      "https://example.com/burger-2.jpg",
    ],

    subFoods: [
      {
        id: "SF101",
        size: "Regular",
        extras: ["Cheese"],
        price: 10,
        stock: 50,
      },
      {
        id: "SF102",
        size: "Large",
        extras: ["Cheese", "French Fries"],
        price: 15,
        stock: 30,
      },
    ],

    reviews: [
      {
        id: "FR101",
        userName: "Arjun Das",
        rating: 5,
        comment: "Very tasty and fresh burger.",
        createdAt: "2026-05-10",
      },
      {
        id: "FR102",
        userName: "Riya Sen",
        rating: 4,
        comment: "Loved the cheese flavor.",
        createdAt: "2026-05-12",
      },
    ],
  },

  {
    id: "F102",
    name: "Chicken Biryani",
    slug: "chicken-biryani",
    description: "Spicy and aromatic chicken biryani.",
    restaurant: "Royal Kitchen",
    price: 18,
    discountPrice: 16,
    stock: 80,
    isAvailable: true,
    tags: ["biryani", "rice", "spicy"],

    category: {
      id: "FC2",
      name: "Indian Food",
      slug: "indian-food",
      icon: "rice-bowl",
    },

    images: [
      "https://example.com/biryani-1.jpg",
      "https://example.com/biryani-2.jpg",
    ],

    subFoods: [
      {
        id: "SF201",
        size: "Half Plate",
        spiceLevel: "Medium",
        price: 16,
        stock: 40,
      },
      {
        id: "SF202",
        size: "Full Plate",
        spiceLevel: "High",
        price: 22,
        stock: 25,
      },
    ],

    reviews: [
      {
        id: "FR201",
        userName: "Tanvir Ali",
        rating: 5,
        comment: "Authentic taste and good quantity.",
        createdAt: "2026-05-11",
      },
      {
        id: "FR202",
        userName: "Sneha Roy",
        rating: 4,
        comment: "Chicken pieces were soft and juicy.",
        createdAt: "2026-05-13",
      },
    ],
  },
];
