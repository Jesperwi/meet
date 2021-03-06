import puppeteer from 'puppeteer';
import { mockData } from '../mock-data';

jest.setTimeout(30000);

    describe('show/hide an event details', () => {
        let browser;
        let page;
        beforeAll(async () => {
          browser = await puppeteer.launch();
          page = await browser.newPage();
          await page.goto('http://localhost:3000/');
          await page.waitForSelector('.event');
        });

        afterAll(() => {
          browser.close();
        });

      test('An event element is collapsed by default', async () =>{
        
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 250, 
            ignoreDefaultArgs: ['--disable-extensions']
          });

        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');

        await page.waitForSelector('.event');
        
        const eventDetails = await page.$('.event .event_Details');
        expect(eventDetails).toBeNull();
        browser.close();

        if (window.location.href.startsWith('http://localhost')) {
            return mockData.events;
          }
      });

      test('User can expand an event to see its details', async () => {
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    
        await page.waitForSelector('.event');
        await page.click('.event .details-btn');
    
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeDefined();
        browser.close();
      });

      test('User can collapse an event to hide its details', async () => {
        
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
      });

});
