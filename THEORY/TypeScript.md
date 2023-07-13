## TypeScript

### Basic types
```typescript

let a: number = 5;
let b: string = '5';
let c :boolean = true;

const d: string[] = ['asdf', 'qwerty'];
d.map((x: string) => x.toLocaleLowerCase())

let e: any = 3;
e = '3';

function test(f: string): string {
    return f;
}

function countCoord(coord: {lat: number, long?: number}) {}

```

### Interfaces & Types
```typescript

type Point = {
  x: number,
  y: number
}
type DPoint = Point & {
  z: number
}

```
```typescript

interface IPoint {
  x: number,
  y: number
}
interface IDPoint extends IPoint {
  z: number
}

interface ITest {
  a: number;
}
interface ITest {
  b: number;
}

const c = (point: IPoint) => {
  const d = IDPoint = point as IDPoint;
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

```

### Literal Types
```typescript

type actionType = 'up' | 'down';
function performAction(action: actionType): -1 | 1 {
  switch (action) {
    case 'down':
      return -1;
    case 'up':
          return 1; 
  }
}

```

### Classes
```typescript

class Point {
  // readonly x: number;
  // private x: number;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  protected abc() {}
}

const point = new Point(0, 0);

class TopPoint extends Point {
  z: number;
  constructor(x: number, y: number, z:number) {
    super(x, y);
    this.z = z;
  }
}

const top_point = new TopPoint(1, 1, 1);

```
```typescript

interface C {
  test: () => number;
}

class D implements C {
  test() {
    return 3;
  }
}

```

### Enums
numeric, string, heterogeneous
```typescript

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

enum Decision {
  Yes = 1,
  No = calcEnum()
}
function calcEnum() {
  return 2;
}

const enum ConstEnum {
  A,
  B
}
let c = ConstEnum.A

```

### Generics
```typescript

function logTime<T>(num: T): T {
  console.log(new Date());
  return num;
}
logTime<number>(5);
logTime<string>('5');

//

function logTime2<T>(num: T): T {
  if(typeof num == 'string') {
    num.toLocalUpperCase();
  }
  return num;
}

// 

interface MyInterface {
  transform: <T, F>(a: T) => F
}

//

class MyGenClass<T> {
  value: T
}

//

interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T>(num: T): T {
  console.log(num.stamp)
  return num
}

```

### Type Manipulation
```typescript

type Point = { x: number, y: number }
type P = keyof Point;

//

function myF() {
  return { a: 1 }
}

type MyFType = () => { a: number }

type K = ReyurnType<MyFType>

//

const MyArray = [
  { name: 'Din', age: 30 }
];

type Person = typeof MyArray[number]
type Age = typeof MyArray[number]['age']

//

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string;
}

interface Cat {
  test: number;
}

type EmailMessageContents = MessageOf<Email>
type CatMessageContents = MessageOf<Cat>

//

interface Test {
  [key: string]: number;
}

//

type OptionFlags<Type> = {
  [Property in keyof Type]: boolean
}

```