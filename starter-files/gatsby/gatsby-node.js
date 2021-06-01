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

async function turnDestinationsIntoPages({ graphql, actions }) {
  const destinationTemplate = path.resolve('./src/templates/Destination.js');
  const { data } = await graphql(`
    query {
      destinations: allSanityDestination {
        nodes {
          type
          slug {
            current
          }
        }
      }
    }
  `);
  data.destinations.nodes.forEach(destination => {
    actions.createPage({
      path: `destination/${destination.slug.current}`,
      component: destinationTemplate,
      context: {
        slug: destination.slug.current,
      },
    })
  });
}

export async function createPages(params) {
  await Promise.all([
    turnEventsIntoPages(params),
    turnDestinationsIntoPages(params),
  ]);
}
