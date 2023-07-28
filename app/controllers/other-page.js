import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { log } from '../lib/logger';

export default class extends Controller {
  @service router;

  @action
  async visitHome() {
    try {
      await this.router.replaceWith('home');
      // await this.transitionToRoute('home'); // Legacy method - this works
      log('Transition completed');
    } catch (err) {
      log('Transition rejected');
    }
  }
}
