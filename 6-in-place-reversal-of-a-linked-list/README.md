# 25

```js
var reverseK = function (prev, k) {
    let current = prev.next;

    for (let i = 1; i < k; i++) {
        const next = current.next;

        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return current;
}
```