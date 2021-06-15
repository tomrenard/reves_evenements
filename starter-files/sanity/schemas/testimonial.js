export default {
  name: 'testimonial',
  title: 'Témoignages clients',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Nom entreprise',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Nom auteur',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Contenu témoignage',
      type: 'text',
    },
    {
      name: 'imagetestimonial',
      title: 'Image témoignage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
