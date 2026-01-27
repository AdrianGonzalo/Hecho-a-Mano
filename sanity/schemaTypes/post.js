export default {
  name: "post",
  title: "Manualidad",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Tipo de manualidad",
      type: "string",
      options: {
        list: [
          { title: "Pirograbado", value: "pirograbado" },
          { title: "Piedra", value: "piedra" },
          { title: "Otros", value: "otros" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
  ],
}