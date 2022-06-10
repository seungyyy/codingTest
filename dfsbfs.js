const { connect } = require("http2");

const depthFirst = (graph, node) => {
  const stack = [node];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighnbor of graph[current]) {
      stack.push(neighnbor);
    }
  }
};


const breadthFirstPrint = (graph, node) => { 
  const queue = [node];
  while (queue.length > 0) { 
    const current = queue.shift();
    console.log(current)
    for (let neighbor of graph[current]) { 
      queue.push(neighbor)
    }
  }
}

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

//breadthFirstPrint(graph, 'a'); // acebdf

 //depthFirst(graph, 'a');  // abdfce

const hasPath = (graph, src, dst) => {
  let answer = false;
  if (src === dst) {
    answer = true;
    console.log(answer)
    return answer;
  }
  
  for (let neighnbor of graph[src]) {
    if (hasPath(graph, neighnbor, dst) === true) {
      answer = true;
      return answer;
    }
  }
  
 // console.log(answer)
  return answer;
};

const hasPathBfs = (graph, src, dst) => {
  let answer = false;
  const queue = [src];

  while (queue.length > 0) { 
    const current = queue.shift();
    if (current === dst) { 
      answer = true;
      console.log(answer)
      return true;
    };
    for (let neighbor of graph[current]) { 
      queue.push(neighbor);
    }
  }
  console.log(answer);
  return false;
};

const graphHas = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

// hasPath(graphHas, 'f', 'k');
//hasPathBfs(graphHas, 'f', 'k');

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  undirectHasPath(graph, nodeA, nodeB, new Set())
  
}

const undirectHasPath = (graph, src, dst, visited) => { 
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) { 
    if (undirectHasPath(graph, neighbor, dst, visited) === true) { 
      return true;
    }
  }

  return false;
}

const buildGraph = (edges) => { 
  const graph = {};

  for (let edge of edges) { 
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph
}

const graphedges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

//undirectedPath(graphedges, 'j', 'm');

const connectedComponetns = (graph) => { 
  const visited = new Set();
  let count = 0;

  for (let node in graph) { 
    if (explore(graph, node, visited) === true) { 
      count += 1;
    }

  }
  console.log(count)
  return count

}

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

    visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

// connectedComponetns({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2],
// });


const largestCompenent = (graph) => { 
  const visited = new Set();
  let longest = 0;

  for (let node in graph) {
    const size = largestExplore(graph, node, visited) 
    if (size > longest) longest = size
  }
  console.log(longest);
  return longest;
}

const largestExplore = (graph, current, visited) => {
  if (visited.has(current)) return 0;

  visited.add(current)
  
  let size = 1;

  for (let neighbor of graph[current]) { 
    size += largestExplore(graph, neighbor, visited);
  }

  return size;
}; 


// largestCompenent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2'],
// });

const shortestEdges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = shortestBuildGraph(edges);
  const visited = new Set();
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) { 
      console.log(distance)
      return distance;
    }

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
      }
    }
  }
  
  //return -1;
}

const shortestBuildGraph = (edges) => { 
  const graph = {};

  for (let edge of edges) { 
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}


shortestPath(shortestEdges, 'w', 'z');