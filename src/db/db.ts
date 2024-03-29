import locateIcon from "../assets/icons/locate.svg";
import scooterIcon from "../assets/icons/scooter.svg";
import rideIcon from "../assets/icons/ride.svg";

import homeNavImg1 from "../assets/images/telemetry.jpg";
import homeNavImg2 from "../assets/images/near-you.jpg";
import homeNavImg3 from "../assets/images/payments.jpg";

import ourTech from "../assets/images/our-tech.jpg";
import ourIntegrity from "../assets/images/our-integrity.jpg";
import ourCommunity from "../assets/images/our-community.jpg";

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

export const navBar = [
  {
    id: 1,
    name: "About",
    path: "about",
  },
  {
    id: 2,
    name: "Location",
    path: "location",
  },
  {
    id: 3,
    name: "Careers",
    path: "careers",
  },
];

export const values = [
  {
    id: 1,
    img: ourTech,
    name: "Our tech",
    body: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    id:2,
    img:ourIntegrity,
    name:"Our integrity",
    body:"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
  },
  {
    id:3,
    img:ourCommunity,
    name:"Our community",
    body:"We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
  }
];

export const questions = [
  {
    id:1,
    category:"How it works",
    question:"How do I download the app?",
    answer:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
  },
  {
    id:2,
    question:"Can I find a nearby Scoots?",
    category:"How it works",
    answer:"Yes, You can. Use location section"
  },
  {
    id:3,
    question:"Do I need a license to ride?",
    category:"How it works",
    answer:"No, You don't need a license to ride a scooter."
  },
  {
    id:4,
    question:"Should I wear a helmet?",
    category:"Safe driving",
    answer:"Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
  },
  {
    id:5,
    question:"How about the rules & regulations?",
    category:"Safe driving",
    answer:"Please, explore Your local rules and regulations"
  },
  {
    id: 6,
    question:"What if I damage my Scoot?",
    category:"Safe driving",
    answer:"You will repay all the sum of damage!"
  }
]

export const vacancies = [
  {
    id:1,
    vacancy:"General Manager",
    address:"Jakarta, Indonesia"
  },
  {
    id:2,
    vacancy:"UI/UX Designer",
    address:"Yokohama, Japan"
  },
  {
    id:3,
    vacancy:"Blog Content Copywriter",
    address:"New York, United States"
  },
  {
    id:4,
    vacancy:"Graphic Designer",
    address:"New York, United States"
  },
  {
    id:5,
    vacancy:"Fleet Supervisor",
    address:"Jakarta, Indonesia"
  },
  {
    id:6,
    vacancy:"UX Analyst",
    address:"London, United Kingdom"
  }
]

export const locations = [
  {
    id:1,
    city:"New York"
  },
  {
    id:2,
    city:"London"
  },
  {
    id:3,
    city:"Jakarta"
  },
  {
    id:4,
    city:"Yokohama"
  }
]