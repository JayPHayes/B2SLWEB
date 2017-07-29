import { B2SLWEBPage } from './app.po';

describe('b2-slweb App', () => {
  let page: B2SLWEBPage;

  beforeEach(() => {
    page = new B2SLWEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
