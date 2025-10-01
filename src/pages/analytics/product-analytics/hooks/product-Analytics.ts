import { useState } from "react";
import dayjs from "dayjs";
import mobileImg from "../../../../assets/images/mobile.png";


const useCampaignReviews = () => {
  
  const reviewsArr = [
    {
      customerName: "User 1",
      submittedOn: dayjs("2022-04-09").format("MMMM D, YYYY")
,
      rating: 3.8,
      review: "Excellent campaign! Very engaging.",
    },
    {
      customerName: "User 2",
      submittedOn: dayjs("2022-04-09").format("MMMM D, YYYY")
,
      rating: 3.9,
      review: "Good experience, but could be faster.",
    },
    {
      customerName: "User 3",
      submittedOn: dayjs("2022-04-09").format("MMMM D, YYYY")

,
      rating: 3,
      review: "Average campaign performance.",
    },
    {
      customerName: "User 4",
      submittedOn:dayjs("2022-04-09").format("MMMM D, YYYY")

,
      rating: 5,
      review: "Loved it! Very well organized.",
    },
    {
      customerName: "User 5",
      submittedOn: dayjs("2025-09-24").format("MMMM D, YYYY"),
      rating: 4,
      review: "Good, but needs more clarity in ads.",
    },
  ];

 const product = {
  image: mobileImg,
  title: "Samsung Galaxy Z Fold7 5G Smartphone with Galaxy AI (Blue shadow Color, 12GB RAM, 256GB Storage) Ultrasleek Design with 200MP Camera",
  sku: "B08XYZ1234",
  price: "₹1,74,999",
  offers: "5 OFFERS",
  isPrime: true,
};

const stats = [
  { label: "Stock Levels", value: "2,420", change: "↑ 40% vs last month" },
  { label: "Product Ratings", value: "4.3", change: "↑ 40% vs last month" },
  { label: "Conversion Rate", value: "2,420", change: "↑ 40% vs last month" },
  { label: "Total Sales", value: "2,420", change: "↑ 40% vs last month" },
  { label: "Units Sold", value: "2,420", change: "↑ 40% vs last month" },
  { label: "Refund Rate", value: "2,420", change: "↑ 40% vs last month" }
];

  
  
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filteredReviews = filterRating
    ? reviewsArr.filter((r) => r.rating === filterRating)
    : reviewsArr;

 const [funnelData] = useState([
    { value: 50, name: "Impressions" },
    { value: 15, name: "Clicks" },
    { value: 11, name: "Add to Cart" },
    { value: 3, name: "Purchase" },
    { value: 8, name: "Returns" },
  ]);

  
return {
  values: {
    reviewsArr: filteredReviews,
    funnelData,
    product,
    stats,
  },
  functions: {
    setFilterRating,
  },
};
};

export default useCampaignReviews;
