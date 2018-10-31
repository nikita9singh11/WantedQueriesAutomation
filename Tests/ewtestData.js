module.exports = {
    validTests : [
        {
            header:'NI98765432',
            mke:'ni@',
            ori:'nik987654',
            name:'Nikita ',
            sex: 'F',
            race: 'A',
            hgt: '120',
            wgt: '135',
            hair: 'Black',
            off: 'Burgalary',
            dow: '04102018',
            oln: '12345',
            ols: 'CA',
            dlexp: '23102018',
            lic: 'CA',
            lis: 'CA',
            lid: '28102018'
        },
    
    ],
invalidTests : [ 
    {
        header:'NA111',
        mke:'ni@',
        ori:'abc123456',
        name:'Nikita',
        sex: 'F',
        race: 'A',
        hgt: '200',
        wgt: '150',
        hair: 'Black',
        off: 'Burglary',
        dow: '04102018',
        oln: '12345',
        ols: 'CA',
        dlexp: '28102018',
        lic: 'CA555',
        lis: 'CA',
        lid: '28102018',
    },
],
cancelvalid: [
    { 
        wid: '1234567899',
        res: 'Driving under the influence',
        doc: '09102018',
    },
],
cancelinvalid: [
    {
        wid: '12345678',
        res: 'abcde231',
        doc:'09102020',
    },
],
modifyvalid: [
    {
        wid: '6098510187',
        header:'Ni98765432',
        mke:'ni@',
        ori:'abc123456',
        name:'Nikita ',
        sex: 'F',
        race: 'A',
        hgt: '190',
        wgt: '160',
        hair: 'Black',
        off: 'Burglary',
        dow: '01102018',
        oln: '12345',
        ols: 'UT',
        dlexp: '23102018',
        lic: 'UT345',
        lis: 'UT',
        lid: '03052018'
    },
],

modifyinvalid: [
        {
            wid: '6098510187',
            header:'Ni987',
            mke:'ni@',
            ori:'abc123456',
            name:'Nikita ',
            sex: 'F',
            race: 'A',
            hgt: '173',
            wgt: '150',
            hair: 'Black',
            off: 'Robbery',
            dow: '01102018',
            oln: '12345',
            ols: 'UT',
            dlexp: '23102018',
            lic: 'UT345',
            lis: 'UT',
            lid: '03052018'
        },
],
}

    

    