import { v4 as uuidv4 } from "uuid";

import Card1 from "../../assets/card-1.png";
import Card2 from "../../assets/card-2.png";
import Card3 from "../../assets/card-3.png";
import Card4 from "../../assets/card-4.png";
import Card5 from "../../assets/card-5.png";
import Card6 from "../../assets/card-6.png";
import Card7 from "../../assets/card-7.png";
import Card8 from "../../assets/card-8.png";
import Card9 from "../../assets/card-9.png";
import Card10 from "../../assets/card-10.png";
import Card11 from "../../assets/card-11.png";
import Card12 from "../../assets/card-12.png";
import Card13 from "../../assets/card-13.png";
import Card14 from "../../assets/card-14.png";
import Card15 from "../../assets/card-15.png";
import Card16 from "../../assets/card-16.png";
import Card17 from "../../assets/card-17.png";
import Card18 from "../../assets/card-18.png";
import Card19 from "../../assets/card-19.png";
import Card20 from "../../assets/card-20.png";
import Card21 from "../../assets/card-21.png";
import Card22 from "../../assets/card-22.png";
import Card23 from "../../assets/card-23.png";
import Card24 from "../../assets/card-24.png";
import Card25 from "../../assets/card-25.png";
import Card26 from "../../assets/card-26.png";
import Card27 from "../../assets/card-27.png";
import Card28 from "../../assets/card-28.png";
import Card29 from "../../assets/card-29.png";
import Card30 from "../../assets/card-30.png";
import Card31 from "../../assets/card-31.png";
import Card32 from "../../assets/card-32.png";
import Card33 from "../../assets/card-33.png";

const easy = [
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Card13,
  Card14,
  Card15,
  Card16,
];

const medium = [
  ...easy,
  Card17,
  Card18,
  Card19,
  Card20,
  Card21,
  Card22,
  Card23,
  Card24,
  Card25,
];

const hard = [
  ...medium,
  Card26,
  Card27,
  Card28,
  Card29,
  Card30,
  Card31,
  Card32,
  Card33,
];

export interface CardType {
  id: string;
  matched: boolean;
  source: string;
  order?: number;
}

const generateArrImages = (images: string[]): CardType[] => {
  return [...images, ...images].map((image) => ({
    id: uuidv4(),
    matched: false,
    source: image,
    order: Math.floor(Math.random() * (images.length * 2)),
  }));
};

export const cards = {
  easy: generateArrImages(easy),
  medium: generateArrImages(medium),
  hard: generateArrImages(hard),
};
