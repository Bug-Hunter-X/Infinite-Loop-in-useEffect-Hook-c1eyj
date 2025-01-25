# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug involving an infinite loop caused by incorrectly updating state within a useEffect hook with an empty dependency array.  The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected version.

## Bug Description
The `MyComponent` function uses the `useEffect` hook to increment a state variable (`count`). However, because the dependency array is empty, the effect runs repeatedly, causing `setCount` to be called continuously, resulting in an infinite loop and rendering errors.

## Solution
The solution involves correctly specifying the dependencies for the `useEffect` hook.  In this case, the `count` state variable should be added to the dependency array. This ensures the effect only runs when the `count` variable changes.
