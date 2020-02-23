/* A[N] A[i] = j */
const findAnagrams = (s, p) => {
  let targetMap = {};
  const count = p.length;
  let res = [];
  p.forEach(item => {
    if (targetMap[item]) {
      targetMap[item]++;
    } else {
      targetMap[item] = 0;
    }
  });

  for (let i = 0; i < s.length; i++) {
    let currentCount = count;
    let currentMap = Object.assign({}, targetMap);
    for (let j = i; j < s.length; j++) {
      const current = s[j];
      if (targetMap[current]) {
        targetMap[current]--;
        currentCount--;
      } else if (currentCount === 0) {
        res.push(j);
      }
      currentCount = count;

      break;
    }
  }
  return res;
};
