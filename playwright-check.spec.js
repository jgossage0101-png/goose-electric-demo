import { test, expect } from '@playwright/test';

test('service gallery selector updates the route', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/services/outlets-switches', { waitUntil: 'networkidle' });
  await expect(page.locator('h1')).toContainText('Real residential electrical work');
  await page.locator('#service-select').selectOption('light-fixtures');
  await page.waitForURL('**/services/light-fixtures');
  await expect(page).toHaveURL(/\/services\/light-fixtures/);
  await expect(page.locator('h1')).toContainText('Real residential electrical work');
  await expect(page.locator('text=Light Fixtures')).toBeVisible();
});
