// Datos del negocio: fuente única de verdad para SEO, schema y contacto.
// IMPORTANTE (SEO local): estos datos deben coincidir EXACTAMENTE con los del
// perfil de Google Business Profile — mismo nombre, mismo formato de teléfono.

export const site = {
  name: "John Arias | Fotografía y Video",
  shortName: "John Arias",
  url: "https://johnarias.com",
  base: "",

  // Cambiar a false cuando el sitio esté listo para aparecer en Google.
  // Mientras sea true, ningún buscador indexará la página.
  enRevision: true,

  descripcion:
    "Fotógrafo y videógrafo en Vic, Barcelona. Bodas, quinceañeras, comuniones, retratos, gastronomía y fotografía de producto. Más de una década creando recuerdos.",

  telefono: "+34 657 195 833",
  telefonoLink: "+34657195833",
  email: "Johnedicion80@gmail.com",

  ciudad: "Vic",
  provincia: "Barcelona",
  pais: "ES",
  lat: 41.9301,
  lon: 2.2545,

  instagram: "https://www.instagram.com/johnarias80/",
  galerias: "https://johnarias.pixieset.com/",

  servicios: [
    "Fotografía de bodas",
    "Fotografía de quinceañeras",
    "Fotografía de comuniones",
    "Retratos",
    "Fotografía gastronómica",
    "Fotografía de producto",
    "Vídeo de eventos",
  ],

  // Ciudades donde trabaja — ayuda al SEO local
  zonas: ["Vic", "Barcelona", "Osona", "Manlleu", "Girona", "Cataluña"],
};
