module.exports = {
    id: 'test',
    engine : "puppeteer",
    engineOptions : {
        headless: true,
    },
    "puppeteerOffscreenCaptureFix" : true,
    viewports: [
      {
        name: 'phone',
        width: 360,
        height: 3000
      },
      {
        name: 'tablet_v',
        width: 568,
        height: 3000
      },
      {
        name: 'tablet_h',
        width: 1024,
        height: 3000
      },
      {
        name: 'desktop',
        width: 1366,
        height: 3000
      }
    ],
    scenarios: [
      {
        label: 'EE DE header',
        url: 'http://localhost:8000/stubbedComponents/header',
        hideSelectors: [],
        removeSelectors: [],
        selectorExpansion: true,
        selectors: [
          '.header'
        ],
        readyEvent: "componentLoaded",
        delay: 1000,
        misMatchThreshold: 0.1,
      },
      {
        label: 'EE DE footer',
        url: 'http://localhost:8000/stubbedComponents/footer',
        hideSelectors: [],
        removeSelectors: [],
        selectorExpansion: true,
        selectors: [
          '.footer'
        ],
        readyEvent: "componentLoaded",
        delay: 1000,
        misMatchThreshold: 0.1,
      },
      {
        label: 'EE DE contact',
        url: 'http://localhost:8000/stubbedComponents/contact',
        hideSelectors: [],
        removeSelectors: [],
        selectorExpansion: true,
        selectors: [
          '.main-container'
        ],
        readyEvent: "componentLoaded",
        delay: 1000,
        misMatchThreshold: 0.1,
      },
      {
        label: 'EE DE roles',
        url: 'http://localhost:8000/stubbedComponents/roles',
        hideSelectors: [],
        removeSelectors: [],
        selectorExpansion: true,
        selectors: [
          '.roles',
          '.roleTypes',
        ],
        readyEvent: "componentLoaded",
        delay: 1000,
        misMatchThreshold: 0.1,
      }
    ],
    paths: {
      bitmaps_reference: './tests/visualRegression/backstop_data/bitmaps_reference',
      bitmaps_test: './tests/visualRegression/backstop_data/bitmaps_test',
      html_report: './tests/visualRegression/backstop_data/html_report',
      ci_report: './tests/visualRegression/backstop_data/ci_report'
    },
    report: ['browser'],
    debug: false
  };