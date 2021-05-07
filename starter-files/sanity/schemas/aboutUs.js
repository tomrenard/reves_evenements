export default {
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'title1',
      title: 'Page title',
      type: 'string',
    },
    {
      name: 'content1',
      title: 'Page content bloc 1',
      type: 'string',
    },
    {
      name: 'titlebloc2',
      title: 'Title bloc 2',
      type: 'string',
    },
    {
      name: 'content2',
      title: 'Content bloc 2',
      type: 'string',
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
