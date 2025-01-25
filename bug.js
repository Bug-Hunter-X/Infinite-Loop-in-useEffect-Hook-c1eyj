```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting the state inside the useEffect
    // dependency array is empty. This will cause an infinite loop.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```