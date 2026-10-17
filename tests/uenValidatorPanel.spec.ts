import { test, expect } from "@playwright/test";

test.describe("UEN Workflow", () => {
  test("Fill UEN (nnnnnnnnX) for Business and validate", async ({ page }) => {
    await page.goto("/uen-validator");

    // Fill in and click
    const inputField = page.locator("#uen");
    await inputField.fill("01234567K");
    await page.getByRole("button", { name: /validate/i }).click();

    // Verify metadata attributes
    const statusBadge = page.locator("span", { hasText: "VALID UEN" });
    await expect(statusBadge).toBeVisible();
    await expect(
      page.getByText("Businesses (ACRA)", { exact: true }),
    ).toBeVisible();
    await expect(page.locator("span", { hasText: "N.A." })).toBeVisible();
    await expect(
      page.getByText("Local Company / Business", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Accounting and Corporate Regulatory Authority (ACRA)", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("Fill UEN (yyyynnnnnX)for Local Company and validate ", async ({
    page,
  }) => {
    await page.goto("/uen-validator");

    // Fill in and click
    const inputField = page.locator("#uen");
    await inputField.fill("199801234Z");
    await page.getByRole("button", { name: /validate/i }).click();

    // Verify result (success)
    const statusBadge = page.locator("span", { hasText: "VALID UEN" });
    await expect(statusBadge).toBeVisible();
    await expect(
      page.getByText("Local Companies (ACRA)", { exact: true }),
    ).toBeVisible();
    await expect(page.locator("span", { hasText: "1998" })).toBeVisible();
    await expect(
      page.getByText("Local Company / Business", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Accounting and Corporate Regulatory Authority (ACRA)", {
        exact: true,
      }),
    ).toBeVisible();
  });
  test("Fill UEN (TyyPQnnnnX) for Other Entities and validate ", async ({
    page,
  }) => {
    await page.goto("/uen-validator");

    //Fill in and click
    const inputField = page.locator("#uen");
    await inputField.fill("T08HC0001A");
    await page.getByRole("button", { name: /validate/i }).click();

    // Verify result (success)
    const statusBadge = page.locator("span", { hasText: "VALID UEN" });
    await expect(statusBadge).toBeVisible();
    await expect(
      page.getByText("All Other Entities", { exact: true }),
    ).toBeVisible();
    await expect(page.locator("span", { hasText: "2008" })).toBeVisible();
    await expect(
      page.locator("text=Healthcare Service Providers"),
    ).toBeVisible();
    await expect(page.locator("text=Ministry of Health (MOH)")).toBeVisible();
  });

  test("Fill short UEN and validate", async ({ page }) => {
    await page.goto("/uen-validator");

    // Fill in and click
    const inputField = page.locator("#uen");
    await inputField.fill("T08HC00");
    await page.getByRole("button", { name: /validate/i }).click();

    // Verify result (failure)
    const statusBadge = page.locator("span", { hasText: "INVALID UEN" });
    await expect(statusBadge).toBeVisible();
    await expect(
      page.getByText("Unknown/Invalid Format", { exact: true }),
    ).toBeVisible();
  });

  test("Press Enter on input to trigger validate", async ({ page }) => {
    await page.goto("/uen-validator");
    const inputField = page.locator("#uen");
    await inputField.fill("199801234Z");
    await inputField.press("Enter");
    await expect(page.locator("span", { hasText: "VALID UEN" })).toBeVisible();
  });

  test("Click Clear Button to clear text in input box", async ({ page }) => {
    await page.goto("/uen-validator");

    await test.step("Fill in and Clear", async () => {
      // Fill in and Clear
      const inputField = page.locator("#uen");
      await inputField.fill("some-text-to-be-cleared");
      await page.getByRole("button", { name: /clear/i }).click();

      // Verify empty field
      await expect(inputField).toHaveValue("");
    });

    await test.step("Validate empty field", async () => {
      // Click and verify (failure)
      await page.getByRole("button", { name: /validate/i }).click();
      await expect(
        page.getByText("You did not input anything", {
          exact: true,
        }),
      ).toBeVisible();
    });
  });

  test("Open and close Guide/Help Modal", async ({ page }) => {
    await page.goto("/uen-validator");

    await test.step(`Click open with "Guide/Help" button`, async () => {
      await page.getByRole("button", { name: /guide/i }).click();
      await expect(
        page.getByText("UEN Structure & Entity Type Indicator Reference", {
          exact: true,
        }),
      ).toBeVisible();
    });

    await test.step(`Click close with "Close Reference" button`, async () => {
      await page.getByRole("button", { name: /close reference/i }).click();
      await expect(
        page.getByText("UEN Structure & Entity Type Indicator Reference", {
          exact: true,
        }),
      ).not.toBeVisible();
    });
  });
  test("Click All Quick Fills, check text input and validate", async ({
    page,
  }) => {
    await page.goto("/uen-validator");

    await test.step("Click Quick Fill Business", async () => {
      await page.getByRole("button", { name: /business/i }).click();
      await expect(page.locator("#uen")).toHaveValue("01234567K");
    });

    await test.step("Click Quick Fill Local Company", async () => {
      await page.getByRole("button", { name: /company/i }).click();
      await expect(page.locator("#uen")).toHaveValue("199801234Z");
    });

    await test.step("Click Quick Fill Other Entities", async () => {
      await page.getByRole("button", { name: /other entities/i }).click();
      await expect(page.locator("#uen")).toHaveValue("T08HC0001A");
    });

    await test.step("Click Validate", async () => {
      await page.getByRole("button", { name: /validate/i }).click();
      await expect(
        page.locator("span", { hasText: "VALID UEN" }),
      ).toBeVisible();
    });
  });
});
