const basePath =
  process.env.NODE_ENV === "production" ? "/sneaker-vault" : "";

export const sneakers = [
  { id: 1, name: "Air Max 95", price: 150, image: `${basePath}/am95.png` },
  { id: 2, name: "Jordan 4", price: 300, image: `${basePath}/j4.png` },
  { id: 3, name: "Jordan 1", price: 280, image: `${basePath}/j1.png` },
  { id: 4, name: "Yeezy Boost 350", price: 220, image: `${basePath}/yeezy350.png` },
  { id: 5, name: "Yeezy Boost 700", price: 300, image: `${basePath}/yeezy700.png` },
  { id: 6, name: "Nike Dunk Low", price: 150, image: `${basePath}/dunklow.png` },
  { id: 7, name: "Nike Air Force 1", price: 160, image: `${basePath}/af1.png` },
  { id: 8, name: "Adidas Superstar", price: 85, image: `${basePath}/superstar.png` },
  { id: 9, name: "Nike Shox TL", price: 185, image: `${basePath}/shox.png` },
  { id: 10, name: "Jordan 6", price: 300, image: `${basePath}/j6.png` },
  { id: 11, name: "Jordan 11", price: 300, image: `${basePath}/j11.png` },
  { id: 12, name: "Jordan 3", price: 140, image: `${basePath}/j3.png` },
];