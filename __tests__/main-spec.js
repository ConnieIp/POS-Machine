const printReciept = require("../main");

describe('countBuyItems', function() {
    it(`Given ['ITEM000001','ITEM000001'] and product list, When call countBuyItems, Then return a buy item list {barcode: 'ITEM000001', name:'Coca-Cola', unit:'bottles', price:3, quantity:2}`, function() {
        let idList = ['ITEM000001', 'ITEM000001'];
        let result = printReciept.countBuyItems(idList, printReciept.loadAllItems);
        expect(result).toEqual({ barcode: 'ITEM000001', name: 'Coca-Cola', unit: 'bottles', price: 3, quantity: 2 });
    });
});