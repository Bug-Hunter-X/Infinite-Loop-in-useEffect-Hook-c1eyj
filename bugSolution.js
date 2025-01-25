```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly setting the state inside the useEffect 
    // with count in dependency array.
    // This will prevent the infinite loop.
    // Add the effect's dependencies as the second argument
    // of the useEffect function call.
    console.log('use effect running');
  }, [count]);

  return <div>Count: {count}</div>;
}
```