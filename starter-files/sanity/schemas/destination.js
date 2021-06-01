export default {
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Destination name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ]
};
