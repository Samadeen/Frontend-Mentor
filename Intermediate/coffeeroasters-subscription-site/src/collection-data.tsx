import gran from './assets/home/desktop/image-gran-espresso.png';
import planalto from './assets/home/desktop/image-planalto.png';
import piccollo from './assets/home/desktop/image-piccollo.png';
import danche from './assets/home/desktop/image-danche.png';
import coffee from './assets/home/desktop/icon-coffee-bean.svg';
import gift from './assets/home/desktop/icon-gift.svg';
import truck from './assets/home/desktop/icon-truck.svg';
import uk from './assets/about/desktop/illustration-uk.svg';
import canada from './assets/about/desktop/illustration-canada.svg';
import australia from './assets/about/desktop/illustration-australia.svg';

interface CollectionItem {
  img: string;
  title: string;
  description: string;
}

interface ChooseItem {
  img: string;
  title: string;
  description: string;
}

interface CreateItem {
  title: string;
  description: string;
}

interface LocationItem {
  img: string;
  country: string;
  street: string;
  area: string;
  zip: string;
  phone: string;
}

export const collectionData: CollectionItem[] = [
  {
    img: gran,
    title: 'Gran Espresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience.',
  },
  {
    img: planalto,
    title: 'Planalto',
    description:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.',
  },
  {
    img: piccollo,
    title: 'Piccollo',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry.',
  },
  {
    img: danche,
    title: 'Danche',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.',
  },
];

export const chooseData: ChooseItem[] = [
  {
    img: coffee,
    title: 'Best quality',
    description:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
  },
  {
    img: gift,
    title: 'Exclusive benefits',
    description:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
  },
  {
    img: truck,
    title: 'Free shipping',
    description:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
  },
];

export const locationData: LocationItem[] = [
  {
    img: uk,
    country: 'United Kingdom',
    street: '68 Asfordby Rd',
    area: 'Alcaston',
    zip: 'SY6 1YA',
    phone: '+44 1241918425',
  },
  {
    img: canada,
    country: 'Canada',
    street: '1528  Eglinton Avenue',
    area: 'Toronto',
    zip: 'Ontario M4P 1A6',
    phone: '+1 416 485 2997',
  },
  {
    img: australia,
    country: 'Australia',
    street: '36 Swanston Street',
    area: 'Kewell',
    zip: 'Victoria',
    phone: '+61 4 9928 3629',
  },
];

export const drinkItem: CreateItem[] = [
  {
    title: 'Capsule',
    description: 'Compatible with Nespresso systems and similar brewers',
  },
  {
    title: 'Filter',
    description:
      'For pour over or drip methods like Aeropress, Chemex, and V60',
  },
  {
    title: 'Espresso',
    description:
      'Dense and finely ground beans for an intense, flavorful experience',
  },
];

export const quantityItem: CreateItem[] = [
  {
    title: '250g',
    description:
      'Perfect for the solo drinker. Yields about 12 delicious cups..',
  },
  {
    title: '500g',
    description:
      'Perfect option for a couple. Yields about 40 delectable cups.',
  },
  {
    title: '1000g',
    description:
      'Perfect for offices and events. Yields about 90 delightful cups.',
  },
];

export const typeItem: CreateItem[] = [
  {
    title: 'Single Origin',
    description:
      'Distinct, high quality coffee from a specific family-owned farm',
  },
  {
    title: 'Decaf',
    description:
      'Just like regular coffee, except the caffeine has been removed',
  },
  {
    title: 'Blended',
    description:
      'Combination of two or three dark roasted beans of organic coffees',
  },
];

export const grindItem: CreateItem[] = [
  {
    title: 'Wholebean',
    description: 'Best choice if you cherish the full sensory experience',
  },
  {
    title: 'Filter',
    description:
      'For drip or pour-over coffee methods such as V60 or Aeropress',
  },
  {
    title: 'Cafetiére',
    description: 'Course ground beans specially suited for french press coffee',
  },
];

export const deliveriesItem: CreateItem[] = [
  {
    title: 'Every week',
    description: '$7.20 per shipment. Includes free first-class shipping.',
  },
  {
    title: 'Every 2 week',
    description: '$9.60 per shipment. Includes free priority shipping.',
  },
  {
    title: 'Every month',
    description: '$12.00 per shipment. Includes free priority shipping.',
  },
];
