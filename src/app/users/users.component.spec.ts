import { AppComponent } from '../app.component';
import { UsersComponent } from './users.component';

describe('AppComponent', () => {
  let fixture: UsersComponent;

  beforeEach(() => {
    fixture = new UsersComponent();
  });

  it('should have a title User Mangement', () => {
    expect(fixture.title).toEqual('User Management');
  });
});
