"use client";
import React, { useEffect, useState } from 'react';
import "./Faq.css";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const data = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply open the app, browse through the menu, select the items you'd like to order, and proceed to checkout. Follow the prompts to provide delivery details and complete your order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, digital wallets (such as Apple Pay, Google Pay), and cash on delivery (where available). You can choose your preferred payment method during checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is confirmed, you'll receive a confirmation message with an estimated delivery time. You can track the status of your order in real-time through the app. Additionally, you'll receive notifications at each stage of the delivery process.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Yes, you can customize your order according to your preferences. Our app allows you to add special instructions or make modifications to your items before placing the order. Simply specify your requirements in the order notes section during checkout.",
  },
  {
    question: "What if I have food allergies or dietary restrictions?",
    answer:
      "We take food allergies and dietary restrictions seriously. Our menu includes options for various dietary preferences such as vegetarian, vegan, gluten-free, etc. You can filter the menu based on your dietary requirements or reach out to our customer support team for assistance in selecting suitable options.",
  },
  {
    question: "Is there a minimum order requirement for delivery?",
    answer:
      "The minimum order requirement for delivery may vary depending on your location and the restaurant you're ordering from. You can check the minimum order amount for each restaurant listed in the app before placing your order.",
  },
  {
    question: "What if I need to cancel my order?",
    answer:
      "If you need to cancel your order, please do so as soon as possible before it is prepared for delivery. You can cancel the order directly from the app by navigating to your order history and selecting the cancel option. Please note that orders already in preparation cannot be canceled.",
  },
  {
    question: "How do I provide feedback or report an issue with my order?",
    answer:
      "Your feedback is important to us! If you have any issues with your order or if you'd like to provide feedback, you can contact our customer support team through the app. We're here to assist you and ensure your experience is satisfactory.",
  },
  {
    question: "Do you offer contactless delivery?",
    answer:
      "Yes, we offer contactless delivery options to ensure the safety of our customers and delivery partners. You can request contactless delivery during checkout, and our delivery partners will leave your order at your doorstep without direct contact.",
  },
];

export default function Faq() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease',  // Animation easing
      once: true,      // Whether animation should happen once or every time it comes into view
    });
  }, []);


  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: todoInput,
        date: new Date().toLocaleDateString(),
      };
      setTodos([...todos, newTodo]);
      setTodoInput(""); // Clear the input field after adding
    }
  };

  return (
    <>
      <div className="accordion">
        {data.map((item, index) => (
          <div key={index} className="accordion-item" data-aos="zoom-out-right">
            <button
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span className="arrow">
                {activeIndex === index ? (
                  <span className="material-symbols-outlined">🔽</span>
                ) : (
                  <span className="material-symbols-outlined">🔼</span>
                )}
              </span>
            </button>
            <div
              className={`accordion-body ${activeIndex === index ? "active" : ""
                }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
