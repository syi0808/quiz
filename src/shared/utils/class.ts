export class ExternalStore<T extends unknown> {
  state: T;
  protected listeners: (() => void)[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  emitChange() {
    for (let listener of this.listeners) {
      listener();
    }
  }

  subscribe(listener: () => void) {
    this.listeners = [...this.listeners, listener];

    return () => (this.listeners = this.listeners.filter((l) => l !== listener));
  }

  getSnapshot() {
    return this.state;
  }
}
