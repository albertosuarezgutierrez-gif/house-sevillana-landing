import { NextResponse } from 'next/server';

const HTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNSIgZmlsbD0iI0IwNEUyQSIvPjx0ZXh0IHg9IjE2IiB5PSIyMS41IiBmb250LWZhbWlseT0iR2VvcmdpYSxzZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuNSI+SFM8L3RleHQ+PC9zdmc+"/>

<!-- SEO Primary -->
<title>Casa con Parking en el Centro de Sevilla | House Sevillana</title>
<meta name="description" content="290 m² en el casco histórico de Sevilla. 6 dormitorios, 4 baños, parking privado, terraza y patio andaluz. Hasta 12 personas. Reserva directa sin comisiones."/>
<link rel="canonical" href="https://www.housesevillana.es/"/>

<!-- Open Graph -->
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.housesevillana.es/"/>
<meta property="og:title" content="Casa con Parking en el Centro de Sevilla | House Sevillana"/>
<meta property="og:description" content="290 m² · 6 dormitorios · 4 baños · Parking privado · Terraza · Patio andaluz · Hasta 12 personas"/>
<meta property="og:image" content="https://lh3.googleusercontent.com/d/1rDXs-fjAmmDQFTfZ7fTutPZvosAV2GMo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1rDXs-fjAmmDQFTfZ7fTutPZvosAV2GMo"/>

<!-- Schema.org JSON-LD -->
<script type="application/ld+json">{"@context":"https://schema.org","@type":"LodgingBusiness","name":"House Sevillana","description":"Casa de 290 m2 en el casco historico de Sevilla. 6 dormitorios, 4 banos, parking privado, patio andaluz. Ideal para grupos y familias de hasta 12 personas.","url":"https://www.housesevillana.es","telephone":"+34637349990","identifier":{"@type":"PropertyValue","propertyID":"VFT","value":"VFT/SE/01179"},"address":{"@type":"PostalAddress","streetAddress":"Calle Socorro 24","addressLocality":"Sevilla","postalCode":"41003","addressCountry":"ES"},"geo":{"@type":"GeoCoordinates","latitude":37.3942,"longitude":-5.9924},"numberOfRooms":6,"amenityFeature":[{"@type":"LocationFeatureSpecification","name":"Parking privado","value":true},{"@type":"LocationFeatureSpecification","name":"Patio andaluz","value":true},{"@type":"LocationFeatureSpecification","name":"Terraza","value":true},{"@type":"LocationFeatureSpecification","name":"Aire acondicionado","value":true},{"@type":"LocationFeatureSpecification","name":"WiFi gratis","value":true}],"checkinTime":"15:00","checkoutTime":"12:00","petsAllowed":false,"occupancy":{"@type":"QuantitativeValue","maxValue":12}}</script>

<!-- GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N5CMQL9C4M"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N5CMQL9C4M');</script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>

<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --night:#0D0907;
  --night2:#1A1008;
  --night3:#231508;
  --cream:#F9F5F0;
  --white:#FFFFFF;
  --clay:#C4571F;
  --clay-l:#D96830;
  --text:#1A0F07;
  --muted:#6B5B50;
  --muted2:#8A7B72;
  --gold:#C4932A;
  --accent-warm:#F4A47A;
  --border:rgba(196,87,31,0.13);
  --border-light:rgba(196,87,31,0.07);
  --sh:0 2px 16px rgba(13,9,7,0.07),0 0 0 1px rgba(196,87,31,0.06);
  --sh-hover:0 10px 40px rgba(13,9,7,0.13),0 0 0 1px rgba(196,87,31,0.10);
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Outfit',system-ui,sans-serif;
  --max:1180px;
  --r:14px;
}

html{scroll-behavior:smooth}
body{font-family:var(--sans);background:var(--cream);color:var(--text);overflow-x:hidden;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
a{text-decoration:none}
img{display:block}

/* ── NAV ── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 2.5rem;height:68px;
  transition:background .4s,backdrop-filter .4s,border-color .4s;
}
nav.scrolled{
  background:rgba(13,9,7,0.90);
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  border-bottom:1px solid rgba(255,255,255,0.06);
}
.brand{font-family:var(--serif);font-size:1.45rem;font-weight:400;color:var(--white);letter-spacing:.04em}
.nav-links{display:flex;align-items:center;gap:2rem}
.nav-links a{font-size:.875rem;color:rgba(255,255,255,.65);font-weight:400;letter-spacing:-.012em;transition:color .2s}
.nav-links a:hover{color:var(--white)}
.btn-nav{
  background:var(--clay)!important;color:var(--white)!important;
  padding:.45rem 1.25rem;border-radius:9999px;font-size:.85rem;font-weight:500;
  letter-spacing:-.01em;transition:background .2s;
}
.btn-nav:hover{background:var(--clay-l)!important}
.ham{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:.4rem}
.ham span{display:block;width:22px;height:1.5px;background:var(--white);border-radius:2px;transition:all .25s}
.mob{display:none;flex-direction:column;background:var(--night);padding:1.25rem 1.5rem 1.75rem;gap:.25rem;border-top:1px solid rgba(255,255,255,.05)}
.mob a{font-size:.975rem;color:rgba(255,255,255,.7);font-weight:400;padding:.75rem 0;border-bottom:1px solid rgba(255,255,255,.06)}
.mob-btn{background:var(--clay);color:var(--white)!important;padding:.8rem 1.5rem;border-radius:9999px;text-align:center;margin-top:.75rem;font-weight:500;display:block}
.mob.open{display:flex}

/* ── HERO ── */
.hero{
  position:relative;min-height:100vh;
  display:flex;align-items:center;overflow:hidden;
}
.hero-bg{position:absolute;inset:0;z-index:0}
.hero-bg img{width:100%;height:100%;object-fit:cover;object-position:center 30%}
.hero-overlay{
  position:absolute;inset:0;z-index:1;
  background:linear-gradient(135deg,rgba(13,9,7,.85) 0%,rgba(26,16,8,.72) 45%,rgba(13,9,7,.55) 100%);
}
.hero-content{
  position:relative;z-index:2;width:100%;max-width:var(--max);
  margin:0 auto;padding:9rem 2.5rem 5rem;
  display:grid;grid-template-columns:1fr 400px;gap:4rem;align-items:center;
}
.badge-hero{
  display:inline-flex;align-items:center;gap:.5rem;
  background:rgba(196,87,31,.18);border:1px solid rgba(196,87,31,.32);
  color:var(--accent-warm);font-size:.72rem;font-weight:500;letter-spacing:.09em;
  text-transform:uppercase;padding:.35rem 1rem;border-radius:9999px;margin-bottom:1.5rem;
}
h1{
  font-family:var(--serif);font-size:clamp(2.8rem,5.5vw,5rem);
  font-weight:400;line-height:1.06;color:var(--white);
  margin-bottom:1.25rem;letter-spacing:-.01em;
}
h1 em{font-style:italic;color:var(--accent-warm)}
.hero-sub{
  font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.72;
  margin-bottom:2rem;max-width:520px;font-weight:300;letter-spacing:-.012em;
}
.hero-pills{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2.25rem}
.hero-pill{
  display:inline-flex;align-items:center;gap:.3rem;
  background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);
  color:rgba(255,255,255,.82);font-size:.78rem;font-weight:400;
  letter-spacing:-.01em;padding:.38rem .875rem;border-radius:9999px;
}
.ctas{display:flex;gap:.875rem;flex-wrap:wrap}
.btn-p{
  background:var(--clay);color:var(--white);
  padding:.875rem 2.25rem;border-radius:9999px;font-size:.95rem;font-weight:500;
  letter-spacing:-.01em;transition:background .2s,transform .15s;display:inline-block;
}
.btn-p:hover{background:var(--clay-l);transform:translateY(-1px)}
.btn-s{
  border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.88);
  padding:.75rem 1.875rem;border-radius:9999px;font-size:.95rem;font-weight:400;
  letter-spacing:-.012em;transition:all .2s;display:inline-block;
}
.btn-s:hover{border-color:rgba(255,255,255,.65);color:var(--white)}

/* Hero floating card */
.hero-card{
  background:rgba(255,255,255,.06);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);
  border:1px solid rgba(255,255,255,.11);border-radius:20px;padding:1.75rem;
  display:flex;flex-direction:column;gap:1.25rem;
}
.hc-title{font-size:.68rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:.35rem}
.hc-stats{display:grid;grid-template-columns:1fr 1fr;gap:.875rem}
.hcs{
  background:rgba(255,255,255,.05);border-radius:12px;padding:.875rem;
  text-align:center;border:1px solid rgba(255,255,255,.06);
}
.hcs-n{font-family:var(--serif);font-size:2.1rem;font-weight:400;color:var(--white);line-height:1}
.hcs-l{font-size:.67rem;color:rgba(255,255,255,.4);margin-top:.3rem;letter-spacing:.05em;text-transform:uppercase}
.hc-rating{
  display:flex;align-items:center;gap:.875rem;
  background:rgba(196,147,42,.1);border:1px solid rgba(196,147,42,.18);
  border-radius:12px;padding:.875rem;
}
.hc-rating-n{font-family:var(--serif);font-size:2rem;font-weight:400;color:#E8B84B;line-height:1;flex-shrink:0}
.hc-rating-lbl strong{font-size:.9rem;color:var(--white);display:block;font-weight:500;letter-spacing:-.01em}
.hc-rating-lbl span{font-size:.72rem;color:rgba(255,255,255,.38)}
.hc-cta{
  background:var(--clay);color:var(--white);text-align:center;
  padding:.875rem;border-radius:9999px;font-size:.875rem;font-weight:500;
  letter-spacing:-.01em;transition:background .2s;display:block;
}
.hc-cta:hover{background:var(--clay-l)}

/* Scroll indicator */
.scroll-ind{
  position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);z-index:2;
  display:flex;flex-direction:column;align-items:center;gap:.45rem;
  color:rgba(255,255,255,.28);animation:fadeInUp 1.5s ease 1.2s both;
}
.scroll-ind span{font-size:.65rem;letter-spacing:.12em;text-transform:uppercase}
.scroll-dot{width:1px;height:36px;background:linear-gradient(to bottom,rgba(255,255,255,.35),transparent)}
@keyframes fadeInUp{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}

/* ── TRUST BAR ── */
.trust-bar{
  background:var(--night2);border-top:1px solid rgba(255,255,255,.04);
  padding:.9rem 2.5rem;display:flex;justify-content:center;align-items:center;gap:1.5rem;flex-wrap:wrap;
}
.tb-item{display:flex;align-items:center;gap:.45rem;font-size:.8rem;color:rgba(255,255,255,.45)}
.tb-item strong{color:rgba(255,255,255,.72);font-weight:500}
.tb-sep{width:1px;height:14px;background:rgba(255,255,255,.1);flex-shrink:0}

/* ── SECTIONS ── */
.wrap{max-width:var(--max);margin:0 auto}
section{padding:5.5rem 2.5rem}
.tag{font-size:.7rem;font-weight:600;color:var(--clay);letter-spacing:.12em;text-transform:uppercase;margin-bottom:.875rem}
h2{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:400;line-height:1.12;margin-bottom:1rem;letter-spacing:-.01em}
.s-sub{font-size:1rem;color:var(--muted);line-height:1.72;max-width:530px;margin-bottom:3rem;font-weight:300;letter-spacing:-.012em}

/* ── FEATURES ── */
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.125rem}
.feat{
  background:var(--white);border-radius:var(--r);
  box-shadow:var(--sh);padding:1.75rem;
  transition:box-shadow .25s,transform .2s;
}
.feat:hover{box-shadow:var(--sh-hover);transform:translateY(-2px)}
.feat.hi{background:var(--clay)}
.feat.hi .ft{color:var(--white)}
.feat.hi .fd{color:rgba(255,255,255,.72)}
.feat.hi .ficon{background:rgba(255,255,255,.14);color:var(--white)}
.ficon{
  width:44px;height:44px;background:rgba(196,87,31,.07);
  border-radius:10px;display:flex;align-items:center;justify-content:center;
  margin-bottom:.875rem;font-size:1.2rem;color:var(--clay);
}
.ft{font-weight:600;font-size:.975rem;margin-bottom:.4rem;color:var(--text);letter-spacing:-.015em}
.fd{font-size:.862rem;color:var(--muted);line-height:1.62;font-weight:300}

/* ── GALLERY ── */
.gal-section{background:var(--night);padding:5.5rem 2.5rem}
.gal-section .tag{color:var(--accent-warm)}
.gal-section h2{color:var(--white)}
.gal{
  display:grid;
  grid-template-columns:1.7fr 1fr 1fr;
  grid-template-rows:290px 230px;
  gap:.75rem;margin-top:2rem;
}
.gi{border-radius:var(--r);overflow:hidden;background:#2A1A10}
.gi img{width:100%;height:100%;object-fit:cover;transition:transform .5s;display:block}
.gi:hover img{transform:scale(1.04)}
.gi-main{grid-row:1/3}

/* ── LOCATION ── */
.loc-grid{display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;align-items:start}
.map{height:390px;border-radius:var(--r);overflow:hidden;box-shadow:var(--sh)}
.map iframe{width:100%;height:100%;border:none}
.dlist{list-style:none}
.dlist li{
  display:flex;justify-content:space-between;align-items:center;
  padding:.875rem 0;border-bottom:1px solid var(--border-light);font-size:.9rem;
}
.dlist li:last-child{border-bottom:none}
.dp{font-weight:400;color:var(--text);letter-spacing:-.01em}
.dt{color:var(--clay);font-weight:600;font-size:.825rem}

/* ── FAQ ── */
.faq-sec{background:var(--white)}
.faq-wrap{max-width:680px}
details{border-bottom:1px solid var(--border)}
summary{
  padding:1.25rem 0;cursor:pointer;font-weight:500;font-size:.95rem;
  list-style:none;display:flex;justify-content:space-between;align-items:center;
  gap:1rem;letter-spacing:-.015em;color:var(--text);
}
summary::after{content:'+';color:var(--clay);font-size:1.25rem;font-weight:300;flex-shrink:0;line-height:1}
details[open] summary::after{content:'-'}
summary::-webkit-details-marker{display:none}
.fa{padding:0 2rem 1.25rem 0;color:var(--muted);font-size:.9rem;line-height:1.78;font-weight:300}

/* ── BOOKING ── */
.book-sec{
  background:var(--night);
  background-image:radial-gradient(ellipse 70% 50% at 50% -5%,rgba(196,87,31,.11) 0%,transparent 60%);
  padding:6rem 2.5rem;text-align:center;
}
.book-sec .tag{color:rgba(244,164,122,.75)}
.book-sec h2{color:var(--white)}
.book-sec .s-sub{color:rgba(255,255,255,.5);margin:0 auto 2.5rem;font-weight:300}
#apartmentIframe352007{min-height:600px;width:100%}

/* ── REVIEWS ── */
.rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.125rem}
.rev{background:var(--white);box-shadow:var(--sh);border-radius:var(--r);padding:1.75rem}
.stars{color:var(--gold);font-size:1rem;margin-bottom:.875rem;letter-spacing:.06em}
.rt{font-size:.875rem;color:var(--muted);line-height:1.72;margin-bottom:1rem;font-style:italic;font-weight:300}
.ra{font-size:.85rem;font-weight:600;color:var(--text);letter-spacing:-.01em}
.rs{font-size:.75rem;color:var(--muted2);margin-top:.2rem}

/* ── FOOTER ── */
footer{background:var(--night);color:rgba(255,255,255,.65);padding:4rem 2.5rem 2rem}
.fg{display:grid;grid-template-columns:2.4fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.fb{font-family:var(--serif);font-size:1.55rem;color:var(--white);margin-bottom:.875rem;font-weight:400;letter-spacing:.02em}
.ft2{font-size:.875rem;color:rgba(255,255,255,.4);line-height:1.65;max-width:240px;font-weight:300}
.fh{font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.fl{list-style:none;display:flex;flex-direction:column;gap:.75rem}
.fl a{font-size:.862rem;color:rgba(255,255,255,.5);transition:color .2s;font-weight:300}
.fl a:hover{color:rgba(255,255,255,.88)}
.fbot{border-top:1px solid rgba(255,255,255,.06);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.75rem}
.fbot p,.fvft{font-size:.762rem;color:rgba(255,255,255,.28);font-weight:300}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .hero-content{grid-template-columns:1fr;max-width:640px}
  .hero-card{display:none}
  .feat-grid{grid-template-columns:1fr 1fr}
  .rev-grid{grid-template-columns:1fr 1fr}
  .fg{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  nav{padding:0 1.25rem}
  .nav-links{display:none}
  .ham{display:flex}
  section,.gal-section,.book-sec,footer{padding:3.5rem 1.25rem}
  h1{font-size:2.6rem}
  .hero-content{padding:8rem 1.25rem 4rem}
  .trust-bar{padding:.875rem 1.25rem;gap:.875rem}
  .tb-sep{display:none}
  .gal{grid-template-columns:1fr 1fr;grid-template-rows:170px 170px 170px}
  .gi-main{grid-row:1/2;grid-column:1/3}
  .feat-grid{grid-template-columns:1fr}
  .loc-grid{grid-template-columns:1fr;gap:2rem}
  .map{height:280px}
  .rev-grid{grid-template-columns:1fr}
  .fg{grid-template-columns:1fr;gap:2rem}
  .fbot{flex-direction:column;align-items:flex-start}
}
</style>
</head>
<body>

<!-- NAV -->
<nav id="mainnav">
  <a href="/" class="brand">House Sevillana</a>
  <div class="nav-links">
    <a href="#caracteristicas">La casa</a>
    <a href="#galeria">Fotos</a>
    <a href="#ubicacion">Ubicaci&oacute;n</a>
    <a href="#faq">FAQ</a>
    <a href="#reserva" class="btn-nav">Reservar directo</a>
  </div>
  <button class="ham" id="ham" aria-label="Men&uacute;"><span></span><span></span><span></span></button>
</nav>

<div class="mob" id="mob">
  <a href="#caracteristicas" onclick="cm()">La casa</a>
  <a href="#galeria" onclick="cm()">Fotos</a>
  <a href="#ubicacion" onclick="cm()">Ubicaci&oacute;n</a>
  <a href="#faq" onclick="cm()">FAQ</a>
  <a href="#reserva" class="mob-btn" onclick="cm()">Reservar directo</a>
</div>

<!-- HERO -->
<section class="hero" id="inicio">
  <div class="hero-bg">
    <img src="https://lh3.googleusercontent.com/d/1YRd-RfZKbIq-I8UqxzH3Qo4HP_6E_UF4"
         alt="Fachada House Sevillana &mdash; casa tur&iacute;stica con parking en el centro hist&oacute;rico de Sevilla"
         loading="eager" fetchpriority="high"/>
  </div>
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <div>
      <div class="badge-hero">&#9733; Reserva directa &middot; Sin comisiones</div>
      <h1>Casa con <em>parking</em><br>en el coraz&oacute;n<br>de Sevilla</h1>
      <p class="hero-sub">290 m&sup2; reformados en el casco hist&oacute;rico. 6 dormitorios, 4 ba&ntilde;os, terraza, patio andaluz y parking privado &mdash; para grupos y familias de hasta 12 personas.</p>
      <div class="hero-pills">
        <span class="hero-pill">&#127968; 290 m&sup2;</span>
        <span class="hero-pill">&#128717; 6 dorm &middot; 4 ba&ntilde;os</span>
        <span class="hero-pill">&#128663; Parking privado</span>
        <span class="hero-pill">&#9728; Terraza + Patio</span>
        <span class="hero-pill">&#128101; Hasta 12 personas</span>
      </div>
      <div class="ctas">
        <a href="#reserva" class="btn-p">Consultar disponibilidad</a>
        <a href="#caracteristicas" class="btn-s">Ver la casa</a>
      </div>
    </div>

    <!-- Floating stats card (desktop) -->
    <div class="hero-card">
      <div>
        <div class="hc-title">La propiedad</div>
        <div class="hc-stats">
          <div class="hcs"><div class="hcs-n">290</div><div class="hcs-l">m&sup2;</div></div>
          <div class="hcs"><div class="hcs-n">6</div><div class="hcs-l">Dorm.</div></div>
          <div class="hcs"><div class="hcs-n">4</div><div class="hcs-l">Ba&ntilde;os</div></div>
          <div class="hcs"><div class="hcs-n">12</div><div class="hcs-l">Hu&eacute;spedes</div></div>
        </div>
      </div>
      <div class="hc-rating">
        <div class="hc-rating-n">8.1</div>
        <div class="hc-rating-lbl">
          <strong>Muy bien valorado</strong>
          <span>Booking.com &middot; 4.771.238</span>
        </div>
      </div>
      <a href="#reserva" class="hc-cta">Ver disponibilidad &#8594;</a>
    </div>
  </div>

  <div class="scroll-ind">
    <div class="scroll-dot"></div>
    <span>scroll</span>
  </div>
</section>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div class="tb-item">&#128663; <strong>Parking privado</strong> &mdash; el &uacute;nico del barrio</div>
  <div class="tb-sep"></div>
  <div class="tb-item">&#10003; <strong>Confirmaci&oacute;n inmediata</strong></div>
  <div class="tb-sep"></div>
  <div class="tb-item">&#128176; Sin comisiones &mdash; <strong>ahorra hasta un 22%</strong> vs Booking</div>
  <div class="tb-sep"></div>
  <div class="tb-item">&#11088; <strong>8.1 / 10</strong> en Booking.com</div>
</div>

<!-- CARACTERÍSTICAS -->
<section id="caracteristicas">
  <div class="wrap">
    <div class="tag">La casa</div>
    <h2>Una casa sevillana para vivirla</h2>
    <p class="s-sub">290 m&sup2; reformados con materiales nobles en el coraz&oacute;n del casco hist&oacute;rico. Pensada para grupos y familias que quieren espacio, comodidad y autenticidad.</p>
    <div class="feat-grid">
      <div class="feat hi">
        <div class="ficon">&#128663;</div>
        <div class="ft">Parking privado en el edificio</div>
        <div class="fd">Rars&iacute;simo en el casco antiguo de Sevilla. 1 plaza de garaje reservable con tu estancia. Aparcar en zona hist&oacute;rica ya no es un problema.</div>
      </div>
      <div class="feat">
        <div class="ficon">&#127968;</div>
        <div class="ft">6 dormitorios dobles</div>
        <div class="fd">Todos con camas de matrimonio. Capacidad real para hasta 12 personas sin perder comodidad.</div>
      </div>
      <div class="feat">
        <div class="ficon">&#128705;</div>
        <div class="ft">4 ba&ntilde;os completos</div>
        <div class="fd">Con ducha o ba&ntilde;era, toallas y art&iacute;culos de bienvenida incluidos para todos los hu&eacute;spedes.</div>
      </div>
      <div class="feat">
        <div class="ficon">&#127795;</div>
        <div class="ft">Patio andaluz</div>
        <div class="fd">Aut&eacute;ntico patio sevillano con azulejos y fuente interior. El favorito de todos los que nos visitan.</div>
      </div>
      <div class="feat">
        <div class="ficon">&#9728;</div>
        <div class="ft">Terraza con vistas</div>
        <div class="fd">Azotea privada con vistas al casco hist&oacute;rico. El lugar ideal para las noches de verano sevillano.</div>
      </div>
      <div class="feat">
        <div class="ficon">&#127859;</div>
        <div class="ft">Cocina totalmente equipada</div>
        <div class="fd">Horno, microondas, nevera grande, cafetera y utensilios completos. Lista para cocinar para 12.</div>
      </div>
    </div>
  </div>
</section>

<!-- GALERÍA -->
<div class="gal-section" id="galeria">
  <div class="wrap">
    <div class="tag">Fotos</div>
    <h2>La casa por dentro</h2>
    <div class="gal">
      <div class="gi gi-main">
        <img src="https://lh3.googleusercontent.com/d/1rDXs-fjAmmDQFTfZ7fTutPZvosAV2GMo"
             alt="Sal&oacute;n principal House Sevillana &mdash; 290 m&sup2; en el casco hist&oacute;rico de Sevilla" loading="lazy"/>
      </div>
      <div class="gi">
        <img src="https://lh3.googleusercontent.com/d/11KXrpvDr9wfO3W7ds0TSzMj1W7ixnQVQ"
             alt="Dormitorio House Sevillana &mdash; 6 habitaciones dobles en Sevilla centro" loading="lazy"/>
      </div>
      <div class="gi">
        <img src="https://lh3.googleusercontent.com/d/1oAiLqJlHLGc6iqIFtiXqZqTandNKewRf"
             alt="Patio andaluz House Sevillana &mdash; patio interior con azulejos t&iacute;picos sevillanos" loading="lazy"/>
      </div>
      <div class="gi">
        <img src="https://lh3.googleusercontent.com/d/1nSzkddZhv8ul5HMXpVsfJZfL8XJZMuzd"
             alt="Cocina House Sevillana &mdash; cocina equipada para grupos grandes" loading="lazy"/>
      </div>
      <div class="gi">
        <img src="https://lh3.googleusercontent.com/d/1YRd-RfZKbIq-I8UqxzH3Qo4HP_6E_UF4"
             alt="Fachada House Sevillana &mdash; casa hist&oacute;rica con parking en Sevilla" loading="lazy"/>
      </div>
    </div>
  </div>
</div>

<!-- UBICACIÓN -->
<section id="ubicacion">
  <div class="wrap">
    <div class="tag">Ubicaci&oacute;n</div>
    <h2>En el coraz&oacute;n del casco hist&oacute;rico</h2>
    <p class="s-sub">Calle Socorro 24, barrio de San Juli&aacute;n (41003 Sevilla). A pasos del Palacio de las Due&ntilde;as y la Iglesia de San Luis de los Franceses.</p>
    <div class="loc-grid">
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.8!2d-5.9924!3d37.3942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzM5LjEiTiA1wrA1OSczMi42Ilc!5e0!3m2!1ses!2ses!4v1"
                allowfullscreen loading="lazy" title="Ubicaci&oacute;n House Sevillana &mdash; Calle Socorro 24, Sevilla"></iframe>
      </div>
      <ul class="dlist">
        <li><span class="dp">Palacio de las Due&ntilde;as</span><span class="dt">2 min a pie</span></li>
        <li><span class="dp">San Luis de los Franceses</span><span class="dt">4 min a pie</span></li>
        <li><span class="dp">Catedral de Sevilla</span><span class="dt">10 min a pie</span></li>
        <li><span class="dp">Real Alc&aacute;zar</span><span class="dt">12 min a pie</span></li>
        <li><span class="dp">Torre del Oro</span><span class="dt">14 min a pie</span></li>
        <li><span class="dp">Plaza de Espa&ntilde;a</span><span class="dt">15 min a pie</span></li>
        <li><span class="dp">Barrio de Triana</span><span class="dt">20 min a pie</span></li>
        <li><span class="dp">Estaci&oacute;n Santa Justa</span><span class="dt">25 min a pie</span></li>
        <li><span class="dp">Aeropuerto SVQ</span><span class="dt">20 min en taxi</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- FAQ -->
<div class="faq-sec">
  <section id="faq">
    <div class="wrap">
      <div class="tag">Preguntas frecuentes</div>
      <h2>Todo lo que necesitas saber</h2>
      <div class="faq-wrap">
        <details open>
          <summary>&iquest;Tiene parking privado House Sevillana?</summary>
          <div class="fa">S&iacute;. Dispone de una plaza de garaje privado en el mismo edificio, reservable con tu estancia (peque&ntilde;o coste adicional). Aparcar en el casco antiguo de Sevilla es muy complicado &mdash; esta es nuestra ventaja m&aacute;s valorada por los hu&eacute;spedes que llegan en coche.</div>
        </details>
        <details>
          <summary>&iquest;Cu&aacute;ntas personas caben en la casa?</summary>
          <div class="fa">6 dormitorios dobles para hasta 12 personas. Perfecta para grupos de amigos, familias numerosas multigeneracionales o varias parejas que viajan juntas por Sevilla.</div>
        </details>
        <details>
          <summary>&iquest;D&oacute;nde est&aacute; ubicada exactamente?</summary>
          <div class="fa">Calle Socorro 24, 41003 Sevilla, en el barrio hist&oacute;rico de San Juli&aacute;n. A menos de 10 minutos a pie de la Catedral y el Alc&aacute;zar, y pr&aacute;cticamente al lado del Palacio de las Due&ntilde;as.</div>
        </details>
        <details>
          <summary>&iquest;Qu&eacute; ventaja tiene reservar directamente?</summary>
          <div class="fa">Te ahorras la comisi&oacute;n que cobran los portales (hasta un 22% en Booking.com). Adem&aacute;s te comunicas directamente con el propietario para cualquier necesidad antes o durante tu estancia, sin intermediarios.</div>
        </details>
        <details>
          <summary>&iquest;Cu&aacute;les son los horarios de entrada y salida?</summary>
          <div class="fa">Check-in a partir de las 15:00 h. Check-out hasta las 12:00 h. Cons&uacute;ltanos si necesitas horario flexible.</div>
        </details>
        <details>
          <summary>&iquest;Incluye ropa de cama y toallas?</summary>
          <div class="fa">S&iacute;. Ropa de cama y toallas para todos los hu&eacute;spedes est&aacute;n incluidas en la reserva.</div>
        </details>
        <details>
          <summary>&iquest;Qu&eacute; licencia tur&iacute;stica tiene la propiedad?</summary>
          <div class="fa">VFT/SE/01179, inscrita en el Registro de Turismo de Andaluc&iacute;a conforme a la normativa vigente de viviendas con fines tur&iacute;sticos (VFT).</div>
        </details>
      </div>
    </div>
  </section>
</div>

<!-- BOOKING -->
<div class="book-sec" id="reserva">
  <div class="wrap">
    <div class="tag">Reserva directa</div>
    <h2>Comprueba disponibilidad</h2>
    <p class="s-sub">Reserva directamente sin intermediarios. Sin comisiones. Confirmaci&oacute;n inmediata.</p>
    <div id="apartmentIframe352007"></div>
  </div>
</div>

<!-- RESEÑAS -->
<section id="resenas">
  <div class="wrap">
    <div class="tag">Rese&ntilde;as</div>
    <h2>Lo que dicen nuestros hu&eacute;spedes</h2>
    <div class="rev-grid">
      <div class="rev">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="rt">"Casa espectacular. El patio andaluz es un sue&ntilde;o. Dormimos 10 personas comod&iacute;simas y el parking fue un plus enorme en el casco hist&oacute;rico."</p>
        <div class="ra">Mar&iacute;a G.</div><div class="rs">Booking.com &middot; 9.8/10</div>
      </div>
      <div class="rev">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="rt">"Incredibly spacious house in the perfect location. The rooftop terrace with evening views was our favourite spot. Great for a large family."</p>
        <div class="ra">James T.</div><div class="rs">Airbnb &middot; 5/5</div>
      </div>
      <div class="rev">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="rt">"Maison parfaite pour un grand groupe. Tr&egrave;s bien situ&eacute;, facile de se d&eacute;placer dans S&eacute;ville. Le propri&eacute;taire tr&egrave;s r&eacute;actif. On recommande &agrave; 100%."</p>
        <div class="ra">Claire D.</div><div class="rs">Booking.com &middot; 9.6/10</div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="fg">
      <div>
        <div class="fb">House Sevillana</div>
        <p class="ft2">Casa tur&iacute;stica en el casco hist&oacute;rico de Sevilla. 290 m&sup2;, 6 dormitorios, parking privado. Reserva directa sin comisiones.</p>
        <p style="margin-top:.875rem;font-size:.75rem;color:rgba(255,255,255,.28);font-weight:300">VFT/SE/01179</p>
      </div>
      <div>
        <div class="fh">La casa</div>
        <ul class="fl">
          <li><a href="#caracteristicas">Caracter&iacute;sticas</a></li>
          <li><a href="#galeria">Galer&iacute;a</a></li>
          <li><a href="#ubicacion">Ubicaci&oacute;n</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div>
        <div class="fh">Reservar</div>
        <ul class="fl">
          <li><a href="#reserva">Reserva directa</a></li>
          <li><a href="https://www.booking.com/hotel/es/house-sevillana-parking.es.html" target="_blank" rel="noopener noreferrer">Booking.com</a></li>
          <li><a href="https://www.airbnb.es" target="_blank" rel="noopener noreferrer">Airbnb</a></li>
        </ul>
      </div>
      <div>
        <div class="fh">Contacto</div>
        <ul class="fl">
          <li><a href="mailto:alberto.suarez.gutierrez@gmail.com">Email</a></li>
          <li><a href="tel:+34637349990">+34 637 349 990</a></li>
          <li><a href="https://maps.google.com/?q=Calle+Socorro+24+Sevilla" target="_blank" rel="noopener noreferrer">Calle Socorro 24, Sevilla</a></li>
        </ul>
      </div>
    </div>
    <div class="fbot">
      <p>&copy; 2025 House Sevillana &middot; Bercell &middot; Todos los derechos reservados</p>
      <span class="fvft">VFT/SE/01179 &middot; Registro de Turismo de Andaluc&iacute;a</span>
    </div>
  </div>
</footer>

<script>
(function(){
  var nav=document.getElementById('mainnav');
  function sc(){nav.classList.toggle('scrolled',window.scrollY>60)}
  window.addEventListener('scroll',sc,{passive:true});sc();
})();
document.getElementById('ham').onclick=function(){document.getElementById('mob').classList.toggle('open')};
function cm(){document.getElementById('mob').classList.remove('open')}
(function(){
  var s=document.createElement('script');
  s.src='https://login.smoobu.com/js/Settings/BookingToolIframe.js';
  s.onload=function(){
    BookingToolIframe.initialize({
      url:'https://login.smoobu.com/es/booking-tool/iframe/103685/352007',
      baseUrl:'https://login.smoobu.com',
      target:'#apartmentIframe352007'
    });
  };
  document.body.appendChild(s);
})();
</script>
</body>
</html>`;

export const runtime = 'edge';

export async function GET() {
  return new NextResponse(HTML, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
