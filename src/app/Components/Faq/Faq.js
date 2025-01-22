"use client";
import React, { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    // Add event listeners to toggle FAQs
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach((faq) => faq.classList.remove("active")); // Close all FAQs
        if (!isActive) {
          item.classList.add("active"); // Open the clicked FAQ
        }
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      faqItems.forEach((item) =>
        item.removeEventListener("click", () => {})
      );
    };
  }, []);

  const faqData = [
    {
      question: "What is Bizgurukul?",
      answer:
        "Bizgurukul is an online platform providing courses and skill-based training programs.",
    },
    {
      question: "What opportunity does Bizgurukul provide?",
      answer:
        "It provides opportunities for learning trending skills and connecting with mentors.",
    },
    {
      question: "What are Education Bundles?",
      answer:
        "Education Bundles are curated collections of courses to help you master a specific field.",
    },
    {
      question: "What kind of skill-based courses do you provide?",
      answer:
        "Courses range from digital marketing, public speaking, to graphic design and more.",
    },
    {
      question: "Is Bizgurukul government verified?",
      answer: "Yes, Bizgurukul is a government-verified platform.",
    },
    {
      question: "How can I reach out to you?",
      answer:
        "You can contact us through our official website or support email.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">
        Frequently Asked <span className="faq-highlight">Questions</span>
      </h1>
      <p className="faq-subtitle">Answers to the burning questions in your mind.</p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              {item.question}
              <span className="faq-arrow">▶</span>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-container {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-title {
          font-size: 2.5em;
          color: #2c2c54;
        }

        .faq-highlight {
          color: #6c5ce7;
          background-color: #e0e0ff;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .faq-subtitle {
          font-size: 1.2em;
          color: #636e72;
          margin-bottom: 40px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .faq-item {
          background: #ffffff;
          border: 1px solid #dcdde1;
          border-radius: 8px;
          padding: 15px 20px;
          cursor: pointer;
          transition: box-shadow 0.2s, background-color 0.2s;
        }

        .faq-item:hover {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .faq-item.active {
          background-color: #f1f0ff;
          border-color: #6c5ce7;
        }

        .faq-question {
          font-size: 1.2em;
          font-weight: bold;
          color: #2c2c54;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          margin-top: 10px;
          font-size: 1em;
          color: #636e72;
          text-align: left;
          display: none;
        }

        .faq-item.active .faq-answer {
          display: block;
        }

        .faq-arrow {
          font-size: 1.5em;
          color: #6c5ce7;
          transition: transform 0.2s;
        }

        .faq-item.active .faq-arrow {
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
};

export default FAQ;
