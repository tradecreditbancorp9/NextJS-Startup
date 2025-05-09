import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Face Value of the Securities.",
    paragraph:
      "The face value of securities refers to their nominal or stated value as indicated by the issuing bank or institution, not reflecting current market value. In SBLCs and BGs, the face value represents the maximum amount the bank commits to pay under the agreed terms.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Forex Trader",
    },
    tags: ["Business"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Eligibility Criteria to Get an Bank Security (SBLC & BG)",
    paragraph:
      "To obtain an SBLC or BG, the applicant must have a strong credit profile, an established banking relationship, and the financial capacity to cover underlying obligations. Banks typically require due diligence, collateral, or cash margin, along with a legitimate business purpose.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Business Analyst",
    },
    tags: ["Finance"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Transaction Procedure - For DLC Issuance.",
    paragraph:
      "The buyer requests their bank to issue a DLC in favor of the seller, outlining agreed trade terms. Upon verification, the issuing bank sends the DLC to the seller’s bank, which notifies the seller, enabling shipment and documentation submission.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Lithium Diode",
    },
    tags: ["Bank Guarantee"],
    publishDate: "2025",
  },
];
export default blogData;
