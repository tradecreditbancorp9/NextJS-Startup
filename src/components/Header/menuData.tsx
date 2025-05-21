"use client";
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
    submenu:[
      {
        id: 41,
        title: "Our Story",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Leadership Teams",
        path: "/about",
        newTab: false,
      },
      {
        id: 43,
        title: "Mission & Values",
        path: "/about",
        newTab: false,
      },
      {
        id: 44,
        title: "Compliance & Licenses",
        path: "/about",
        newTab: false,
      },
      

    ]
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
    submenu: [
      {
        id: 412,
        title: "Industry News",
        path: "/blog",
        newTab: false,
      },
      {
        id: 423,
        title: "Trade Finance Insights",
        path: "/blog",
        newTab: false,
      },
      {
        id: 434,
        title: "Compliance Updates",
        path: "/blog",
        newTab: false,
      },
      
    ]
  },
  {
    id: 3,
    title: "Support",
    path: "/support",
    newTab: false,
    submenu: [
      {
        id: 412,
        title: "FAQs",
        path: "/support",
        newTab: false,
      },
      {
        id: 423,
        title: "Customer Help Desk",
        path: "/support",
        newTab: false,
      },
      {
        id: 434,
        title: "Contact Us",
        path: "/support",
        newTab: false,
      },
      {
        id: 445,
        title: "Submit a Request",
        path: "/support",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu:[

      {
        id: 411,
        title: "Banking Services",
        path: null,
        newTab: false,
        submenu: [
      {
        id: 412,
        title: "Card Issueing",
        path: "/contact",
        newTab: false,
      },
      {
        id: 423,
        title: "Crypto Cards",
        path: "/contact",
        newTab: false,
      },
      {
        id: 434,
        title: "Prepaid / Debit / Credit cards",
        path: "/contact",
        newTab: false,
      },
      {
        id: 445,
        title: "Gift Cards",
        path: "/contact",
        newTab: false,
      },
      {
        id: 446,
        title: "Corporate Expense Cards",
        path: "/contact",
        newTab: false,
      },
      {
        id: 447,
        title: "Business IBANs",
        path: "/contact",
        newTab: false,
      },
      
    ],
      },
      {
        id: 428,
        title: "Trade Services",
        path: "/contact",
        newTab: null,
        submenu: [
      {
        id: 419,
        title: "Letters Of Credit",
        path: "/contact",
        newTab: false,
      },
      {
        id: 4252,
        title:"Standby Letter Of Credit",
        path: "/contact",
        newTab: false,
      },
      {
        id: 4341,
        title: "Bank Guarantees",
        path: "/contact",
        newTab: false,
      },
      {
        id: 4425,
        title: "Performance Guarantees",
        path: "/contact",
        newTab: false,
      },
      {
        id: 4465,
        title: "Advance Payment Guarantees",
        path: "/contact",
        newTab: false,
      },
      {
        id: 4465,
        title: "Proof of Funds",
        path: "/contact",
        newTab: false,
      },
      
    ],
      },
    ]
    
  },
  {
    id: 5,
    title: "Overview",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "How It Works",
        path: "/overview",
        newTab: false,
      },
      {
        id: 42,
        title: "Client Success Stories",
        path:"/overview",
        newTab: false,
      },
      {
        id: 43,
        title: "Partnerships",
        path:"/overview",
        newTab: false,
      },
      
    ],
  },
  
];
export default menuData;
