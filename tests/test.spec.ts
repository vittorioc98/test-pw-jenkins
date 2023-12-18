import { test } from "@playwright/test"

// test.describe('Prova describe', () => {

//     test.use({ pagename: "Fascicolo dipendenti", nostorage: true })

//     test('Prova', async ({ fascicolo }) => {

//     })
// })

test('Test1', async ({ page }) => {
    test.info().annotations.push({
        type: 'test_summary', description: 'Test integrazione 1'
    });
    test.info().annotations.push({ type: 'test_key', description: 'TSHRSTD-708' });

    await test.step('Prova step', async () => {
        await page.waitForTimeout(1000)
    })
})

test('Test2', async ({ page }) => {
    test.info().annotations.push({ type: 'test_summary', description: 'Test integrazione 2' });
    test.info().annotations.push({ type: 'test_key', description: 'TSHRSTD-709' });

    await test.step('Prova step', async () => {
        await page.waitForTimeout(1000)
    })

})
