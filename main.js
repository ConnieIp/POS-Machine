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
        let existingBuyItem = buyItemListWithoutWeight.find(itemWithoutWeight => itemWithoutWeight.barcode === item.barcode)
        if (existingBuyItem != null) {
            item['quantity'] = existingBuyItem.quantity + weight;
            buyItemListWithoutWeight.pop(x => x.barcode === item.barcode);
        } else {
            item['quantity'] = weight;
        }
    });

    let buyItemList = buyItemListWithoutWeight.concat(buyItemListWithWeight);
    return buyItemList;
}

function calculateSubTotalPrice(item) {
    item['subTotal'] = (item.quantity * item.price);
    return item;
}

function calculatePromotionSubTotalPrice(item, promotionList) {
    let buyTwoGetOneFreeList = promotionList.find(promotion => promotion.type === 'BUY_TWO_GET_ONE_FREE').barcodes;
    if (buyTwoGetOneFreeList.includes(item.barcode) && item.quantity >= 3) {
        item['promotionSubTotal'] = ((item.quantity - (item.quantity % 3)) / 3 * 2 * item.price) + ((item.quantity % 3) * item.price);
    }
    return item;
}

function calculateTotal(buyItemList) {
    let total = 0;
    buyItemList.forEach(item => {
        if (item.promotionSubTotal != null) {
            total += item.promotionSubTotal;
        } else {
            total += item.subTotal;
        }
    });
    return total;
}

function calculateSaving(buyItemList) {
    let saving = 0;
    buyItemList.forEach(item => {
        if (item.promotionSubTotal != null) {
            saving += (item.subTotal - item.promotionSubTotal);
        }
    });
    return saving;
}

function getDetailOfBuyItem(idList, productList, promotionList) {
    let buyItems = countBuyItems(idList, productList);
    buyItems.forEach(item => {
        calculateSubTotalPrice(item);
        calculatePromotionSubTotalPrice(item, promotionList);
    });
    return buyItems;
}

function printTable(buyItemList) {
    let receipt = '';
    receipt += `***<store earning no money>Receipt ***\n`;
    buyItemList.forEach(item => {
        let subTotal;
        if (item.promotionSubTotal != null) {
            subTotal = item.promotionSubTotal;
        } else {
            subTotal = item.subTotal;
        }
        receipt += 'Name: ' + item.name + ', Quantity: ' + item.quantity + ' ' + item.unit + ', Unit price: ' + item.price.toFixed(2) + ' (yuan), Subtotal: ' + subTotal.toFixed(2) + ' (yuan)\n';
    })
    receipt += '----------------------\n';
    receipt += 'Total: ' + calculateTotal(buyItemList).toFixed(2) + ' (yuan)\n';
    receipt += 'Saving: ' + calculateSaving(buyItemList).toFixed(2) + ' (yuan)\n';
    receipt += '**********************';
    return receipt;
}

function printReceipt(idList) {
    let buyItemList = getDetailOfBuyItem(idList, loadAllItems(), loadPromotions());
    let receipt = printTable(buyItemList);
    console.log(receipt)
    return receipt;
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
            name: 'Sprite',
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
            name: 'Litchi',
            unit: 'kg',
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
            unit: 'bags',
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

module.exports = { loadAllItems, loadPromotions, countBuyItems, calculateSubTotalPrice, calculatePromotionSubTotalPrice, calculateTotal, calculateSaving, getDetailOfBuyItem, printTable, printReceipt };