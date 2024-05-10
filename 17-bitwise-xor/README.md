# Check if number is even or odd


```js
(num & 1) == 0 // even


0011 0110  (binary of 54)
0000 0001  (binary of 1)
& -----------
0000 0000  --> 0, so 54 is EVEN



0010 0101  (binary of 37)
0000 0001  (binary of 1)
& -----------
0000 0001  --> 1, so 37 is ODD
```


# Test if the n-th bit is set


```js
num & (1 << n)

1010 1111  (binary of 175)  
0010 0000  (1 << 5)
& -----------
0010 0000 --> 5th bit is set
```


# Set the n-th bit if it is not already set

```js
num | (1 << n)

0111 0001   (binary of 113)
0000 0100   (1 << 2)
| -----------
0111 0101  --> 2nd bit is set
```

# Unset n-th bit if it is not already unset


```js
unset_nth_bit_result = num & ~(1 << n)

0101 0011   (binary of 83)
1110 1111   ~(1 << 4)
& -----------
0100 0011  --> 4th bit is unset
```


# Toggle the n-th bit

```js
toggled_number = num ^ (1 << n)

0110 1111   (binary of 111)
0001 0000   (1 << 4)
^ -----------
0111 1111  --> 4th bit toggled
```





