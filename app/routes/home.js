import Route from '@ember/routing/route';

export default class extends Route {
  queryParams = {
    foo: {
      refreshModel: true, // Removing refreshModel makes the test pass
    },
  };
}
