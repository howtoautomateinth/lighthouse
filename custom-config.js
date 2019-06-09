'use strict';
module.exports = {
    extends: 'lighthouse:default',

    passes:[{
        passName: 'defaultPass',
        gatherers: ['gatherer'],
    }],

    audits:
        ['audits'],

    categories: {
        mysite:{
            title: 'My site metrics',
            description: 'Metrics for Howtoautomate.in.th',
            auditRefs: [
                {id:'load-audit',weight:1}
            ]
        }
    }
}