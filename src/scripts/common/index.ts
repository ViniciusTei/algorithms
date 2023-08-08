export class Node<T> {
  private value: T;
  private next: Node<T> | null;
  private prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  public getValue(): T {
    return this.value;
  }

  public setNext(node: Node<T>): void {
    this.next = node;
  }

  public getNext(): Node<T> | null {
    return this.next;
  }

  public setPrev(node: Node<T>): void {
    this.prev = node;
  }

  public getPrev(): Node<T> | null {
    return this.prev;
  }
}
