import test, { expect } from "@playwright/test";

test.describe("Weather Panel workflow", async () => {
  test("Check Table Rendering", async ({ page }) => {
    await page.goto("weather-forecast");
    await expect(page.getByRole("table")).toBeVisible();
  });
  test("Filter by inputing a particular area", async ({ page }) => {
    await page.goto("weather-forecast");
    const inputField = page.locator("#area");
    await inputField.fill("cha");
    await expect(page.getByRole("row", { name: "Changi" })).toBeVisible();
    await expect(
      page.getByRole("row", { name: "Ang Mo Kio" }),
    ).not.toBeVisible();
    await expect(page.getByRole("row", { name: "Novena" })).not.toBeVisible();
    await expect(page.getByRole("row", { name: "Yishun" })).not.toBeVisible();
  });
  test("Filter with invalid area to shows zero results", async ({ page }) => {
    await page.goto("weather-forecast");
    const inputField = page.locator("#area");
    await inputField.fill("there-is-no-such-area");
    await expect(page.getByText(/no matching locations/i)).toBeVisible();
  });
  test("Clearing the filter restores the full region list", async ({
    page,
  }) => {
    await page.goto("weather-forecast");
    await test.step("Input something and filter", async () => {
      const inputField = page.locator("#area");
      await inputField.fill("Changi");
      await expect(
        page.getByRole("row", { name: "Ang Mo Kio" }),
      ).not.toBeVisible();
    });
    await test.step(`Click "Clear" button and verify`, async () => {
      await page.getByRole("button", { name: /clear/i }).click();
      await expect(page.getByText(/showing 47 of 47 regions/i)).toBeVisible();
    });
  });
  test(`Click "Refresh" button and updates view`, async ({ page }) => {
    await page.goto("weather-forecast");
    await page.getByRole("button", { name: /refresh/i }).click();
    await expect(page.getByText(/last update:/i)).toBeVisible();
    await expect(page.getByText(/validity period:/i)).toBeVisible();
    await expect(page.getByRole("table")).toBeVisible();
  });
});
