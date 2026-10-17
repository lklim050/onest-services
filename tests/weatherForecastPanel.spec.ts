import test, { expect } from "@playwright/test";

test.describe("Weather Panel workflow", async () => {
  test("Check Table Rendering", async ({ page }) => {
    await page.goto("weather-forecast");
    await expect(page.getByRole("table")).toBeVisible();
  });
});
