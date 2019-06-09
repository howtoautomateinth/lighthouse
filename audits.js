'use strict';
const Audit = require('lighthouse').Audit;

class LoadAudit extends Audit{
    static get meta(){
        return {
            id: 'load-audit',
            title: 'Custom:: Site Load Time',
            category: 'CustomThing',
            description: 'Site should load less than 1 sec',
            helpText: 'navigationStart to responseStart',
            requiredArtifacts: ['SiteMetricsGatherer']
        };
    }
    static audit(artifacts){
        const loadMetrics = artifacts.SiteMetricsGatherer;
        return {
            rawValue: '${loadMetrics} ms',
            score: Number(loadMetrics <= 1000)
        }
    }
}

module.exports = LoadAudit;