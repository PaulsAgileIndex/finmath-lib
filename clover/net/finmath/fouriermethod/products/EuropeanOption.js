var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":73,"id":1099,"methods":[{"el":37,"sc":2,"sl":32},{"el":46,"sc":2,"sl":44},{"el":56,"sc":2,"sl":48},{"el":61,"sc":2,"sl":58},{"el":66,"sc":2,"sl":63},{"el":71,"sc":2,"sl":68}],"name":"EuropeanOption","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_259":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_26":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_268":{"methods":[{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_342":{"methods":[{"sl":32},{"sl":44},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_414":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_418":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_467":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_50":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_556":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_90":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_94":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [90, 556, 414, 50, 94, 342, 26, 259, 418, 467], [90, 556, 414, 50, 94, 342, 26, 259, 418, 467], [90, 556, 414, 50, 94, 342, 26, 259, 418, 467], [90, 556, 414, 50, 94, 342, 26, 259, 418, 467], [90, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [], [], [], [], [], [], [556, 414, 50, 94, 342, 418], [556, 414, 50, 94, 342, 418], [], [], [90, 268, 556, 414, 50, 94, 26, 259, 418, 467], [], [90, 268, 556, 414, 50, 94, 342, 259, 418, 467], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [90, 268, 556, 414, 50, 94, 342, 26, 259, 418, 467], [], [], []]