import React from "react";

const Contacto = () => {
  return (
    <div className="page-container">
      <h1>Contacto</h1>
      <p>Teléfono 1: +502 2331-1682</p>
      <p>Teléfono 2: +502 3166-3115</p>
      <p>WhatsApp: +502 5385-4812</p>
      <p>Correo: aguasmarinasgt@gmail.com</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <button
          onClick={() => window.open("https://wa.me/50253854812", "_blank")}
          style={{
            backgroundColor: "#25d366",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Contactar por WhatsApp
        </button>

        <button
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=aguasmarinasgt@gmail.com", "_blank")}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Contactar por Correo
        </button>
      </div>
    </div>
  );
};

export default Contacto;

