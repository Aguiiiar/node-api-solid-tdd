import crypto from "crypto";

abstract class Entity<T> {
  protected _id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }

  get id(): string {
    return this._id;
  }
}

export default Entity;
