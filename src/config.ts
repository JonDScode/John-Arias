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
  // Ficha de Google con las reseñas (5,0 de 9). Ojo: hay una segunda ficha
  // duplicada, "John Arias Fotografia y Video", sin reseñas ni web.
  googleBusiness: "https://maps.google.com/?cid=13325104204672320476",
  galerias: "https://johnarias.pixieset.com/",

  // Reseñas de la ficha de Google, literales. Las largas van cortadas por
  // el final con puntos suspensivos, nunca por dentro: ni una palabra
  // cambiada ni reordenada. Sin schema Review: Google no admite marcar
  // reseñas traidas de otra plataforma.
  resenas: [
    {
      autor: "Sofía Peña",
      estrellas: 5,
      texto:
        "No puedo estar más feliz con el resultado de las fotos de mis XV años. Desde el primer momento me hizo sentir muy cómoda y tranquila, algo que para mí era muy importante porque quería disfrutar de ese día sin preocuparme por nada…",
    },
    {
      autor: "Cristian Muñoz",
      estrellas: 5,
      texto:
        "Tuvimos la oportunidad de contar con su servicio para los 15 años de nuestra hija y fue muy profesional, el compromiso, la responsabilidad y el asesoramiento de inicio a fin. Muchas gracias por todo.",
    },
    {
      autor: "Jonathan Peña Zapata",
      estrellas: 5,
      texto:
        "Gracias por hacer parte de un día tan importante para nuestra familia. Nos encantó el resultado de las fotos, quedaron espectaculares. Se nota el amor y la dedicación que le pones a tu trabajo…",
    },
    {
      autor: "R. R.",
      estrellas: 5,
      texto:
        "No podríamos estar más contentos con el trabajo de nuestro fotógrafo de boda. El servicio fue excelente de principio a fin y el trato con él fue inmejorable: cercano, profesional y siempre dispuesto a ayudarnos…",
    },
  ] as { autor: string; estrellas: number; texto: string }[],

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
