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
  constructor(nodes, edges) {
    this.size = nodes.length;
    this.nodes = nodes;
    this.nodeIndex = new Map();

    nodes.forEach((node, index) => {
      this.nodeIndex.set(node, index);
    });

    this.graph = Array.from({ length: this.size }, () => Array(this.size).fill(0));

    edges.forEach((edge) => {
      this.addEdge(edge)
    });

  }

  addEdge([origin, destination]) {
    const originIndex = this.nodeIndex.get(origin);
    const destinationIndex = this.nodeIndex.get(destination);

    this.graph[originIndex][destinationIndex] = 1;
    this.graph[destinationIndex][originIndex] = 1;
  }

  log() {
    console.log('Graph:', this.graph);
  }

  dfs(startNode) {
    const startIndex = this.nodeIndex.get(startNode);
    const visited = Array(this.size).fill(false);
    const nodes = [];

    const dfsRecursive = (nodeIndex) => {
      if (visited[nodeIndex]) {
        return;
      }

      const node = this.nodes[nodeIndex];
      nodes.push(node);
      visited[nodeIndex] = true;

      for (let i = 0; i < this.size; i++) {
        if (this.graph[nodeIndex][i] === 1 && !visited[i]) {
          dfsRecursive(i);
        }
      }
    }

    dfsRecursive(startIndex);
    return nodes;
  }

  bfs(startNode) {
    const startIndex = this.nodeIndex.get(startNode);
    const visited = Array(this.size).fill(false);
    const nodes = [], queue = [startIndex];

    visited[startIndex] = true;

    while (queue.length) {
      const nodeIndex = queue.shift();
      const node = this.nodes[nodeIndex];

      nodes.push(node);

      for (let i = 0; i < this.size; i++) {
        if (!this.graph[nodeIndex][i] || visited[i]) {
          continue;
        }

        queue.push(i);
        visited[i] = true;
      }
    }

    return nodes;
  }
}

const graph = new Graph(airports, routes);
console.log(graph.dfs('ATL'));
console.log(graph.bfs('ATL'));