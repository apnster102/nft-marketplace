import React from "react";
import { useEffect } from "react";

import Style from "../styles/subscription.module.css";
import { Subscription } from "../Subscription/Subscription";

const subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$10/month",
      popular: "Popular",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
      info: "",
    },
    {
      plan: "BASIC",
      price: "$5/month",
      popular: "Popular",
      service: ["Faster Processing", "Customizations", "Smarter"],
      info: "",
    },
    {
      plan: "SMARTER",
      price: "$12/month",
      popular: "",
      service: [
        "Unlimited Builds",
        "Smarter Processing",
        "Faster Processing",
        "Company Evaluations",
      ],
      info: "",
    },
  ];

  useEffect(() => {
    document.title = "Price Page";
  }, []);

  return (
    <div className={Style.subscription}>
      <div className={Style.subscription_box}>
        <div className={Style.subscription_box_info}>
          <h1>Subscription</h1>
          <p>Pricing to fit the needs of any companie size</p>
        </div>
        <div className={Style.subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={1} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;
