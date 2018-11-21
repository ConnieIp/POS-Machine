const printReciept = require("../main");

describe('countBuyItems', function() {
    it(`Given ['ITEM000001','ITEM000001'] and product list, When call countBuyItems, Then return a buy item list [{barcode: 'ITEM000001', name:'Coca-Cola', unit:'bottles', price:3.00, quantity:2}]`, function() {
        let idList = ['ITEM000001', 'ITEM000001'];
        let result = printReciept.countBuyItems(idList, printReciept.loadAllItems());
        expect(result).toEqual([{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 2 }]);
    });
});


describe('countBuyItems', function() {
    it(`Given ['ITEM000002-2'] and product list, When call countBuyItems, Then return a buy item list [{barcode: 'ITEM000002', name:'Apple', unit:'g', price:5.50, quantity:2}]`, function() {
        let idList = ['ITEM000002-2'];
        let result = printReciept.countBuyItems(idList, printReciept.loadAllItems());
        expect(result).toEqual([{ barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 2 }]);
    });
});

describe('countBuyItems', function() {
    it(`Given ['ITEM000002-2', 'ITEM000002-3'] and product list, When call countBuyItems, Then return a buy item list [{barcode: 'ITEM000002', name:'Apple', unit:'g', price:5.50, quantity:5}]`, function() {
        let idList = ['ITEM000002-2', 'ITEM000002-3'];
        let result = printReciept.countBuyItems(idList, printReciept.loadAllItems());
        expect(result).toEqual([{ barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 5 }]);
    });
});