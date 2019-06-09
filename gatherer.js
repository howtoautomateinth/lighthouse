'use strict';
const Gatherer = require('lighthouse').Gatherer;

class SiteMetricsGatherer extends Gatherer {
    beforePass(){
        //before page loads
    }
    afterPass(options){
        const driver = options.driver;
        let responseStart  = driver.evaluateAsync('window.performance.timing.responseStart');
        let navigationStart = driver.evaluateAsync('window.performance.timing.navigationStart');
        return (responseStart  - navigationStart);
    }
}
module.exports = SiteMetricsGatherer;