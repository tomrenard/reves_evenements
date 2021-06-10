export default {
  name: 'aboutUs',
  title: 'Page À Propos',
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
    {
      name: 'title3',
      title: 'Page title bloc 3',
      type: 'string',
    },
    {
      name: 'content3',
      title: 'Page content bloc 3',
      type: 'string',
    },
    {
      name: 'imagebloc3',
      title: 'Image bloc 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
