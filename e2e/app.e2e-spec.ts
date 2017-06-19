import { TodoAngularPage } from './app.po';

describe('todo-angular App', () => {
  let page: TodoAngularPage;

  beforeEach(() => {
    page = new TodoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
