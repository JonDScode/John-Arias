// Datos del negocio: fuente única de verdad para SEO, schema y contacto.
// IMPORTANTE (SEO local): estos datos deben coincidir EXACTAMENTE con los del
// perfil de Google Business Profile — mismo nombre, mismo formato de teléfono.

export const site = {
  name: "John Arias | Fotografía y Video",
  shortName: "John Arias",
  url: "https://johnarias.com",
  base: "",

  // En true, ningún buscador indexa la página. Se desactivó el 2026-11-03,
  // cuando John publicó el dominio en su ficha de Google y en Instagram.
  enRevision: false,

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
  // Enlace publico del perfil de Google Business (el de "compartir").
  // Vacio = no se muestra el enlace "ver todas las reseñas".
  googleBusiness: "",
  galerias: "https://johnarias.pixieset.com/",

  // Reseñas del perfil de Google, copiadas a mano. La seccion no se
  // renderiza mientras este vacio. Sin schema Review: Google no admite
  // marcar reseñas traidas de otra plataforma.
  resenas: [] as { autor: string; estrellas: number; texto: string }[],

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
