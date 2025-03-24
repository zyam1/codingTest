const graph = {
  1: [2, 3],
  2: [4],
  3: [5],
  4: [],
  5: [],
};

//dfs탐색 결과 출력 함수

function dfs(g, v, visited) {
  visited[v] = true;
  console.log(v);
  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(g, i, visited);
    }
  }
}

const visited = Array(5).fill(false);
dfs(graph, 1, visited);
