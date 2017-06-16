import { Ng2Nature1Page } from './app.po';

describe('ng2-nature1 App', () => {
  let page: Ng2Nature1Page;

  beforeEach(() => {
    page = new Ng2Nature1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
