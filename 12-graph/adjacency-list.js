const airports = [
  'ATL',
  'LAX',
  'JFK',
  'ORD',
  'DFW',
  'DEN',
  'SFO'
];


const routes = [
  ["ATL", "JFK"],
  ["ATL", "LAX"],
  ["JFK", "ORD"],
  ["ORD", "LAX"],
  ["LAX", "SFO"],
  ["DFW", "DEN"],
  ["ORD", "DFW"],
  ["DEN", "SFO"],
  ["ATL", "DFW"],
  ["DEN", "LAX"]
];

class Graph {
  graph = new Map();

  constructor(nodes, edges) {
    nodes.forEach(node => {
      this.addNode(node);
    })

    edges.forEach(([origin, destination]) => {
      this.addEdge(origin, destination);
    })
  }

  addNode(node) {
    this.graph.set(node, []);
  }

  addEdge(origin, destination) {
    this.graph.get(origin).push(destination);
    this.graph.get(destination).push(origin);
  }

  log() {
    console.log('Graph:', this.graph);
  }

  dfs(node, visited = new Set(), nodes = []) {
    if (!node) {
      return nodes;
    }

    nodes.push(node);
    visited.add(node);

    const edges = this.graph.get(node);

    for (let i = 0; i < edges.length; i++) {
      if (!visited.has(edges[i])) {
        this.dfs(edges[i], visited, nodes);
      }
    }

    return nodes;
  }

  bfs(start) {
    const visited = new Set(), nodes = [], queue = [];

    if (!start) {
      return nodes;
    }

    queue.push(start);
    visited.add(start);

    while(queue.length) {
      const node  = queue.shift();
      const edges = this.graph.get(node);

      nodes.push(node);
      
      for (let i = 0; i < edges.length; i++) {
        if (!visited.has(edges[i])) {
          queue.push(edges[i]);
          visited.add(edges[i]);
        }
      }
  
    }

    return nodes;
  }

}

const graph = new Graph(airports, routes);

console.log('dfs:', graph.dfs('ATL'));
console.log('bfs:', graph.bfs('ATL'));
