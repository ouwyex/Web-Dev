import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

const PRODUCTS: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'Apple iPhone 15 Pro 256GB',
    description: 'A17 Pro chip, titanium body, 48 MP camera, USB-C, and a bright 6.1-inch Super Retina XDR display.',
    price: 519990,
    rating: 4.8,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/h3b/85989783347230.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf5/h3b/85989783347230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8c/85989783380000.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h0e/85989783412768.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-titanium-112310454/'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Samsung Galaxy S24 Ultra 256GB',
    description: 'Flagship Android phone with S Pen, Galaxy AI tools, 200 MP main camera, and 6.8-inch AMOLED display.',
    price: 549990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pba/p41/86488319180830.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pba/p41/86488319180830.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p05/p40/86488319213598.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p70/p3f/86488319246368.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-256gb-chernyi-titanium-113832399/'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Xiaomi 14 12 GB / 512 GB',
    description: 'Compact flagship with Leica cameras, Snapdragon platform, fast charging, and a high-refresh AMOLED screen.',
    price: 379990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/h1d/84777144504350.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hed/h1d/84777144504350.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/84777144537118.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h6b/84777144569886.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-14-12-gb-512-gb-chernyi-117934512/'
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Google Pixel 8 Pro 128GB',
    description: 'Clean Android experience, advanced computational photography, and a sharp LTPO display.',
    price: 429990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h0d/84569201926174.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h20/h0d/84569201926174.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h74/h7d/84569201958942.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdd/h15/84569201991710.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-114834187/'
  },
  {
    id: 5,
    categoryId: 1,
    name: 'OnePlus 12 16 GB / 512 GB',
    description: 'Fast Snapdragon flagship with smooth display, large battery, and Hasselblad camera tuning.',
    price: 389990,
    rating: 4.5,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h18/84814953615390.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h17/h18/84814953615390.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4c/h0b/84814953648158.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfc/h65/84814953680926.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-chernyi-118593641/'
  },
  {
    id: 6,
    categoryId: 2,
    name: 'Apple MacBook Air 13 M2 256GB',
    description: 'Thin and silent laptop with Apple M2 chip, Liquid Retina display, and long battery life.',
    price: 469990,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p63/p73/81438592827422.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p63/p73/81438592827422.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p50/p73/81438592860190.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3d/p73/81438592892958.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-256gb-serebryanyi-102636474/'
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Apple MacBook Pro 14 M3 Pro 512GB',
    description: 'Professional laptop for coding and creative work with a bright mini-LED display and strong battery life.',
    price: 1299990,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pef/pa4/15675603.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd3/pa4/15675604.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2e3-137220943/'
  },
  {
    id: 8,
    categoryId: 2,
    name: 'ASUS TUF Gaming A15 16GB / 512GB',
    description: 'Gaming laptop with dedicated graphics, high-refresh display, and a practical cooling system.',
    price: 459990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/h87/84861147955230.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h31/h87/84861147955230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8d/h9d/84861147987998.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he5/h31/84861148020766.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa507nv-lp023-15-6-16-gb-ssd-512-gb-win-11-118202001/'
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Lenovo IdeaPad Slim 5 16GB / 512GB',
    description: 'Balanced everyday laptop with a roomy SSD, modern processor, and lightweight metal design.',
    price: 349990,
    rating: 4.5,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h0c/85015399653406.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h09/h0c/85015399653406.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h8f/85015399686174.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/h28/85015399718942.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-16iah8-16-16-gb-ssd-512-gb-win-11-119068973/'
  },
  {
    id: 10,
    categoryId: 2,
    name: 'HP Pavilion 15 16GB / 512GB',
    description: 'Comfortable mid-range laptop for study and work with solid battery life and full-size keyboard.',
    price: 329990,
    rating: 4.4,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/hfd/85082284011550.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1c/hfd/85082284011550.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h70/h56/85082284044318.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd8/hee/85082284077086.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eg3007ci-15-6-16-gb-ssd-512-gb-win-11-119525117/'
  },
  {
    id: 11,
    categoryId: 3,
    name: 'Apple AirPods Pro 2nd Gen USB-C',
    description: 'Premium wireless earbuds with active noise cancellation, adaptive audio, and MagSafe case.',
    price: 119990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2a/82232981848094.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2a/82232981848094.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p29/p2a/82232981880862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p16/p2a/82232981913630.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-magsafe-case-usb-c-belyi-107268781/'
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Sony WH-1000XM5',
    description: 'Over-ear headphones with strong noise cancelling, long battery life, and clear call quality.',
    price: 139990,
    rating: 4.8,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p2d/82394978230302.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p1f/p2d/82394978230302.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p0c/p2d/82394978263070.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf9/p2c/82394978295838.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-103406580/'
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Compact wireless earbuds with ANC, rich sound, and tight integration with Galaxy devices.',
    price: 89990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h18/he1/64387533934622.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h18/he1/64387533934622.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/hd0/64387539505182.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h42/h6f/64387545796638.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510-grafit-107045066/'
  },
  {
    id: 14,
    categoryId: 3,
    name: 'JBL Tune 770NC',
    description: 'Wireless over-ear headphones with adaptive noise cancelling and deep bass-focused sound.',
    price: 49990,
    rating: 4.5,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h01/85624724283422.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h01/85624724283422.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb9/h90/85624724316190.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h11/h29/85624724348958.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-chernyi-112478432/'
  },
  {
    id: 15,
    categoryId: 3,
    name: 'Marshall Major IV',
    description: 'Iconic on-ear headphones with signature design, long battery life, and punchy sound.',
    price: 69990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h33/63950343929886.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/h33/63950343929886.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/hf5/63950347403358.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/h0e/63950351106078.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-100829376/'
  },
  {
    id: 16,
    categoryId: 4,
    name: 'Apple iPad Air 5 10.9 256GB Wi-Fi',
    description: 'Light and powerful tablet with Apple M1 chip, Liquid Retina display, and Apple Pencil support.',
    price: 289990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p0e/80024960688158.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p88/p0e/80024960688158.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p75/p0e/80024960720926.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p62/p0e/80024960753694.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-5th-generation-10-9-256gb-wi-fi-serebryanyi-99948640/'
  },
  {
    id: 17,
    categoryId: 4,
    name: 'Apple iPad 10 10.9 64GB Wi-Fi',
    description: 'Colorful everyday tablet for study, browsing, and media with a large screen and USB-C.',
    price: 199990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h2d/67826792128542.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/h2d/67826792128542.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfc/h8e/67826798256158.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h74/h1d/67826806480926.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-64gb-wi-fi-sinii-107264402/'
  },
  {
    id: 18,
    categoryId: 4,
    name: 'Samsung Galaxy Tab S9 128GB',
    description: 'Premium Android tablet with AMOLED display, S Pen in the box, and strong performance.',
    price: 339990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h7e/83587941474334.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/h7e/83587941474334.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h87/83587941507102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8a/h22/83587941539870.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-11-8-gb-128-gb-wi-fi-bezhevyi-112687496/'
  },
  {
    id: 19,
    categoryId: 4,
    name: 'Xiaomi Pad 6 8GB / 256GB',
    description: 'Value-focused tablet with a smooth 144 Hz display, strong speakers, and slim aluminum body.',
    price: 179990,
    rating: 4.5,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h4b/83146334117918.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h4b/83146334117918.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h0c/h5a/83146334150686.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/hf5/83146334183454.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-gb-256-gb-seryi-111445781/'
  },
  {
    id: 20,
    categoryId: 4,
    name: 'Lenovo Tab P12 8GB / 128GB',
    description: 'Large screen tablet built for reading, notes, and streaming with a clean Android experience.',
    price: 159990,
    rating: 4.4,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h08/85090529796126.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he5/h08/85090529796126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h49/h49/85090529828894.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha1/he0/85090529861662.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-8-gb-128-gb-seryi-119445172/'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getCategories(): Category[] {
    return CATEGORIES.map((category) => ({ ...category }));
  }

  getProducts(): Product[] {
    return PRODUCTS.map((product) => ({
      ...product,
      images: [...product.images]
    }));
  }
}
