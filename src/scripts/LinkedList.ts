
// things to implement in the list
// 1. append
// 2. prepend
// 3. insert in the middle
// 4. delete
// 5. delete in the middle
// 6. search
// 7. get head/tail

type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
}

interface ILinkedList<T> {
  append: (value: T) => void;
  prepend: (value: T) => void;
  insert: (value: T, index: number) => void;
  delete: (index: number) => void;
  deleteInMiddle: (value: T) => void;
  search: (value: T) => number;
  getHead: () => T | null;
  getTail: () => T | null;
}

class LinkedList<T> implements ILinkedList<T> {
    private head: ListNode<T> | null;

    public append(value: T) {
      const newNode = {
        value,
      } as ListNode<T>;

      if (!this.head) {
        this.head = newNode;
        return;
      }

      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
      newNode.prev = current;
    }

    public prepend(value: T) {
      const newNode: ListNode<T> = {
        value,
      } as ListNode<T>;

      if (!this.head) {
        this.head = newNode;
        return;
      }

      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    public insert(value: T, index: number) {
      const newNode = {
        value,
      } as ListNode<T>;

      if (!this.head) {
        this.head = newNode;
        return;
      }

      let current = this.head;
      let i = 0;
      while (current.next && i < index) {
        current = current.next;
        i++;
      }

      newNode.next = current.next;
      newNode.prev = current;
      current.next = newNode;
    }

    public delete(index: number) {
      if (!this.head) {
        return;
      }

      let current = this.head;
      let i = 0;
      while (current.next && i < index) {
        current = current.next;
        i++;
      }

      if (!current.next || !current.prev) {
        return;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    public deleteInMiddle(value: T) {
      if (!this.head) {
        return;
      }

      let current = this.head;
      while (current.next && current.value !== value) {
        current = current.next;
      }

      if (!current.next || !current.prev) {
        return;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    public search(value: T) {
      if (!this.head) {
        return -1;
      }

      let current = this.head;
      let i = 0;
      while (current.next && current.value !== value) {
        current = current.next;
        i++;
      }

      if (!current.next) {
        return -1;
      }

      return i;
    }
    public getHead() {
      if (!this.head) {
        return null;
      }

      return this.head.value;
    }
    public getTail() {
      if (!this.head) {
        return null;
      }

      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      return current.value;
    }
}

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.prepend(0);
list.insert(9, 9);
list.delete(9);
list.deleteInMiddle(5);
console.log(list.search(5));
console.log(list.getHead());
console.log(list.getTail());
