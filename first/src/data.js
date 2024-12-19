export const menuData = [
  {
    color: "red",
    label: "Le Cabinet",
    path: "cabinet",
    pageTitle: "Le Cabinet",
    pageDescription:
      "Le cabinet propose une approche holistique de la santé, combinant les services d'infirmerie, d'ostéopathie et de psychomotricité. Notre équipe de professionnels qualifiés travaille en synergie pour offrir des soins personnalisés et adaptés à chaque patient. Que ce soit pour des consultations médicales, des séances de thérapie manuelle ou des interventions en psychomotricité, nous mettons tout en œuvre pour améliorer votre bien-être et votre qualité de vie.",
    imgPath: "/assets/cabinet/cabinet.jpg",
  },
  {
    color: "green",
    label: "Infirmerie",
    subMenu: [],
    hasRDV: true,
    RDVPath: "https://theuselessweb.com/",
    path: "infirmerie",
  },
  {
    color: "orange",
    label: "Ostéopathie",
    path: "osteopathie",
    hasRDV: true,
    RDVPath: "https://www.doctolib.fr/osteopathe/lyon/stephane-dumas-lyon",
    subMenu: [
      {
        label: "L'osthéopatie",
        pageTitle: "L'Osthéopatie",
        pageDescription:
          "L'osthéopatie est une médecine manuelle qui vise à soulager les douleurs et les tensions du corps.",
        path: "osteopathie/presentation",
        imgPath: "/assets/osteo/vitruvian_man.png",
      },
      {
        label: "Les Consultations",
        path: "osteopathie/consultations",
        pageTitle: "Les Consultations",
        imgPath: "/assets/osteo/vitruvian_man.png",
      },
      {
        label: "Mon Parcours",
        path: "osteopathie/parcours",
        pageTitle: "Mon Parcours",
        imgPath: "/assets/osteo/vitruvian_man.png",
      },
      {
        label: "Mes Diplomes",
        path: "osteopathie/diplomes",
        pageTitle: "Mes Diplomes",
        imgPath: "/assets/osteo/learning.png",
      },
      {
        label: "Les Ateliers",
        path: "osteopathie/ateliers",
        pageTitle: "Les Ateliers",
        imgPath: "/assets/osteo/vitruvian_man.png",
      },
    ],
  },
  {
    color: "purple",
    label: "Psychomotricité",
    hasRDV: true,
    RDVPath: "https://perfactive.fr/list/nicolas-remy",
    subMenu: [
      {
        label: "Equipe",
        path: "psychomot/equipe",
      },
      {
        label: "Qu'est-ce que c'est ?",
        path: "psychomot/qu-est-ce-que-c-est",
      },
      {
        label: "Qui peut en bénéficier ?",
        path: "psychomot/qui-peut-en-beneficier",
      },
      {
        label: "Comment consulter",
        path: "psychomot/comment-consulter",
      },
    ],
  },
  {
    color: "blue",
    label: "Aller + loin ESS",
    subMenu: [],
  },
];
