var modifyvalid1 = require('./modifyvalid')
var modifyinvalid1 = require('./modifyinvalid')
var modifypageObjects
var ewtestData1 = require('../Tests/ewtestData')

module.exports = {
    beforeEach: browser => {
        modifypageObjects = browser.page.modifypageObjects()
        modifypageObjects.navigate()
    },

    after: browser => {
        browser.end()
    },
    
    'Check Valid Search (Modify Wanted)' : browser => {
            modifyvalid1(modifypageObjects, ewtestData1.modifyvalid[0])
        },

    'Check Invalid Search (Modify Wanted)' : browser => {
            browser.refresh()
            modifyinvalid1(modifypageObjects, ewtestData1.modifyinvalid[0])
        },
    
    }