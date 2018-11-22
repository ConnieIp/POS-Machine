const printReciept = require("../main");

describe('countBuyItems', function() {
    it(`Given ['ITEM000001','ITEM000001'] and product list, When call countBuyItems, Then return a buy item list [{barcode: 'ITEM000001', name:'Coca-Cola', unit:'bottles', price:3.00, quantity:2}]`, function() {
        let idList = ['ITEM000001', 'ITEM000001'];
        let result = printReciept.countBuyItems(idList, printReciept.loadAllItems());
        expect(result).toEqual([{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 2 }]);
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
    it(`Given { barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 2 }, When call calculateSubTotalPrice, Then return a buy item list { barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 2, subTotal: 6.00 }`, function() {
        let buyItem = { barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 2 };
        let result = printReciept.calculateSubTotalPrice(buyItem);
        expect(result).toEqual({ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 2, subTotal: 6.00 });
    });
});


describe('calculatePromotionSubTotalPrice', function() {
    it(`Given { barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00 }] and promotion list, When call calculateSubTotalPrice, Then return a buy item list [{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }`, function() {
        let buyItem = { barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00 };
        let result = printReciept.calculatePromotionSubTotalPrice(buyItem, printReciept.loadPromotions());
        expect(result).toEqual({ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 });
    });
});

describe('calculateTotal', function() {
    it(`Given [{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 },{ barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 2, subTotal: 11.00}], When call calculateTotal, Then return 17.00`, function() {
        let buyItemList = [{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 2, subTotal: 11.00 }];
        let result = printReciept.calculateTotal(buyItemList);
        expect(result).toEqual(17.00);
    });
});

describe('calculateSaving', function() {
    it(`Given [{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50, promotionSubTotal: 11.00 }];, When call calculateTotal, Then return 8.50`, function() {
        let buyItemList = [{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50, promotionSubTotal: 11.00 }];
        let result = printReciept.calculateSaving(buyItemList);
        expect(result).toEqual(8.50);
    });
});

describe('getDetailOfBuyItem', function() {
    it(`Given ['ITEM000001','ITEM000001','ITEM000001','ITEM000002-2'], When call calculateTotal, Then return 17.00`, function() {
        let idList = ['ITEM000001', 'ITEM000001', 'ITEM000001', 'ITEM000002-3'];
        let result = printReciept.getDetailOfBuyItem(idList, printReciept.loadAllItems(), printReciept.loadPromotions());
        expect(result).toEqual([{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50 }]);
    });
});

describe('printTable', function() {
    it(`Given [{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50 }], When call calculateTotal, Then return 17.00`, function() {
        let buyItemList = [{ barcode: 'ITEM000001', name: 'Sprite', unit: 'bottles', price: 3.00, quantity: 3, subTotal: 9.00, promotionSubTotal: 6.00 }, { barcode: 'ITEM000002', name: 'Apple', unit: 'g', price: 5.50, quantity: 3, subTotal: 16.50 }];
        let result = printReciept.printTable(buyItemList);
        expect(result).toEqual(`***<store earning no money>Receipt ***
Name: Sprite, Quantity: 3 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)
Name: Apple, Quantity: 3 g, Unit price: 5.50 (yuan), Subtotal: 16.50 (yuan)
----------------------
Total: 22.50 (yuan)
Saving: 3.00 (yuan)
**********************`);
    });
});

describe('pos', () => {

    it('should print text', () => {

        const tags = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2.5',
            'ITEM000005',
            'ITEM000005-2',
        ];

        spyOn(console, 'log');

        printReciept.printReceipt(tags);

        const expectText = `***<store earning no money>Receipt ***
Name: Sprite, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 12.00 (yuan)
Name: Litchi, Quantity: 2.5 kg, Unit price: 15.00 (yuan), Subtotal: 37.50 (yuan)
Name: Noodles, Quantity: 3 bags, Unit price: 4.50 (yuan), Subtotal: 9.00 (yuan)
----------------------
Total: 58.50 (yuan)
Saving: 7.50 (yuan)
**********************`;

        expect(console.log).toHaveBeenCalledWith(expectText);
    });

});