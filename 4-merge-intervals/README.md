# Merge interval
- Sort by starting time, check for overlap and merge
- compare `prev[1] >= current[0]`


# To insert an interval
- Compare with start time
- `if (currentInterval[0] >= newInterval[0])`

# How to find intersection
start = max(startA, startB)
end = min(endA, endB)

valid intersection `if (start <= end)`
