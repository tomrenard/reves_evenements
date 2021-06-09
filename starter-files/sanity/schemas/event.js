export default {
  name: 'event',
  title: 'Catégories Événements',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type événement',
      type: 'string',
    },
    {
      name: 'contentmenuevent',
      title: 'Contenu menu',
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
    {
      name: 'iconevent1',
      title: 'Icône événement',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleevent1',
      title: 'Titre header',
      type: 'string',
    },
    {
      name: 'contentevent1',
      title: 'Contenu paragraphe header',
      type: 'string',
    },
    {
      name: 'imageevent1',
      title: 'Image header',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titletransi1',
      title: 'Titre transition bloc 2',
      type: 'string',
    },
    {
      name: 'titleevent2h6',
      title: 'Event title h6 bloc 2',
      type: 'string',
    },
    {
      name: 'titleevent2h2',
      title: 'Event title bloc 2',
      type: 'string',
    },
    {
      name: 'contentevent2',
      title: 'Event content bloc 2',
      type: 'string',
    },
    {
      name: 'imageevent2',
      title: 'Image event bloc 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleevent3h6',
      title: 'Event title h6 bloc 3',
      type: 'string',
    },
    {
      name: 'titleevent3',
      title: 'Event title bloc 3',
      type: 'string',
    },
    {
      name: 'contentevent3',
      title: 'Event content bloc 3',
      type: 'string',
    },
    {
      name: 'imageevent3',
      title: 'Image event bloc 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleevent4',
      title: 'Event title bloc 4',
      type: 'string',
    },
    {
      name: 'titleevent4h6',
      title: 'Event title h6 bloc 4',
      type: 'string',
    },
    {
      name: 'contentevent4',
      title: 'Event content bloc 4',
      type: 'string',
    },
    {
      name: 'imageevent4',
      title: 'Image event bloc 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleevent5',
      title: 'Event title bloc 5',
      type: 'string',
    },
    {
      name: 'titleevent5h6',
      title: 'Event title h6 bloc 5',
      type: 'string',
    },
    {
      name: 'contentevent5',
      title: 'Event content bloc 5',
      type: 'string',
    },
    {
      name: 'imageevent5',
      title: 'Image event bloc 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleevent6',
      title: 'Event title bloc 6',
      type: 'string',
    },
    {
      name: 'titleevent6h6',
      title: 'Event title h6 bloc 6',
      type: 'string',
    },
    {
      name: 'contentevent6',
      title: 'Event content bloc 6',
      type: 'string',
    },
    {
      name: 'imageevent6',
      title: 'Image event bloc 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testievent1',
      title: 'Testimonial event 1',
      type: 'string',
    },
    {
      name: 'testieventcompany1',
      title: 'Testimonial company event 1',
      type: 'string',
    },
    {
      name: 'authortestievent1',
      title: 'Author Testimonial event 1',
      type: 'string',
    },
    {
      name: 'imageeventtesti1',
      title: 'Image event Testimonial 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
