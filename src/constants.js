import {
  faAppleAlt,
  faBatteryHalf,
  faCar,
  faCarAlt,
  faCloudSunRain,
  faFireAlt,
  faGasPump,
  faGift,
  faHamburger,
  faHandPaper,
  faLightbulb,
  faMedkit,
  faRecycle,
  faSolarPanel,
  faSubway,
  faTint,
  faTrash,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import waterBottle from "./images/water-bottle.png";
import plastic from "./images/plastic.png";

export const NON_CUSTOM_CARDS = {
  RELIEF: {
    name: "RELIEF PACK",
    description: "Survive a natural disaster. Use on yourself or someone else.",
    count: 6,
    icon: faMedkit,
  },
  DISASTER: {
    name: "NATURAL DISASTER",
    description: "Spin the spinner. If your number is lower than the counter, you are dislocated.",
    count: 12,
    icon: faFireAlt,
  },
  FAVOR: {
    name: "FAVOR",
    description: "Ask another player for a card.",
    count: 4,
    icon: faGift,
  },
  FORECAST: {
    name: "FORECAST",
    description: "Look at the top three cards in the deck",
    count: 4,
    icon: faCloudSunRain,
  },
  NOPE: {
    name: "NOPE",
    description: "Cancel another player's action",
    count: 4,
    icon: faHandPaper,
  },
};

export const CUSTOM_CARDS = {
  CHAOS: {
    name: "CHAOS",
    count: 4,
  },
  ORDER: {
    name: "ORDER",
    count: 4,
  },
};

export const DEFAULT_CHAOS_CARDS = [
  {
    description: "Drive to work.",
    type: faCar,
    icon: faCarAlt,
  },
  {
    description: "Enjoy a burger.",
    type: faUtensils,
    icon: faHamburger,
  },
  {
    description: "Use single-use water bottles.",
    type: faTint,
    icon: plastic,
  },
  {
    description: "Leave the lights on when you leave the room.",
    type: faLightbulb,
    icon: faLightbulb,
  },
  {
    description: "Leave your trash on the ground.",
    type: faRecycle,
    icon: faTrash,
  },
  {
    description: "Use non-renewable energy like natural gas or oil.",
    type: faBatteryHalf,
    icon: faGasPump,
  },
];

export const DEFAULT_ORDER_CARDS = [
  {
    description: "Carpool or use public transportation.",
    type: faCar,
    icon: faSubway,
  },
  {
    description: "Reduce meat intake.",
    type: faUtensils,
    icon: faAppleAlt,
  },
  {
    description: "Use a reusable water bottle.",
    type: faTint,
    icon: waterBottle,
  },
  {
    description: "Turn off all lights when you leave the room.",
    type: faLightbulb,
    icon: faLightbulb,
  },
  {
    description: "Reduce, reuse, recylce.",
    type: faRecycle,
    icon: faRecycle,
  },
  {
    description: "Use renewable energy like solar panels",
    type: faBatteryHalf,
    icon: faSolarPanel,
  },
];
