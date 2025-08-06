'use client';

import { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const faqData = [
    {
      question: "Why is the moon sometimes out during the day?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "Why is the sky blue?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "Will we ever discover aliens?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "How much does the Earth weigh?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "How do airplanes stay up?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-accordion-item">
            <button
              className={`faq-button ${expandedItem === index ? 'faq-expanded' : ''}`}
              aria-expanded={expandedItem === index}
              onClick={() => toggleAccordion(index)}
            >
              <span className="faq-accordion-title">{faq.question}</span>
              <span className="faq-icon" aria-hidden="true">
                {expandedItem === index ? '▲' : '▼'}
              </span>
            </button>
            <div className={`faq-accordion-content ${expandedItem === index ? 'faq-open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;