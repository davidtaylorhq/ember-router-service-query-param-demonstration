import Controller from '@ember/controller';

export default class extends Controller {
  queryParams = ['foo'];
  foo = 'bar'; // Removing this default value makes the test pass
}
