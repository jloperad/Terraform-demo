import { ItemsListPage, AddItemPage } from "../page/index";

describe("Adding Items", () => {
  let itemsListPage : ItemsListPage;
  let addItemPage : AddItemPage;

  const name = "Milk";
  const sellin = "8";
  const quality = "35";
  const type = "NORMAL";

  before(() => {
    itemsListPage = new ItemsListPage();
    addItemPage = new AddItemPage();
  });

  it("then the item should be added, and be displayed ", () => {
    itemsListPage.visitMenuContentPage();

    itemsListPage.AddItem();
    addItemPage.fillInNameInput(name);
    addItemPage.fillInSellInInput(sellin);
    addItemPage.fillInQualityInput(quality);
    addItemPage.clickType();
    addItemPage.chooseType(type);
    addItemPage.confirmAdd();

    cy.wait(12200);
    itemsListPage.ValidateItemIsDisplayed(name, sellin, quality, type);
  });
});
