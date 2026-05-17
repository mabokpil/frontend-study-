const product = {
  name: "노트북",
  price: 1500000,
  spec: { ram: "16GB", storage: "512GB" },
};

// 1. 얕은복사로 price만 2000000으로 바꿔봐
//    원본 price는 그대로여야 해

// 2. 깊은복사로 spec.ram을 '32GB'로 바꿔봐
//    원본 spec.ram은 그대로여야 해

const spread = { ...product };
Spread.price = 2000000;

const stringify = JSON.parse(JSON.stringify(product));
stringify.spec.ram = "32GB";
