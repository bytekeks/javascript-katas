# First problem

It is about getting an array of unique values out of an array containing some objects.

See the following array of persons:

```javascript
const array = [
  {
    person: null,
  },
  {
    person: {
      id: 12345,
      name: 'John'
    },
  },
  {
    person: {
      id: 123456,
      name: 'Scott'
    },
  },
  {
    person: {
      id: 12345,
      name: 'John'
    },
  },
  {
    person: {
      id: 1234567,
      name: 'Buzz'
    },
  },
  {
    person: {
      id: 12345,
      name: 'John'
    },
  },
];
```

The expected result is:

```javascript
['John','Scott','Buzz']
```

Edit the following function (additional functions are allowed but not neccessary):

```javascript
function getUniqueNames(array) {
  // your code here
  return array;
}
```

The shorter the code, the cooler you are ;) Have phun!