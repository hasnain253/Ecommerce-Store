import wirlessMouse from "../assets/images/wirlessMouse.jpg";
import laptopStand from "../assets/images/laptop.png";
import Monitor from "../assets/images/4kmonitor.jpeg";
import SmartWatch from "../assets/images/smartwatch.png";
import BluetoothSpeaker from "../assets/images/bluetoothspeaker.jpeg";
import DeskLamp from "../assets/images/desklamp.jpeg";
import ExternalHard from "../assets/images/externalHard.jpg";
import KeyBoardCover from "../assets/images/keyboardCover.jpg";
import ChargerCabel from "../assets/images/Charging-Cable.png";
import PortableFan from "../assets/images/portablefan.jpg";

export const userOrders = [
  {
    orderId: "ORD001",
    userId: "USR001",
    date: "2024-08-01T10:15:30",
    items: [
      {
        productId: "PRD001",
        productName: "Wireless Mouse",
        quantity: 2,
        price: 25.99,
        image: wirlessMouse,
      },
    ],
    totalAmount: 137.48,
    status: "Shipped",
  },
  {
    orderId: "ORD002",
    userId: "USR002",
    date: "2024-08-07T14:15:30",
    items: [
      {
        productId: "PRD011",
        productName: "Laptop Stand",
        quantity: 2,
        price: 39.99,
        image: laptopStand,
      },
    ],
    totalAmount: 79.98,
    status: "Processing",
  },
  {
    orderId: "ORD003",
    userId: "USR003",
    date: "2024-08-04T18:35:25",
    items: [
      {
        productId: "PRD006",
        productName: "4K Monitor",
        quantity: 2,
        price: 299.99,
        image: Monitor,
      },
    ],
    totalAmount: 749.97,
    status: "Pending",
  },
  {
    orderId: "ORD004",
    userId: "USR004",
    date: "2024-08-06T11:05:45",
    items: [
      {
        productId: "PRD009",
        productName: "Smartwatch",
        quantity: 1,
        price: 199.99,
        image: SmartWatch,
      },
    ],
    totalAmount: 329.98,
    status: "Shipped",
  },
  {
    orderId: "ORD005",
    userId: "USR005",
    date: "2024-08-05T15:22:10",
    items: [
      {
        productId: "PRD008",
        productName: "Bluetooth Speaker",
        quantity: 1,
        price: 89.99,
        image: BluetoothSpeaker,
      },
    ],
    totalAmount: 89.99,
    status: "Completed",
  },
  {
    orderId: "ORD006",
    userId: "USR007",
    date: "2024-08-08T09:30:25",
    items: [
      {
        productId: "PRD012",
        productName: "Desk Lamp",
        quantity: 1,
        price: 49.99,
        image: DeskLamp,
      },
    ],
    totalAmount: 65.98,
    status: "Delivered",
  },
  {
    orderId: "ORD007",
    userId: "USR008",
    date: "2024-08-09T16:45:50",
    items: [
      {
        productId: "PRD014",
        productName: "External Hard Drive",
        quantity: 1,
        price: 139.99,
        image: ExternalHard,
      },
    ],
    totalAmount: 139.99,
    status: "Completed",
  },
  {
    orderId: "ORD008",
    userId: "USR009",
    date: "2024-08-10T12:00:00",
    items: [
      {
        productId: "PRD015",
        productName: "Keyboard Cover",
        quantity: 1,
        price: 12.99,
        image: KeyBoardCover,
      },
    ],
    totalAmount: 72.98,
    status: "Pending",
  },
  {
    orderId: "ORD009",
    userId: "USR010",
    date: "2024-08-11T20:10:35",
    items: [
      {
        productId: "PRD017",
        productName: "Charger Cable",
        quantity: 2,
        price: 14.99,
        image: ChargerCabel,
      },
    ],
    totalAmount: 79.97,
    status: "Processing",
  },
  {
    orderId: "ORD010",
    userId: "USR011",
    date: "2024-08-12T10:25:40",
    items: [
      {
        productId: "PRD019",
        productName: "Portable Fan",
        quantity: 1,
        price: 24.99,
        image: PortableFan,
      },
    ],
    totalAmount: 59.98,
    status: "Delivered",
  },
];
