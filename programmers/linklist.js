function solution(arr) {
  // 1.  parents have at most 2 chidren parents = {parent: [child1, child2]}
  // 부모는 최대 두명의 자식을 가진다
  // 2. each child has at most parent children = {child:parent}
  // 자식은 최대 하나의 부모만 가질 수 있다
  // 3. iterate acrooss arr and check all coditions true
  // arr를 반복하고 모든 coditions가 true인지 확인하십시오.

  // time complexity O(n * m) => O(n^2)

  const parents = {}; // time: O(1)
  const children = {}; // time: O(1)

  for (let i = 0; i < arr.length; i++) {
    // time: O(n)*
    // "(1, 2)" => ["1", "2"]
    let pair = arr[i].replace(/[()]/g, '').split(','); // time: O(m)
    let child = pair[0]; // time: O(1)
    let parent = pair[1]; // time: O(1)

    if (parents[parent]) {
      // time: O(1)
      parents[parent].push(child); // time: O(1)
    } else {
      parents[parent] = [child]; // time: O(1)
    }

    if (parents[parent].length > 2) {
      return false;
    }

    if (children[child]) {
      return false;
    } else {
      children[child] = parent;
    }
  }
  console.log(parents)
  console.log(children)
  return true;
}

console.log(solution(["(1, 2)", "(2, 4)", "(5, 7)", "(7, 2)", "(9, 5)"]))
console.log(solution(["(1, 2)", "(3, 2)", "(2, 12)", "(5, 2)"]))