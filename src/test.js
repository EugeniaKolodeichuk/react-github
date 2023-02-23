function* generatorFunction() {
  for (let i = 0; i < 5; i++) {
    yield 1;
  }
}

const iter = generatorFunction();

console.log(iter.next());
