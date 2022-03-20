/* eslint-disable no-undef */
/// <reference types="cypress" />

import { API_URL } from "../../../src/utils/constants";

describe("Home Screen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("display inputs and results by default", () => {
    cy.get("[data-testid=input-section]").should("have.length", 1);
    cy.get("[data-testid=antecipation-section").should("have.length", 1);

    cy.get("#input-mdr").should("have.value", "");
    cy.get("#input-installments").should("have.value", "");

    cy.get(
      "[data-testid=tomorrow-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ ");
    cy.get(
      "[data-testid=fifteen-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ ");
    cy.get(
      "[data-testid=thirty-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ ");
    cy.get(
      "[data-testid=ninety-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ ");
  });

  it("display results after requesting data", () => {
    cy.intercept(
      {
        method: "POST",
        url: API_URL
      },
      { 1: 9716, 15: 10376, 30: 11084, 90: 11792 }
    );

    cy.get("#input-mdr").type(12);
    cy.get("#input-sale").type(13400);
    cy.get("#input-installments").type(2).type("{enter}");

    cy.get(
      "[data-testid=tomorrow-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ 97,16");
    cy.get(
      "[data-testid=fifteen-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ 103,76");
    cy.get(
      "[data-testid=thirty-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ 110,84");
    cy.get(
      "[data-testid=ninety-result] [data-testid=text-block__amount]"
    ).should("have.text", "R$ 117,92");
  });

  it("display input as invalid when requesting with empty", () => {
    cy.get("#input-sale").type(13400).type("{enter}");

    cy.get("#input-mdr").parent().should("have.class", "invalid");
    cy.get("#input-installments").parent().should("have.class", "invalid");
  });
});
