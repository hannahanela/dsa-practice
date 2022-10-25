/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    for (let neighbor of vertex.adjacent) {
      neighbor.adjacent.delete(vertex);
    }

    this.nodes.delete(vertex);
    //TODO: add testing to check that vertex is removed from adjacent lists
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let visited = new Set([start]);
    let searchResult = [];

    while (toVisitStack.length > 0) {
      let current = toVisitStack.pop();
      searchResult.push(current.value);

      for (let neighbor of current.adjacent) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          toVisitStack.push(neighbor);
        }
      }
    }

    return searchResult;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let visited = new Set([start]);
    let searchResult = [];

    while (toVisitQueue.length > 0) {
      let current = toVisitQueue.shift();
      searchResult.push(current.value);

      for (let neighbor of current.adjacent) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          toVisitQueue.push(neighbor);
        }
      }
    }

    return searchResult;
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
