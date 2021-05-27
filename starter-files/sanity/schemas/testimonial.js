export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Name of the company',
      type: 'string',
    },
    {
      name: 'author',
      title: 'author name',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content testimonial',
      type: 'string',
    },
    {
      name: 'imagetestimonial',
      title: 'Image Testimonial',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
