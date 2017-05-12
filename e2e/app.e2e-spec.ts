import { PetsPage } from './app.po';

describe('pets App', () => {
  let page: PetsPage;

  beforeEach(() => {
    page = new PetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
