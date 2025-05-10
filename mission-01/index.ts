async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// Example usage
squareAsync(5).then(console.log); // 16 (after 1
squareAsync(-9).catch(console.error); // Error: Negative number not allowed
