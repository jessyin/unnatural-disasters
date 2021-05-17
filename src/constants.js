import {
  faAppleAlt,
  faBatteryHalf,
  faCar,
  faCarAlt,
  faCloudShowersHeavy,
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
  faTemperatureHigh,
  faTint,
  faTrash,
  faUtensils,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import waterBottle from "./images/water-bottle.png";
import plastic from "./images/plastic.png";
import drought from "./images/drought.png";
import hurricane from "./images/hurricane.png";

export const NON_CUSTOM_CARDS = {
  RELIEF: {
    name: "RELIEF PACK",
    description: "Survive a natural disaster. Use on yourself or someone else.",
    count: 6,
    icon: faMedkit,
  },
  DISASTER_HURRICANE: {
    name: "HURRICANE",
    description: (
      <div className="text-choose">
        <p>Choose to:</p>
        <p>1) dump all your chaos cards into the environment</p>
        <p>OR</p>
        <p>
          2) <span className="text-spinner">Spin to survive.</span>
        </p>
      </div>
    ),
    count: 2,
    icon: hurricane,
  },
  DISASTER_STORM: {
    name: "STORM",
    description: (
      <p>
        <span className="text-spinner">Spin to survive.</span>
      </p>
    ),
    count: 3,
    icon: faCloudShowersHeavy,
  },
  DISASTER_HEAT: {
    name: "HEAT WAVE",
    description: (
      <div className="text-choose">
        <p>Choose to:</p>
        <p>
          1) take the <span className="text-hit">hit</span>
        </p>
        <p>OR</p>
        <p>2) leave this card in the environment as a permanent CHAOS card.</p>
      </div>
    ),
    count: 1,
    icon: faTemperatureHigh,
  },
  DISASTER_FLOODS: {
    name: "FLOOD",
    description: (
      <p style={{ margin: 0 }}>
        <span className="text-spinner">Spin to survive. </span>
        After, discard all Order cards currently in the environment.
      </p>
    ),
    count: 2,
    icon: faWater,
  },
  DISASTER_DROUGHT: {
    name: "DROUGHT",
    description: (
      <p style={{ fontSize: "small", margin: 0 }}>
        <span className="text-spinner">Spin to survive</span> twice, both numbers must be higher
        than the counter or you are <span className="text-hit">hit</span> by the drought.
      </p>
    ),
    count: 2,
    icon: drought,
  },
  DISASTER_WILDFIRE: {
    name: "WILDFIRE",
    description: (
      <p>
        You and the player after you must <span className="text-spinner">spin to survive</span>.
      </p>
    ),
    count: 2,
    icon: faFireAlt,
  },
  FAVOR: {
    name: "HELPING HAND",
    description: "Ask another player for an order card.",
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
    name: "#CANCELLED",
    description: "Cancel culture is tough. Prevent attacks, skipping, recycling, or special cards",
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
