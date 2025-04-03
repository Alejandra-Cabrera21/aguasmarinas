import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto tarda el envío?",
    answer: "El envío tarda entre 3 y 5 días hábiles, dependiendo de tu ubicación."
  },
  {
    question: "¿Puedo devolver un producto?",
    answer: "Sí, tienes hasta 30 días para devolverlo en su estado original.       "
  },
  {
    question: "¿Cuáles son los métodos de pago?",
    answer: "Método de pago solo efectivo, transferencia y cheque de empresa.      "
  },
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer: "Consultando directamente con la empresa.                              "
  },
  {
    question: "¿Cómo puedo realizar mi pedido?",
    answer: "Puedes realizar tu cotización por medio de WhatsApp o correo.         "
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            <div className="faq-answer" style={{ display: openIndex === index ? "block" : "none" }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}