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

describe('calculateSubTotalPrice', function() {
    it(`Given [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 2 }], When call calculateSubTotalPrice, Then return a buy item list [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 2, subTotal: 6.00 }]`, function() {
        let buyItemList = [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 2 }];
        let result = printReciept.calculateSubTotalPrice(buyItemList);
        expect(result).toEqual([{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 2, subTotal: 6.00 }]);
    });
});


describe('calculatePromotionSubTotalPrice', function() {
    it(`Given [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00 }] and promotion list, When call calculateSubTotalPrice, Then return a buy item list [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }]`, function() {
        let buyItemList = [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00 }];
        let result = printReciept.calculatePromotionSubTotalPrice(buyItemList, printReciept.loadPromotions());
        expect(result).toEqual([{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }]);
    });
});

describe('calculateTotal', function() {
    it(`Given [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 },{ barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 2, subTotal: 11.00}], When call calculateTotal, Then return 17.00`, function() {
        let buyItemList = [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 2, subTotal: 11.00 }];
        let result = printReciept.calculateTotal(buyItemList);
        expect(result).toEqual(17.00);
    });
});

describe('calculateSaving', function() {
    it(`Given [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50, promotionSubTotal: 11.00 }];, When call calculateTotal, Then return 8.50`, function() {
        let buyItemList = [{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50, promotionSubTotal: 11.00 }];
        let result = printReciept.calculateSaving(buyItemList);
        expect(result).toEqual(8.50);
    });
});

describe('getDetailOfBuyItem', function() {
    it(`Given ['ITEM000001','ITEM000001','ITEM000001','ITEM000002-2'], When call calculateTotal, Then return 17.00`, function() {
        let idList = ['ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000002-3'];
        let result = printReciept.getDetailOfBuyItem(idList, printReciept.loadAllItems(), printReciept.loadPromotions());
        expect(result).toEqual([{ barcode: 'ITEM000001', name: 'Sprike', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50 }]);
    });
});