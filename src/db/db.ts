import locateIcon from "../assets/icons/locate.svg";
import scooterIcon from "../assets/icons/scooter.svg";
import rideIcon from "../assets/icons/ride.svg";

import homeNavImg1 from "../assets/images/telemetry.jpg";
import homeNavImg2 from "../assets/images/near-you.jpg";
import homeNavImg3 from "../assets/images/payments.jpg";

export const manualItems = [
  {
    id: 1,
    name: "Locate with app",
    body: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
    icon: locateIcon,
  },
  {
    id: 2,
    name: "Pick your scooter",
    body: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
    icon: scooterIcon,
  },
  {
    id: 3,
    name: "Enjoy the ride",
    body: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
    icon: rideIcon,
  },
];

export const homeNav = [
  {
    id: 1,
    name: "Easy to use riding telemetry",
    body: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    path: "about",
    img: homeNavImg1,
  },
  {
    id: 2,
    name: "Coming to a city near you",
    body: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
    path: "location",
    img: homeNavImg2,
  },
  {
    id: 3,
    name: "Zero hassle payments",
    body: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
    path: "about",
    img: homeNavImg3,
  },
];
