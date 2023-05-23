module.exports = {
  "Testing UI": {
    "Should match the snapshot": {
      "1": "<body>\n  <header>\n    <h1>Financial Times</h1>\n  </header>\n  <main>\n    <div class=\"cards\">\n      <script>\n        const loadedStocks =\n          \"FTSE:FSI,EURUSD,GBPUSD,INX:IOM,IB.1:IEU,AAPL,GOOGL\";\n      </script>\n      <div data-symbol=\"FTSE:FSI\"\n        class=\"card positive\"\n        data-tooltip=\"FTSE 100 Index\">\n        <div class=\"card-title\">\n          FTSE:FSI\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">7756.87</span>\n              <span class=\"price__hover_lost\">7770.99</span>\n            </div>\n            <div class=\"change-percent positive\"\n              data-color=\"positive\">\n              0.182%\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-symbol=\"EURUSD\"\n        class=\"card positive\"\n        data-tooltip=\"Euro/US Dollar FX Spot Rate\">\n        <div class=\"card-title\">\n          EURUSD\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">1.081</span>\n              <span class=\"price__hover_lost\">1.081</span>\n            </div>\n            <div class=\"change-percent positive\"\n              data-color=\"positive\">\n              0.009%\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-symbol=\"GBPUSD\"\n        class=\"card negative\"\n        data-tooltip=\"UK Pound Sterling/US Dollar FX Spot Rate\">\n        <div class=\"card-title\">\n          GBPUSD\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">1.244</span>\n              <span class=\"price__hover_lost\">1.243</span>\n            </div>\n            <div class=\"change-percent negative\"\n              data-color=\"negative\">\n              0.024%\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-symbol=\"INX:IOM\"\n        class=\"card positive\"\n        data-tooltip=\"S&amp;P 500 INDEX\">\n        <div class=\"card-title\">\n          INX:IOM\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">4190.78</span>\n              <span class=\"price__hover_lost\">4192.63</span>\n            </div>\n            <div class=\"change-percent positive\"\n              data-color=\"positive\">\n              0.016%\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-symbol=\"IB.1:IEU\"\n        class=\"card positive\"\n        data-tooltip=\"ICE Brent Crude Oil Front Month\">\n        <div class=\"card-title\">\n          IB.1:IEU\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">75.63</span>\n              <span class=\"price__hover_lost\">75.94</span>\n            </div>\n            <div class=\"change-percent positive\"\n              data-color=\"positive\">\n              0.476%\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-symbol=\"AAPL\"\n        class=\"card negative\"\n        data-tooltip=\"Apple Inc\">\n        <div class=\"card-title\">\n          AAPL\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">173.98</span>\n              <span class=\"price__hover_lost\">174.2</span>\n            </div>\n            <div class=\"change-percent negative\"\n              data-color=\"negative\">\n              0.548%\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-symbol=\"GOOGL\"\n        class=\"card positive\"\n        data-tooltip=\"Alphabet Inc\">\n        <div class=\"card-title\">\n          GOOGL\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">122.94</span>\n              <span class=\"price__hover_lost\">125.05</span>\n            </div>\n            <div class=\"change-percent positive\"\n              data-color=\"positive\">\n              1.865%\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n  <script src=\"/static/main.js\"></script>\n\n</body>"
    },
    "Should match the snapshot of single stock": {
      "1": "<body>\n  <header>\n    <h1>Financial Times</h1>\n  </header>\n  <main>\n    <div class=\"cards\">\n      <script>\n        const loadedStocks = \"AAPL\";\n      </script>\n      <div data-symbol=\"AAPL\"\n        class=\"card negative\"\n        data-tooltip=\"Apple Inc\">\n        <div class=\"card-title\">\n          AAPL\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body__price\">\n            <div class=\"price\">\n              <span class=\"price__hover\">173.98</span>\n              <span class=\"price__hover_lost\">174.2</span>\n            </div>\n            <div class=\"change-percent negative\"\n              data-color=\"negative\">\n              0.548%\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n  <script src=\"/static/main.js\"></script>\n\n</body>"
    }
  },
  "__version": "12.12.0"
}
