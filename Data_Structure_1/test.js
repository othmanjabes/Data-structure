var arr = [[12, 'AAA'], [123, 'BBB'], [12, 'CCC'],[28, 'DDD'], [18, 'CCC'],[12, 'DDD'],[18, 'CCC'],[28, 'DDD'],[28, 'DDD'],[58, 'BBB'],[68, 'BBB'],[78, 'BBB']];
arr1.sort(function (a, b) {
    return a[1].localeCompare(b[1]);
});

console.log(arr);