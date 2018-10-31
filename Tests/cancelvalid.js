module.exports = (cancelpageObjects, cancelvalid) => {
    cancelpageObjects
            
                .setValue('@wid', cancelvalid.wid)
                .setValue('@res', cancelvalid.res)
                .setValue('@doc', cancelvalid.doc)
                .click('@submitbutton')
                .expect.element('@results').text.to.equal('Assembled Query:').before(5000)
}