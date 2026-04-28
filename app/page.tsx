"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Smoobu booking widget
    const s = document.createElement("script");
    s.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
    s.onload = () => {
      (window as any).BookingToolIframe?.initialize({
        url: "https://login.smoobu.com/es/booking-tool/iframe/103685/352007",
        baseUrl: "https://login.smoobu.com",
        target: "#smoobu-booking",
      });
    };
    document.head.appendChild(s);
  }, []);

  return (
    <main>
      {/* HEADER */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 40, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>House Sevillana</span>
        <nav style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
          <a href="#la-casa" style={{ color: "#374151", textDecoration: "none" }}>La casa</a>
          <a href="#ubicacion" style={{ color: "#374151", textDecoration: "none" }}>Ubicación</a>
          <a href="#reservar" style={{ color: "#374151", textDecoration: "none" }}>Precios</a>
          <a href="#contacto" style={{ color: "#374151", textDecoration: "none" }}>Contacto</a>
        </nav>
        <a href="#reservar" style={{ background: "#111", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "999px", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Reservar</a>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#fffbeb,#fff)", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 800, lineHeight: 1.15, margin: "0 0 1rem" }}>Casa entera en el corazón de Sevilla</h1>
            <p style={{ fontSize: "1.1rem", color: "#4b5563", marginBottom: "2rem", lineHeight: 1.7 }}>290 m² · 6 dormitorios · 4 baños · Parking privado · Patio interior · Hasta 12 huéspedes</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#reservar" style={{ background: "#111", color: "#fff", padding: "0.85rem 2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>Ver disponibilidad</a>
              <a href="#la-casa" style={{ border: "2px solid #111", color: "#111", padding: "0.85rem 2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}>Conocer la casa</a>
            </div>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "2rem" }}>
              <div><strong style={{ fontSize: "1.5rem" }}>8.8</strong><div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Puntuación Booking</div></div>
              <div><strong style={{ fontSize: "1.4rem" }}>VFT/SE/01179</strong><div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Licencia oficial</div></div>
            </div>
          </div>
          <div style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>Foto del patio</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
        {[
          { icon: "🚗", title: "Parking privado", desc: "Incluido en el precio" },
          { icon: "🏠", title: "Casa completa", desc: "290m², 6 dorm, 4 baños" },
          { icon: "📍", title: "Casco histórico", desc: "10 min a la Catedral" },
          { icon: "💳", title: "Reserva directa", desc: "Sin comisiones" },
        ].map((f) => (
          <div key={f.title} style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{f.icon}</div>
            <h3 style={{ margin: "0 0 0.25rem", fontSize: "1rem" }}>{f.title}</h3>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "#6b7280" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* LA CASA */}
      <section id="la-casa" style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>La casa</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.8, maxWidth: "700px", marginBottom: "2rem" }}>
            Casa señorial de 290 m² en el centro histórico de Sevilla. Perfecta para grupos familiares o celebraciones. Salón comedor, cocina totalmente equipada, 6 dormitorios dobles, 4 baños completos, terraza, patio ajardinado y plaza de parking privada.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginBottom: "2rem" }}>
            {[["290 m²", "Superficie"], ["6", "Dormitorios"], ["4", "Baños"], ["12", "Huéspedes"]].map(([v, l]) => (
              <div key={l} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800 }}>{v}</div>
                <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>{l}</div>
              </div>
            ))}
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Equipamiento</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.5rem" }}>
            {["WiFi gratuito", "Aire acondicionado", "Calefacción central", "Cocina equipada", "Lavadora/Secadora", "Smart TV", "Parking privado", "Terraza", "Patio/jardín", "Cuna disponible", "Barbacoa", "Zona de trabajo"].map((a) => (
              <div key={a} style={{ fontSize: "0.9rem", color: "#374151", padding: "0.4rem 0" }}>✓ {a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Ubicación</h2>
        <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "700px" }}>
          Calle Socorro 24, 41003 Sevilla. En pleno casco histórico, a pocos minutos de los principales monumentos.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Distancias</h3>
            {[["Catedral de Sevilla", "10 min a pie"], ["Iglesia San Luis", "300 m"], ["Palacio de las Dueñas", "5 min"], ["Mercado Encarnación", "8 min"], ["Aeropuerto", "11 km"], ["Estación Santa Justa", "20 min"]].map(([p, d]) => (
              <div key={p} style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid #f3f4f6" }}>
                <span>{p}</span><span style={{ color: "#6b7280", fontSize: "0.9rem" }}>{d}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#f3f4f6", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "250px" }}>
            <a href="https://maps.google.com/?q=Calle+Socorro+24,+Sevilla" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", fontWeight: 600, textDecoration: "none" }}>📍 Ver en Google Maps</a>
          </div>
        </div>
      </section>

      {/* RESERVAR */}
      <section id="reservar" style={{ background: "#111", color: "#fff", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reserva directa</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "0" }}>Sin comisiones de portales. Mejor precio garantizado.</p>
        </div>
      </section>
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div id="smoobu-booking" style={{ minHeight: "600px", border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }} />
      </section>

      {/* FOOTER */}
      <footer id="contacto" style={{ borderTop: "1px solid #e5e7eb", padding: "3rem 1.5rem", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
          <div>
            <h3 style={{ marginBottom: "0.75rem" }}>House Sevillana</h3>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.7 }}>Alquiler vacacional en el centro histórico de Sevilla.</p>
          </div>
          <div>
            <h3 style={{ marginBottom: "0.75rem" }}>Legal</h3>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: "0.25rem 0" }}>Licencia VFT: VFT/SE/01179</p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: "0.25rem 0" }}>Calle Socorro 24, 41003 Sevilla</p>
          </div>
          <div>
            <h3 style={{ marginBottom: "0.75rem" }}>Contacto</h3>
            <p style={{ margin: "0.25rem 0" }}><a href="mailto:alberto.suarez.gutierrez@gmail.com" style={{ color: "#6366f1", textDecoration: "none", fontSize: "0.9rem" }}>alberto.suarez.gutierrez@gmail.com</a></p>
            <p style={{ margin: "0.25rem 0" }}><a href="tel:+34637349990" style={{ color: "#6366f1", textDecoration: "none", fontSize: "0.9rem" }}>+34 637 349 990</a></p>
          </div>
        </div>
        <div style={{ maxWidth: "1100px", margin: "2rem auto 0", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb", textAlign: "center", color: "#9ca3af", fontSize: "0.875rem" }}>
          © 2026 House Sevillana. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
