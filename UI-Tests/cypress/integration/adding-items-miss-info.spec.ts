import { ItemsListPage, AddItemPage } from "../page/index";

describe("Adding Items with miss information", () => {
  let itemsListPage : ItemsListPage;
  let addItemPage : AddItemPage;

  const name = "Juice";
  const sellin = "16";
  const quality = "-1";
  const type = "NORMAL";

  before(() => {
    itemsListPage = new ItemsListPage();
    addItemPage = new AddItemPage();
  });

  it("then the item should not be created, and a error message should be displayed ", () => {
    itemsListPage.visitMenuContentPage();
    itemsListPage.AddItem();
    addItemPage.fillInNameInput(name);
    addItemPage.fillInSellInInput(sellin);
    addItemPage.fillInQualityInput(quality);
    addItemPage.clickType();
    addItemPage.chooseType(type);
    addItemPage.checkAddButton();
    addItemPage.checkErrorMessage();
  });
});
