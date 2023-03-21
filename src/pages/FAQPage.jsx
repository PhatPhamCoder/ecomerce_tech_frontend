import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* Single Faq */}
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(1)}
          >
            {/* Title FAQ */}
            <span className="text-lg font-medium text-gray-900">
              How do I track my order?
            </span>
            {/* Icon Open and Close */}
            {activeTab === 1 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {/* Conent FAQ */}
          {activeTab === 1 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ipsum molestias incidunt reiciendis qui id culpa aspernatur,
                ullam unde suscipit ducimus dolor earum quas alias error ratione
                dolores recusandae laborum!
              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)} //Change Number
          >
            {/* Title FAQ */}
            <span className="text-lg font-medium text-gray-900">
              What is your return policy?
            </span>
            {/* Icon Open and Close */}
            {activeTab === 2 ? ( //Change Number
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {/* Conent FAQ */}
          {activeTab === 2 && ( //Change Number
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ipsum molestias incidunt reiciendis qui id culpa aspernatur,
                ullam unde suscipit ducimus dolor earum quas alias error ratione
                dolores recusandae laborum!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FAQPage;
