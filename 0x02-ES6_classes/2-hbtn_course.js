export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get getName() {
    return this._name;
  }

  set setName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get getLength() {
    return this._length;
  }

  set setLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get getStudents() {
    return this._students;
  }

  set setStudents(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
