module.exports = (modifypageObjects, modifyinvalid) => {
    modifypageObjects
                .navigate()
                .setValue('@header', modifyinvalid.header)
                .setValue('@mke', modifyinvalid.mke)
                .setValue('@ori', modifyinvalid.ori)
                .setValue('@name', modifyinvalid.name)
                .click('@sex')
                .click('@race')
                .setValue('@hgt', modifyinvalid.hgt)
                .setValue('@wgt', modifyinvalid.wgt)
                .setValue('@hair', modifyinvalid.hair)
                .setValue('@off', modifyinvalid.off)
                .setValue('@dow', modifyinvalid.dow)
                .setValue('@oln', modifyinvalid.oln)
                .setValue('@ols', modifyinvalid.ols)
                .setValue('@dlexp', modifyinvalid.dlexp)
                .setValue('@lic', modifyinvalid.lic)
                .setValue('@lis', modifyinvalid.lis)
                .setValue('@lid', modifyinvalid.lid)
                .click('@submitbutton')
                .expect.element('@results1').text.to.equal('Errors Received:').before(5000)
}