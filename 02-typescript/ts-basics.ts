// 이걸 TypeScript로 바꿔봐
// interface Employee 만들고
// 함수 파라미터, 반환값 타입 추가해봐

/* const employees = [
  { name: "김철수", dept: "개발", salary: 4500000 },
  { name: "이영희", dept: "디자인", salary: 3800000 },
  { name: "박민수", dept: "개발", salary: 5200000 },
];

function getDevAvg(employees) {
  const dev = employees.filter((e) => e.dept === "개발");
  return dev.reduce((acc, cur) => acc + cur.salary, 0) / dev.length;
}
 */

interface Employee {
  name: string;
  dept: string;
  salary: number;
}

const employee: Employee[] = [
  { name: "김철수", dept: "개발", salary: 4500000 },
  { name: "이영희", dept: "디자인", salary: 3800000 },
  { name: "박민수", dept: "개발", salary: 5200000 },
];

function getDevAvg(employee: Employee[]): number {
  const dev = employee.filter((e) => e.dept === "개발");
  return dev.reduce((acc, cur) => acc + cur.salary, 0) / dev.length;
}
