export default {
  name: 'value',
  title: 'Valeurs',
  type: 'document',
  fields: [
    {
        name: 'titlevalue',
        title: 'Nom valeur',
        type: 'string',
      },
    {
      name: 'contentvalue',
      title: 'Value content',
      type: 'text',
    },
    {
      name: 'imagebloc2',
      title: 'Image bloc 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
