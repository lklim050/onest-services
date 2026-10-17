import { test, expect } from "@playwright/test";

test.describe("Pages Test Cases", () => {
  test(`Click the "UEN Validator" button from Home Page and go back`, async ({
    page,
  }) => {
    await test.step(`Click "UEN Validator" Button`, async () => {
      // Step 1: Click UEN page button
      await page.goto("/");
      await page.getByRole("heading", { name: "UEN Validator" }).click();

      // Step 2: Verify if link is /uen-validator
      await expect(page).toHaveURL(/uen-validator/);
    });
    await test.step(`Click "Back to Home" button `, async () => {
      await page.getByRole("link", { name: /back to home/i }).click();
      await expect(page).toHaveURL("/");
    });
  });
  test(`Click the "Weather Forecast" button from Home Page and go back`, async ({
    page,
  }) => {
    await test.step(`Click "Weather Forecast" Button`, async () => {
      // Step 1: Click Weather page button
      await page.goto("/");
      await page.getByRole("heading", { name: "Weather Forecast" }).click();

      // Step 2: Verify if link is /weather-forecast
      await expect(page).toHaveURL(/weather-forecast/);
    });
    await test.step(`Click "Back to Home" button `, async () => {
      await page.getByRole("link", { name: /back to home/i }).click();
      await expect(page).toHaveURL("/");
    });
  });
  test(`Click the "Check Service Status" and "Run Diagnostics" buttons`, async ({
    page,
  }) => {
    await page.goto("/uen-validator");

    await test.step(`Click "Check Service Status" Button`, async () => {
      await page.getByRole("button", { name: /check service status/i }).click();
      await expect(
        page.getByText("UEN Service Health Check", { exact: true }),
      ).toBeVisible();
    });
    await test.step(`Click "Run Diagnostics" Button`, async () => {
      await page.getByRole("button", { name: /run diagnostics/i }).click();
      await expect(
        page.getByText("Operational", { exact: true }),
      ).toBeVisible();
    });
    await test.step(`Click "Close" Button`, async () => {
      await page.getByRole("button", { name: /close|x/i }).click();
      await expect(
        page.getByText("UEN Service Health Check", { exact: true }),
      ).not.toBeVisible();
    });
  });

  test(`Click the "Check API Status" and "Run Diagnostics" buttons`, async ({
    page,
  }) => {
    await page.goto("/weather-forecast");

    await test.step(`Click "Check API Status" Button`, async () => {
      await page.getByRole("button", { name: /check api status/i }).click();
      await expect(
        page.getByText("API Health Check", { exact: true }),
      ).toBeVisible();
    });
    await test.step(`Click "Run Diagnostics" Button`, async () => {
      await page.getByRole("button", { name: /run diagnostics/i }).click();
      await expect(
        page.getByText("Operational", { exact: true }),
      ).toBeVisible();
    });
    await test.step(`Click "Close" Button`, async () => {
      await page.getByRole("button", { name: /close|x/i }).click();
      await expect(
        page.getByText("UEN Service Health Check", { exact: true }),
      ).not.toBeVisible();
    });
  });
});
