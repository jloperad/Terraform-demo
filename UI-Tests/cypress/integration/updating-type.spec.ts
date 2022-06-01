import { ItemsListPage, AddItemPage } from "../page/index";

describe("Updating First Item", () => {
  let itemsListPage : ItemsListPage;
  let addItemPage : AddItemPage;

  const name = "Biscuit";
  const sellin = 10;
  const quality = 34;
  const type = "NORMAL";
  const newType = "AGED";
  const link = "50.17.112.102";

  before(() => {
    itemsListPage = new ItemsListPage();
    addItemPage = new AddItemPage();

    cy.request(`http://${link}:8081/api/items`).then((response) => {
      for (const item of response.body) {
        cy.request("DELETE", `http://${link}:8081/api/items/${item.id}`);
      }
    });

    cy.request("POST", `http://${link}:8081/api/items`, {
      name, sellIn: sellin, quality, type,
    });
  });

  it("then the item type should be updated, and displayed ", () => {
    itemsListPage.visitMenuContentPage();
    itemsListPage.EditFirstItem();
    addItemPage.clickType();
    addItemPage.chooseType(newType);
    addItemPage.confirmAdd();
    cy.wait(2000);
    itemsListPage.ValidateItemIsDisplayed(name, sellin, quality, newType);
    itemsListPage.Insights();
    cy.wait(2000);
    itemsListPage.validateInsights(newType);
  });
});
