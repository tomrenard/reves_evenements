export default {
  name: 'eventcategory',
  title: 'Liste des Événements',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Event name',
      type: 'string',
    },
    {
      title: 'Type events',
      name: 'typeevents',
      type: 'reference',
      to: [{type: 'event'}]
    },
    {
      name: 'contentevent',
      title: 'Event content',
      type: 'text',
    },
    {
      name: 'imageevent',
      title: 'Image event',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
