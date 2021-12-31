class Queue {
  constructor(arr) {
    this.queue = arr ? [...arr] : [];
    this.front = arr ? 0 : -1;
    this.rear = arr ? arr.length - 1 : -1;
  }

  shift() {
    if (this.front < 0 || this.front > this.rear) return;
    setTimeout(() => {
      this.queue.shift();
    });
    return this.queue[this.front++];
  }

  push(v) {
    this.queue.push(v);
    if (this.front < 0) this.front++;
    this.rear++;
  }

  size() {
    return this.rear - this.front + 1;
  }
}

const solution = (n, t) => {
  const queue = new Queue(Array.from({ length: n }, (v, i) => i + 1));

  while (queue.size() > 1) {
    for (let i = 0; i < t - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue.shift();
};

console.log(solution(8, 3)); //7
