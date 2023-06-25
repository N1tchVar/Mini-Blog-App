---
title: "How to use useState?"
subtitle: "How to use useState Hook in react"
date: "2023-6-10"
---

# Using the State Hook

The [introduction page](https://reactjs.org/docs/hooks-intro.html) used this example to get familiar with Hooks:

```bash
import React, { useState } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    &lt;div>
      &lt;p>You clicked {count} times</p>
      &lt;button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;
```

We’ll start learning about Hooks by comparing this code to an equivalent class example.

# Equivalent Class Example

If you used classes in React before, this code should look familiar:

```bash
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      &lt;div>
        &lt;p>You clicked {this.state.count} times</p>
        &lt;button 
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

The state starts as `{ count: 0 }`  , and we increment state.count when the user clicks a button by calling `this.setState()`. We’ll use snippets from this class throughout the page.

> ***Note***
>
> You might be wondering why we’re using a counter here instead of a more realistic example. This is to help us focus on the API while we’re still making our first steps with Hooks.