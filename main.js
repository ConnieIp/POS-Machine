'use strict';

function countBuyItems(idList, productList) {
    let idListWithoutWeight = idList.filter(id => id.indexOf('-') < 0);
    let idListWithWeight = idList.filter(id => id.indexOf('-') >= 0);

    let buyItemListWithoutWeight = productList.filter(product => idListWithoutWeight.includes(product.barcode));
    buyItemListWithoutWeight.forEach(item => {
        item['quantity'] = (idList.filter(id => id === item.barcode)).length;
    });

    let buyItemListWithWeight = productList.filter(product => idListWithWeight.map(x => x.split('-')[0]).includes(product.barcode));
    buyItemListWithWeight.forEach(item => {
        let weight = idListWithWeight.filter(id => id.split('-')[0] === item.barcode).map(x => parseFloat(x.split('-')[1])).reduce((a, b) => a + b, 0);
        item['quantity'] = weight;
    });

    let buyItemList = buyItemListWithoutWeight.concat(buyItemListWithWeight);
    return buyItemList;
}

function calculateSubTotalPrice(buyItemList) {
    buyItemList.forEach(item => {
        item['subTotal'] = (item.quantity * item.price);
    });
    return buyItemList;
}

function calculatePromotionSubTotalPrice(buyItemList, promotionList) {
    let buyTwoGetOneFreeList = promotionList.find(promotion => promotion.type === 'BUY_TWO_GET_ONE_FREE').barcodes;
    buyItemList.filter(item => buyTwoGetOneFreeList.includes(item.barcode)).filter(item => item.quantity >= 3)
        .forEach(item => {
            item['promotionSubTotal'] = ((item.quantity - (item.quantity % 3)) / 3 * 2 * item.price) + ((item.quantity % 3) * item.price);
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

module.exports = { loadAllItems, loadPromotions, countBuyItems, calculateSubTotalPrice, calculatePromotionSubTotalPrice };