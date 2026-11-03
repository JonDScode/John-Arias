// Generado a partir de la carpeta de fotos que entrego el cliente.
// Un evento = un trabajo = las mismas personas; sus fotos viven en
// public/galeria/<slug>/01.jpg..NN.jpg
export const eventos = [
  { slug: "boda-finca", cat: "Boda", titulo: "Boda — Finca en Osona", n: 32 },
  { slug: "boda-jardin", cat: "Boda", titulo: "Boda — Ceremonia en el jardín", n: 5 },
  { slug: "preboda-pueblo", cat: "Preboda", titulo: "Preboda — Pueblo medieval", n: 10 },
  { slug: "preboda-mirador", cat: "Preboda", titulo: "Preboda — Mirador de Osona", n: 3 },
  { slug: "quince-celeste", cat: "Quinceañera", titulo: "Quinceañera — Vestido celeste", n: 8 },
  { slug: "quince-menta", cat: "Quinceañera", titulo: "Quinceañera — Vestido menta", n: 11 },
  { slug: "quince-esmeralda", cat: "Quinceañera", titulo: "Quinceañera — Sesión en verde", n: 4 },
  { slug: "prequince-urbano", cat: "Pre-quince", titulo: "Pre-quince — Sesión urbana", n: 12 },
  { slug: "prequince-bosque", cat: "Pre-quince", titulo: "Pre-quince — En el bosque", n: 8 },
  { slug: "prequince-atardecer", cat: "Pre-quince", titulo: "Pre-quince — Retrato al atardecer", n: 4 },
  { slug: "comunion-vic", cat: "Comunión", titulo: "Comunión — Calles de Vic", n: 9 },
  { slug: "comunion-ceremonia", cat: "Comunión", titulo: "Comunión — La ceremonia", n: 7 },
  { slug: "comunion-iglesia", cat: "Comunión", titulo: "Comunión — En la iglesia", n: 5 },
  { slug: "comunion-retrato", cat: "Comunión", titulo: "Comunión — Retrato en exteriores", n: 8 },
];

// La reticula va agrupada por servicio, en el orden que pidio el cliente.
export const secciones = [
  { cat: "Boda", titulo: "Bodas" },
  { cat: "Quinceañera", titulo: "Quinceañeras" },
  { cat: "Preboda", titulo: "Preboda" },
  { cat: "Pre-quince", titulo: "Pre-quince" },
  { cat: "Comunión", titulo: "Comuniones" },
];

// Una portada por trabajo. Cada una abre el carrusel de su evento.
export const portadas = [
  { img: "01.jpg", slug: "boda-finca", size: "wide", ratio: "900 / 600",
    alt: "Los novios saliendo entre los invitados tras la ceremonia de su boda en Osona" },
  { img: "02.jpg", slug: "boda-jardin", size: "narrow", ratio: "577 / 900",
    alt: "Novios abrazados con el ramo de flores azules en el jardín" },
  { img: "03.jpg", slug: "quince-celeste", size: "narrow", ratio: "600 / 900",
    alt: "Quinceañera con vestido celeste y corona posando en un jardín" },
  { img: "04.jpg", slug: "quince-menta", size: "narrow", ratio: "600 / 900",
    alt: "Retrato de quinceañera con vestido menta y corona" },
  { img: "05.jpg", slug: "quince-esmeralda", size: "narrow", ratio: "600 / 900",
    alt: "Quinceañera con vestido verde esmeralda apoyada en una barandilla" },
  { img: "06.jpg", slug: "preboda-pueblo", size: "narrow", ratio: "600 / 900",
    alt: "Pareja al fondo de unas escaleras de piedra en un pueblo medieval, sesión de preboda" },
  { img: "07.jpg", slug: "preboda-mirador", size: "wide", ratio: "900 / 600",
    alt: "Pareja riendo con las montañas de Osona al fondo durante su sesión de preboda" },
  { img: "08.jpg", slug: "prequince-urbano", size: "narrow", ratio: "600 / 900",
    alt: "Sesión de pre-quince con camisa azul en un parque de Vic" },
  { img: "09.jpg", slug: "prequince-bosque", size: "narrow", ratio: "600 / 900",
    alt: "Retrato de pre-quince apoyada en el tronco de un pino" },
  { img: "10.jpg", slug: "prequince-atardecer", size: "narrow", ratio: "600 / 900",
    alt: "Retrato de pre-quince de perfil contra un muro de piedra a última hora de la tarde" },
  { img: "11.jpg", slug: "comunion-vic", size: "", ratio: "675 / 900",
    alt: "Niña de primera comunión apoyada en un muro de piedra en Vic" },
  { img: "12.jpg", slug: "comunion-ceremonia", size: "", ratio: "600 / 900",
    alt: "Niña de comunión rezando con corona y velo de encaje" },
  { img: "13.jpg", slug: "comunion-iglesia", size: "", ratio: "600 / 900",
    alt: "Niño de primera comunión en el pasillo central ante el altar dorado" },
  { img: "14.jpg", slug: "comunion-retrato", size: "", ratio: "589 / 900",
    alt: "Niño de primera comunión caminando por una avenida arbolada de Vic" },
];
