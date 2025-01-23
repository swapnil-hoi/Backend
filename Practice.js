let a = 10;


console.log(a > 5 ? true : false);

function outer() {
    const name = 'Roadmap';
  
    function inner() {
      console.log(name);
    }
  
    return inner;
  }
  
  const closure = outer();
  closure(); // Roadmap