import path from 'path';

async function turnEventsIntoPages({ graphql, actions }) {
  const eventTemplate = path.resolve('./src/templates/Event.js');
  const { data } = await graphql(`
    query {
      events: allSanityEvent {
        nodes {
          type
          slug {
            current
          }
        }
      }
    }
  `);
  data.events.nodes.forEach(event => {
    actions.createPage({
      path: `evenement/${event.slug.current}`,
      component: eventTemplate,
      context: {
        slug: event.slug.current,
      },
    })
  });
}

export async function createPages(params) {
  await turnEventsIntoPages(params);
}
