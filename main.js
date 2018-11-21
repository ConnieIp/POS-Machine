'use strict';

function countBuyItems(idList, productList) {
    let buyItemList = productList.filter(product => idList.includes(product.barcode));
    buyItemList.forEach(item => {
        if (item.barcode.indexOf('-') >= 0) {
            let
        } else {
            item['quantity'] = (idList.filter(id => id === item.barcode)).length;
        }
    });
    return buyItemList;
}





function loadAllItems() {
    return [{
            barcode: 'ITEM000000',
            name: 'Coca-cola',
            unit: 'bottles',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: 'Sprike',
            unit: 'bottles',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: 'Apple',
            unit: 'g',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: 'Lychee',
            unit: 'g',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: 'Battery',
            unit: 'a',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: 'Noodles',
            unit: 'packs',
            price: 4.50
        }
    ];
}

function loadPromotions() {
    return [{
        type: 'BUY_TWO_GET_ONE_FREE',
        barcodes: [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ]
    }];
}

module.exports = { loadAllItems, loadPromotions, countBuyItems };