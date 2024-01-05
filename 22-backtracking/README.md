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