export const menuData = [
  {
    color: "red",
    label: "Le Cabinet",
    path: "home",
  },
  {
    color: "green",
    label: "Infirmerie",
    subMenu: [],
    hasRDV: true,
    RDVPath: "https://theuselessweb.com/",
  },
  {
    color: "orange",
    label: "Ostéopathie",
    hasRDV: true,
    RDVPath: "https://theuselessweb.com/",
    subMenu: [
      {
        label: "Osteo",
        path: "osteopathie/osteo",
      },
      {
        label: "Consult",
        path: "osteopathie/consultation",
      },
      {
        label: "Parcours",
        path: "osteopathie/parcours",
      },
      {
        label: "Diplome",
        path: "osteopathie/diplome",
      },
      {
        label: "Atelier",
        path: "osteopathie/ateliers",
      },
    ],
  },
  {
    color: "purple",
    label: "Psychomot'",
    hasRDV: true,
    RDVPath: "https://theuselessweb.com/",
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
    label: "Aller plus loin ESS",
    subMenu: [],
  },
];
