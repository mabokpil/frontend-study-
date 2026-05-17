// reduce

const cart = [
  { item: "아메리카노", price: 4500, qty: 2 },
  { item: "케이크", price: 6500, qty: 1 },
  { item: "샌드위치", price: 5500, qty: 3 },
];

// 장바구니 전체 합계 금액을 구해봐
// 기대 결과: 40000
// (4500*2 + 6500*1 + 5500*3)

const totalCart = cart.reduce((acc, cur) => {
  return acc + cur.price * cur.qty;
}, 0);

console.log(totalCart);

// Object

const scores = {
  수학: 85,
  영어: 92,
  과학: 78,
  국어: 88,
};

// 1. 점수가 80점 이상인 과목만 출력해봐
// 기대 결과: ['수학', '영어', '국어']

// 2. 전체 평균 점수를 구해봐
// 기대 결과: 85.75
// (힌트: Object.values + reduce)

const scoreResult = Object.keys(scores).filter((key) => {
  return scores[key] >= 80;
});

const scoreAvg =
  Object.values(scores).reduce((acc, cur) => {
    return acc + cur;
  }, 0) / Object.keys(scores).length;

// 문제 1

const employees = [
  { name: "김철수", dept: "개발", salary: 4500000 },
  { name: "이영희", dept: "디자인", salary: 3800000 },
  { name: "박민수", dept: "개발", salary: 5200000 },
  { name: "최지수", dept: "마케팅", salary: 3500000 },
  { name: "정현우", dept: "개발", salary: 4800000 },
];

// 개발팀 직원만 골라서
// "김철수 — 4,500,000원" 형식 배열로 만들어봐\

employees
  .filter((employee) => employee.dept === "개발")
  .map((emp) => {
    const { name, salary } = emp;
    return `${name} - ${salary.toLocaleString()}원`;
  });

// 위 employees에서
// 개발팀 전체 평균 연봉을 구해봐
// 기대 결과: 4833333.33...

const devEmployees = employees.filter((e) => e.dept === "개발");
const devTotal = devEmployees.reduce((acc, cur) => acc + cur.salary, 0);
const devAvg = devTotal / devEmployees.length;

// 부서별 인원수 구하기
// 기대 결과: { 개발: 3, 디자인: 1, 마케팅: 1 }
// 힌트: reduce 초기값이 {} 야

const devCount = employees.reduce((acc, cur) => {
  acc[cur.dept] = (acc[cur.dept] || 0) + 1;
  return acc;
}, {});

const movies = [
  { title: "인터스텔라", genre: "SF", rating: 9.2, year: 2014 },
  { title: "기생충", genre: "드라마", rating: 8.6, year: 2019 },
  { title: "어벤져스", genre: "SF", rating: 8.4, year: 2018 },
  { title: "올드보이", genre: "드라마", rating: 8.9, year: 2003 },
  { title: "듄", genre: "SF", rating: 8.0, year: 2021 },
];

/* 문제 1 — filter + map
SF 영화만 골라서
"인터스텔라 (2014)" 형식 배열로 만들어봐
 */

movies
  .filter((movie) => {
    return movie.genre === "SF";
  })
  .map((e) => {
    return `${e.title}  (${e.year})`;
  });

/* 문제 2 — filter + reduce
평점 8.5 이상인 영화들의 평균 평점을 구해봐 */

const overRating = movies.filter((m) => {
  return m.rating >= 8.5;
});
const movieTotal = overRating.reduce((acc, cur) => {
  return acc + cur.rating;
}, 0);
const movieAvg = movieTotal / overRating.length;

/* 문제 3 — reduce
장르별 영화 수를 구해봐
기대 결과: { SF: 3, 드라마: 2 } */

const movieCounts = movies.reduce((acc, cur) => {
  acc[cur.genre] = (acc[cur.genre] || 0) + 1;
  return acc;
}, {});

/* 문제 4 ⭐ — Object.keys + filter
평점이 8.5 이상인 영화 제목만 배열로 만들어봐
(Object 메서드 안 써도 되는데 써서 풀어봐) */

const moviesTitle = movies
  .filter((movie) => {
    return movie.rating >= 8.5;
  })
  .map((e) => {
    return e.title;
  });
