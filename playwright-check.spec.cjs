const { test, expect } = require('@playwright/test');

test('service gallery selector updates the route', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER console:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('http://127.0.0.1:3000/services/outlets-switches', { waitUntil: 'networkidle' });
  await expect(page.locator('h1')).toContainText('Real residential electrical work');
  await page.locator('#service-select').selectOption('light-fixtures');
  await page.waitForURL('**/services/light-fixtures');
  await expect(page).toHaveURL(/\/services\/light-fixtures/);
  await expect(page.locator('#service-select')).toHaveValue('light-fixtures');
});
