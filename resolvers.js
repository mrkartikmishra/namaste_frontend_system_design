const languages = [
  {
    id: "lang_1",
    name: "English",
  },
  {
    id: "lang_2",
    name: "Spanish",
  },
  {
    id: "lang_3",
    name: "Mandarin",
  },
  {
    id: "lang_4",
    name: "French",
  },
  {
    id: "lang_5",
    name: "German",
  },
  {
    id: "lang_6",
    name: "Japanese",
  },
  {
    id: "lang_7",
    name: "Russian",
  },
  {
    id: "lang_8",
    name: "Arabic",
  },
  {
    id: "lang_9",
    name: "Hindi",
  },
  {
    id: "lang_10",
    name: "Portuguese",
  },
];

const countries = [
  {
    id: "country_1",
    name: "United States",
    continent: "con_1",
    language: "lang_1",
  },
  {
    id: "country_2",
    name: "Spain",
    continent: "con_2",
    language: "lang_2",
  },
  {
    id: "country_3",
    name: "China",
    continent: "con_3",
    language: "lang_3",
  },
  {
    id: "country_4",
    name: "France",
    continent: "con_2",
    language: "lang_4",
  },
  {
    id: "country_5",
    name: "Germany",
    continent: "con_2",
    language: "lang_5",
  },
  {
    id: "country_6",
    name: "Japan",
    continent: "con_3",
    language: "lang_6",
  },
  {
    id: "country_7",
    name: "Russia",
    continent: "con_4",
    language: "lang_7",
  },
  {
    id: "country_8",
    name: "Saudi Arabia",
    continent: "con_5",
    language: "lang_8",
  },
  {
    id: "country_9",
    name: "India",
    continent: "con_3",
    language: "lang_9",
  },
  {
    id: "country_10",
    name: "Brazil",
    continent: "con_6",
    language: "lang_10",
  },
];

const continents = [
  {
    id: "con_1",
    name: "North America",
    countries: ["country_1", "country_2"],
  },
  {
    id: "con_2",
    name: "Europe",
    countries: ["country_3", "country_4"],
  },
  {
    id: "con_3",
    name: "Asia",
    countries: ["country_5", "country_6"],
  },
  {
    id: "con_4",
    name: "Europe/Asia",
    countries: ["country_7"],
  },
  {
    id: "con_5",
    name: "Middle East",
    countries: ["country_8"],
  },
  {
    id: "con_6",
    name: "South America",
    countries: ["country_10"],
  },
];

export const resolvers = {
  Continent: {
    countries: (parent, args, context, info) => {
      return countries.filter((country) =>
        parent.countries.includes(country.id)
      );
    },
  },
  Country: {
    language: (parent, args, context, info) => {
      return languages.find((lang) => lang.id === parent.language);
    },
  },

  Query: {
    continents: () => {
      return continents;
    },
    countries: () => {
      return countries;
    },
  },

  Mutation: {
    addLanguage: (parent, args, context, info) => {
      languages.push({ ...args });
      return { ...args };
    },

    addCountry: (parent, args, context, info) => {
      countries.push({ ...args });
      return { ...args };
    },

    addContinent: (parent, args, context, info) => {
      continents.push({ ...args });
      return { ...args };
    },
  },
};
