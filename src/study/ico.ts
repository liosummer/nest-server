// // 原始方式
// class A {
//   name: string;
//   // constructor() {
//   //   this.name = 'liuiu';
//   // }
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class B {
//   aName: any;
//   constructor() {
//     // 强依赖A类 A类改变B类也需要改变 想创建B类就必须有A类
//     // this.aName = new A().name;
//     this.aName = new A('lic');
//   }
// }

// class C {
//   aName: any;
//   constructor() {
//     // this.aName = new A().name;
//     this.aName = new A('lic');
//   }
// }

class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class C {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Container {
  mo: any;
  constructor() {
    this.mo = {};
  }
  provide(key: string, mo: any) {
    this.mo[key] = mo;
  }

  get(key: string) {
    return this.mo[key];
  }
}
const mo = new Container();
mo.provide('a', new A('A'));
class B {
  a: any;
  c: any;
  constructor(mo: Container) {
    this.a = mo.get('a');
    this.c = mo.get('c');
  }
}
const b = new B(mo);
console.log(b);
