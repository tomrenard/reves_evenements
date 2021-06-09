export default {
  name: 'destination',
  title: 'Catégories Destinations',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type destination',
      type: 'string',
    },
    {
      name: 'contentmenudestination',
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
      name: 'iconedestination1',
      title: 'Icône destination',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titledestination1',
      title: 'Titre header',
      type: 'string',
    },
    {
      name: 'contentdestination1',
      title: 'Contenu paragraphe header',
      type: 'string',
    },
    {
      name: 'imagedestination1',
      title: 'Image header',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titletransidestination1',
      title: 'Titre transition bloc 2',
      type: 'string',
    },
    {
      name: 'titledestination2h6',
      title: 'destination title h6 bloc 2',
      type: 'string',
    },
    {
      name: 'titledestination2h2',
      title: 'destination title bloc 2',
      type: 'string',
    },
    {
      name: 'contentdestination2',
      title: 'destination content bloc 2',
      type: 'string',
    },
    {
      name: 'imagedestination2',
      title: 'Image destination bloc 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titledestination3h6',
      title: 'destination title h6 bloc 3',
      type: 'string',
    },
    {
      name: 'titledestination3',
      title: 'destination title bloc 3',
      type: 'string',
    },
    {
      name: 'contentdestination3',
      title: 'destination content bloc 3',
      type: 'string',
    },
    {
      name: 'imagedestination3',
      title: 'Image destination bloc 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titledestination4',
      title: 'destination destination bloc 4',
      type: 'string',
    },
    {
      name: 'titledestination4h6',
      title: 'destination title h6 bloc 4',
      type: 'string',
    },
    {
      name: 'contentdestination4',
      title: 'destination content bloc 4',
      type: 'string',
    },
    {
      name: 'imagedestination4',
      title: 'Image destination bloc 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titledestination5',
      title: 'destination title bloc 5',
      type: 'string',
    },
    {
      name: 'titledestination5h6',
      title: 'destination title h6 bloc 5',
      type: 'string',
    },
    {
      name: 'contentdestination5',
      title: 'destination content bloc 5',
      type: 'string',
    },
    {
      name: 'imagedestination5',
      title: 'Image destination bloc 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titledestination6',
      title: 'destination title bloc 6',
      type: 'string',
    },
    {
      name: 'titledestinationt6h6',
      title: 'destination title h6 bloc 6',
      type: 'string',
    },
    {
      name: 'contentdestination6',
      title: 'destination content bloc 6',
      type: 'string',
    },
    {
      name: 'imagedestination6',
      title: 'Image destination bloc 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testidestination1',
      title: 'Testimonial destination 1',
      type: 'string',
    },
    {
      name: 'testidestinationcompany1',
      title: 'Testimonial company destination 1',
      type: 'string',
    },
    {
      name: 'authortestidestination1',
      title: 'Author Testimonial destination 1',
      type: 'string',
    },
    {
      name: 'imagedestinationtesti1',
      title: 'Image destination Testimonial 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
