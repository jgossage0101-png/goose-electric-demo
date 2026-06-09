import path from 'node:path';
import { test, expect } from '@playwright/test';

test('upload is explicit and persists for the active service', async ({ page }) => {
  const imagePath = path.resolve('src/assets/goose-logo.jpeg');

  await page.goto('http://127.0.0.1:3000/services/outlets-switches', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload({ waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Admin Upload' }).click();
  await expect(page.getByText('Admin project upload')).toBeVisible();

  await expect(page.getByText('No projects uploaded for this service yet.')).toBeVisible();

  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles(imagePath);

  await expect(page.getByText('No projects uploaded for this service yet.')).toBeVisible();

  await page.getByPlaceholder('Enter employee ID').fill('E-100');
  await page.getByRole('button', { name: 'Upload photos' }).click();
  await expect(page.getByText('No projects uploaded for this service yet.')).toHaveCount(0);
  await expect(page.locator('img[alt="goose-logo.jpeg"]')).toBeVisible();

  await page.reload({ waitUntil: 'networkidle' });
  await expect(page.locator('img[alt="goose-logo.jpeg"]')).toBeVisible();
});
