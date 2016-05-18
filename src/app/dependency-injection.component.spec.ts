import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DependencyInjectionAppComponent } from '../app/dependency-injection.component';

beforeEachProviders(() => [DependencyInjectionAppComponent]);

describe('App: DependencyInjection', () => {
  it('should create the app',
      inject([DependencyInjectionAppComponent], (app: DependencyInjectionAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'dependency-injection works!\'',
      inject([DependencyInjectionAppComponent], (app: DependencyInjectionAppComponent) => {
    expect(app.title).toEqual('dependency-injection works!');
  }));
});
