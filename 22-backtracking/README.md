# Backtracking 

Backtracking is brute-force way of solving question where we need to consider every possible solution path
to prepare the final solution.

# Where to use?
where solution require generation of all possible answers.

e.g:
- generate all subsets
- word search

# Keep in mind

1) Board problem (word search):
- keep tack of visited nodes

2) In case maintaining a array path
- always create copy and push in result array

3) In case of finding unique combination
  - sort the array
  - use condition `if (i > index && arr[i] === arr[i - 1]) {}` inside loop. 

4) for unique permutaion
  - use condition `if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) {}`

5) Don't use loop inside recursion
  - when problem involve binary choice

6) Use loop inside recursion
  - when need to generate combinations like subsets and permutations