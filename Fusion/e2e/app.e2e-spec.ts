import { FusionPage } from './app.po';

describe('fusion App', () => {
  let page: FusionPage;

  beforeEach(() => {
    page = new FusionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
