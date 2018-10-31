var cancelvalid1 = require('./cancelvalid')
var cancelinvalid1 = require('./cancelinvalid')
var ewtestData1 = require('../Tests/ewtestData')
var cancelpageObjects

module.exports = {
    beforeEach: browser => {
        cancelpageObjects = browser.page.cancelpageObjects()
        cancelpageObjects.navigate()
    },

    after: browser => {
        browser.end()
    
    },

'Check Valid Search (Cancel Wanted Queries)' : browser => {
    browser.refresh()
    cancelvalid1(cancelpageObjects, ewtestData1.cancelvalid[0])
},

'Check Invalid Search (Cancel Wanted Queries)' : browser => {
    cancelinvalid1(cancelpageObjects, ewtestData1.cancelinvalid[0] )

    },
}