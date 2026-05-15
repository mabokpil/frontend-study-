var products = [
  { name: '노트북', price: 1500000, inStock: true },
  { name: '마우스', price: 30000, inStock: false },
  { name: '키보드', price: 80000, inStock: true },
];

const filtered = products.filter((product) => product.inStock === true).map((value,index) => {
    const {name , price} = value;
    return `${name} : ${price.toLocaleString()}`;
});

console.log(filtered);

// 1. 재고 있는 상품만 필터링해서
// 2. 각 상품 이름과 가격을 "노트북: 1,500,000원" 형식의 문자열 배열로 만들어봐
// (힌트: filter → map 순서로 체이닝해봐)

// function getInStockList(products) {
//   var result = [];
//   for (var i = 0; i < products.length; i++) {
//     if (products[i].inStock === true) {
//       var item = products[i].name + ': ' + products[i].price.toLocaleString() + '원';
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(getInStockList(products));
// 기대 출력: ['노트북: 1,500,000원', '키보드: 80,000원']

const students = [
  { name: '철수', score: 85, passed: true },
  { name: '영희', score: 42, passed: false },
  { name: '민수', score: 91, passed: true },
  { name: '지수', score: 38, passed: false },
];

const filtered = students.filter((student) => student.passed === true).map((value,index) => {
   const {name , score} = value;
   return `${name} - ${score}점`; 
})

// 합격한 학생만 골라서
// "철수 — 85점" 형식의 배열로 만들어봐


const cart = [
  { item: '아메리카노', price: 4500, qty: 2 },
  { item: '케이크', price: 6500, qty: 1 },
  { item: '샌드위치', price: 5500, qty: 3 },
];

const filtered = cart.map((e) => {
    const {item,price,qty} = e;
    const total = price * qty;
    return `${item}: ${total.toLocaleString()}원`
})
// 각 항목의 소계(price * qty)를 구해서
// "아메리카노: 9,000원" 형식의 배열로 만들어봐
//delivered만 골라서
// "주문 #1 | 노트북 | 1,500,000원" 형식으로 만들어봐
const orders = [
  { id: 1, product: '노트북', price: 1500000, status: 'delivered' },
  { id: 2, product: '마우스', price: 30000, status: 'pending' },
  { id: 3, product: '모니터', price: 450000, status: 'delivered' },
  { id: 4, product: '키보드', price: 80000, status: 'cancelled' },
];

const filtered = orders.filter((order) => order.status === 'delivered').map((e)=>{
    const {id,product,price} = e;
    return `주문 #${id} | ${product} | ${price.toLocaleString()}원`;
})

console.log(filtered);