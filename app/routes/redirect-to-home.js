import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { log } from '../lib/logger';

export default class extends Route {
  @service router;

  async beforeModel() {
    try {
      await this.router.replaceWith('home');
      // await this.replaceWith('home'); // Legacy method - this works

      log('Transition completed');
    } catch (err) {
      log('Transition rejected');
    }
  }
}
