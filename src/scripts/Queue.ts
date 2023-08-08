type Node<T> = {
  value: T; 
  next: Node<T> | null;
}

export default class Queue<T> {
  public length: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  
  peek(): T | null {
    if (this.head) {
      return this.head.value;
    }

    return null;
  }

  dequeue(): T | null {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  enqueue(value: T): void {
    const newNode = {
      value,
      next: null,
    } as Node<T>;

    if (!this.tail) {
      this.tail = this.head = newNode; 
      return
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

}
