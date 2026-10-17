import { test, expect } from "@playwright/test";

test.describe("UEN Workflow", () => {
  test("Valid Validation for Local Company UEN (yyyynnnnnX)", async ({
    page,
  }) => {
    // Step 1: Go to UEN page by clicking UEN button link
    await page.goto("/");
    await page.getByRole("heading", { name: "UEN Validator" }).click();

    // Step 2: Enter a valid UEN into input field
    const inputField = page.locator("#uen");
    await inputField.fill("199801234A");

    // Step 3: Click Validate button
    await page.getByRole("button", { name: /validate/i }).click();

    // Step 4: Verify result (success)
    const statusBadge = page.locator("span", { hasText: "VALID UEN" });
    await expect(statusBadge).toBeVisible();

    // Step 5: Verify metadata attributes
    await expect(page.locator("text=Local Companies (ACRA)")).toBeVisible();
    await expect(page.locator("span", { hasText: "1998" })).toBeVisible();
  });
});
