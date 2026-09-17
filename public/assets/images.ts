export interface Product {
  id: number;
  title: string;
  background: string;
  productImages: string[];
}

export const galleryImages: Product[] = [
  {
    id: 1,
    title: "50-100w High Bay Glass Housing",

    background: "/products/background-light-1.jpg",

    productImages: [
        "/products/hover-1.png",
        "/products/hover-2.png",
        "/products/hover-3.png",
        "/products/hover-4.png",
        "/products/hover-5.png",
        "/products/hover-6.png",
    ],
  },
]