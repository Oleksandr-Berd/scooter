import locateIcon from "../assets/icons/locate.svg";
import scooterIcon from "../assets/icons/scooter.svg";
import rideIcon from "../assets/icons/ride.svg";

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
