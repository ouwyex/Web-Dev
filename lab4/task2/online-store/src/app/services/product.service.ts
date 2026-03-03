import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Apple iPhone 15 Pro 256GB',
        description: 'Смартфон с чипом A17 Pro, камерой 48 МП и титановым корпусом. Экран Super Retina XDR 6.1", поддержка USB-C и Action Button.',
        price: 519990,
        rating: 4.8,
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
        name: 'Samsung Galaxy S24 Ultra 256GB',
        description: 'Флагманский смартфон с встроенным S Pen, камерой 200 МП и экраном Dynamic AMOLED 2X 6.8". Поддержка Galaxy AI и зум 100x.',
        price: 549990,
        rating: 4.7,
        image: 'data:image/jpeg;base64,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',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pba/p41/86488319180830.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p05/p40/86488319213598.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p70/p3f/86488319246368.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-256gb-chernyi-titanium-113832399/'
      },
      {
        id: 3,
        name: 'Apple MacBook Air 13" M2 256GB',
        description: 'Ультратонкий ноутбук с чипом M2, до 18 часов автономной работы и дисплеем Liquid Retina. Весит всего 1.24 кг, без вентилятора.',
        price: 469990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p63/p73/81438592827422.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p63/p73/81438592827422.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p50/p73/81438592860190.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p3d/p73/81438592892958.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-256gb-serebryanyi-102636474/'
      },
      {
        id: 4,
        name: 'Sony PlayStation 5 Slim',
        description: 'Игровая консоль нового поколения с SSD на 1 ТБ, поддержкой 4K и трассировкой лучей. Новый компактный дизайн, тише и легче оригинала.',
        price: 279990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p43/p60/85959296483358.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p43/p60/85959296483358.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p30/p60/85959296516126.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p1d/p60/85959296548896.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-белый-112258406/'
      },
      {
        id: 5,
        name: 'Apple AirPods Pro 2nd Gen',
        description: 'Беспроводные наушники с активным шумоподавлением H2, адаптивным звуком и до 30 часов работы с чехлом. Поддержка MagSafe и Lossless Audio.',
        price: 119990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2a/82232981848094.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2a/82232981848094.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p29/p2a/82232981880862.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p16/p2a/82232981913630.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-magsafe-case-usb-c-белый-107268781/'
      },
      {
        id: 6,
        name: 'Samsung 55" QLED 4K Smart TV',
        description: 'Телевизор с технологией Quantum Dot, процессором Neo Quantum и поддержкой Dolby Atmos. Операционная система Tizen с доступом к стриминговым сервисам.',
        price: 319990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p58/pb5/85362700025886.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p58/pb5/85362700025886.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p45/pb5/85362700058654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p32/pb5/85362700091424.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-55-qe55q80cauxce-chernyi-111164726/'
      },
      {
        id: 7,
        name: 'DJI Mini 4 Pro',
        description: 'Квадрокоптер весом до 249г с камерой 4K/60fps и HDR-видео. Всенаправленное обнаружение препятствий, до 34 минут полёта.',
        price: 349990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p1e/pb5/86082461433886.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p1e/pb5/86082461433886.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0b/pb5/86082461466654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/pb4/86082461499424.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dji-mini-4-pro-fly-more-combo-rc-2-серый-113168897/'
      },
      {
        id: 8,
        name: 'Dyson V15 Detect Absolute',
        description: 'Беспроводной пылесос с лазерным обнаружением пыли и пьезодатчиком для измерения всасываемых частиц. До 60 минут работы, 5 режимов мощности.',
        price: 289990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p5d/p8f/83765428011038.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p5d/p8f/83765428011038.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4a/p8f/83765428043806.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p37/p8f/83765428076574.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-zolotistyi-109007703/'
      },
      {
        id: 9,
        name: 'iPad Air 5th Gen 256GB Wi-Fi',
        description: 'Планшет с чипом M1, дисплеем Liquid Retina 10.9" и поддержкой Apple Pencil 2-го поколения. Разблокировка по Touch ID на кнопке питания.',
        price: 289990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p0e/80024960688158.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p88/p0e/80024960688158.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p75/p0e/80024960720926.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p62/p0e/80024960753694.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-5th-generation-10-9-256gb-wi-fi-serebryanyi-99948640/'
      },
      {
        id: 10,
        name: 'Xiaomi Robot Vacuum X10+',
        description: 'Робот-пылесос с лазерной навигацией LDS, мощностью всасывания 4000 Па и самоочисткой базы. Функции влажной уборки и картографирования нескольких этажей.',
        price: 179990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p99/84949481586718.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p72/p99/84949481586718.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p5f/p99/84949481619486.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4c/p99/84949481652254.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-plus-belyi-112108454/'
      },
      {
        id: 11,
        name: 'Sony WH-1000XM5',
        description: 'Полноразмерные наушники с лучшим в классе шумоподавлением и 8 микрофонами. До 30 часов автономной работы, быстрая зарядка 3 минуты = 3 часа.',
        price: 139990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p2d/82394978230302.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p1f/p2d/82394978230302.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0c/p2d/82394978263070.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf9/p2c/82394978295838.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-103406580/'
      },
      {
        id: 12,
        name: 'GoPro HERO12 Black',
        description: 'Экшн-камера со стабилизацией HyperSmooth 6.0 и съёмкой 5.3K/60fps. Водонепроницаемость до 10 м, Ultra Wide 177°, HDR фото и видео.',
        price: 159990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p7b/p93/85659042562078.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p7b/p93/85659042562078.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p68/p93/85659042594846.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p55/p93/85659042627616.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/gopro-hero12-black-chernyi-112096888/'
      }
    ];
  }
}
