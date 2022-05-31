import { ItemsListPage, DeleteItemPage } from "../page/index";

describe("Deleting first item", () => {
  let itemsListPage : ItemsListPage;
  let deleteItemPage : DeleteItemPage;

  const nameFirstItem = "Eggs";
  const sellinFirstItem = 10;
  const qualityFirstItem = 30;
  const typeFirstItem = "NORMAL";

  const nameSecondItem = "Coffee";
  const sellinSecondItem = 19;
  const qualitySecondItem = 34;
  const typeSecondItem = "NORMAL";

  before(() => {
    itemsListPage = new ItemsListPage();
    deleteItemPage = new DeleteItemPage();
    cy.request("http://localhost:8081/api/items").then((response) => {
      for (const item of response.body) {
        cy.request("DELETE", `http://localhost:8081/api/items/${item.id}`);
      }
    });

    cy.request("POST", "http://localhost:8081/api/items/", {
      name: nameFirstItem, sellIn: sellinFirstItem, quality: qualityFirstItem, type: typeFirstItem,
    });
    cy.request("POST", "http://localhost:8081/api/items/", {
      name: nameSecondItem, sellIn: sellinSecondItem, quality: qualitySecondItem, type: typeSecondItem,
    });
  });

  it("then the item should be deleted and no longer displayed in the list", () => {
    itemsListPage.visitMenuContentPage();
    itemsListPage.DeleteFirstItem();
    deleteItemPage.confirmDelete();
    cy.wait(5000);
    itemsListPage.ValidateItemIsNotDisplayed(nameFirstItem, sellinFirstItem, qualityFirstItem, typeFirstItem);
    itemsListPage.Insights();
    itemsListPage.validateInsights(typeFirstItem);
  });
});
