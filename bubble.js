const bubbleSort = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - 1 - i; j++) {
      const swap = input[j] > input[j + 1];
      if (swap) {
        const temp = input[j + 1];
        input[j + 1] = input[j];
        input[j] = temp;
      }
    }
  }
  return input;
};
