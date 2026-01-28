# JavaScript Data Types & Type Conversion

## 1. JavaScript Data Types

JavaScript supports **two main categories** of data types: **Primitive** and **Non-Primitive (Reference)**.

---

## 1.1 Primitive Data Types

Primitive data types store **single, immutable values**.

| Data Type     | Description                        | Example             |
| ------------- | ---------------------------------- | ------------------- |
| **String**    | Textual data                       | `"Hello"`, `'JS'`   |
| **Number**    | Integers & decimals                | `10`, `3.14`, `NaN` |
| **Boolean**   | Logical values                     | `true`, `false`     |
| **Undefined** | Variable declared but not assigned | `let x;`            |
| **Null**      | Intentional empty value            | `let y = null;`     |
| **BigInt**    | Large integers                     | `123456789n`        |
| **Symbol**    | Unique identifiers                 | `Symbol('id')`      |

**Memory Trick:**
👉 **S N B U N B S**
(String, Number, Boolean, Undefined, Null, BigInt, Symbol)

---

## 1.2 Non-Primitive (Reference) Types

Non-primitive types store **multiple values or complex structures**.

| Type         | Example              |
| ------------ | -------------------- |
| **Object**   | `{ name: 'Ali' }`    |
| **Array**    | `[1, 2, 3]`          |
| **Function** | `function test() {}` |

> All non-primitive types are treated as **objects** in JavaScript.

---

## 2. Type Conversion in JavaScript

JavaScript performs type conversion in **two ways**:

1. **Implicit Conversion** – JavaScript automatically converts types
2. **Explicit Conversion** – Developer manually converts types

---

## 2.1 String Conversion

### Explicit Conversion

```js
String(123);      // "123"
String(true);     // "true"
```

### Implicit Conversion

```js
"5" + 2;         // "52"
```

**Rule:**
👉 If `+` operator involves a **string**, result will be a **string**.

---

## 2.2 Number Conversion

### Explicit Conversion

```js
Number("123");       // 123
Number("abc");       // NaN
Number(true);        // 1
Number(false);       // 0
Number(null);        // 0
Number(undefined);   // NaN
```

### Implicit Conversion

```js
"10" - 2;   // 8
"10" * 2;   // 20
```

**Rule:**
👉 Operators `-`, `*`, `/` always try to convert values into **numbers**.

---

## 2.3 Boolean Conversion

```js
Boolean(1);        // true
Boolean(0);        // false
Boolean("");      // false
Boolean("JS");    // true
Boolean(null);     // false
```

---

## 3. Falsy Values (Very Important)

Only **six values** are treated as `false` in JavaScript:

```text
false
0
""
null
undefined
NaN
```

**Memory Trick:**
👉 *False Old Man Under NaN*

Any value **not** in this list is considered **truthy**.

---

## 4. Valid vs Risky Conversions

### Always Safe

| Conversion       | Result       |
| ---------------- | ------------ |
| Any → String     | Always valid |
| Boolean → Number | Valid        |
| Number → Boolean | Valid        |

### Risky / Invalid

| Conversion         | Issue            |
| ------------------ | ---------------- |
| String → Number    | May return `NaN` |
| undefined → Number | Always `NaN`     |

---

## 5. Common Tricky Examples

```js
true + true;      // 2
"5" - "2";        // 3
"5" + "2";        // "52"
null == 0;       // false
null >= 0;       // true
```

> Reason: **Comparison operators** and **equality operators** follow different rules.

---

## 6. Best Practices

* Prefer **explicit conversions** using `Number()`, `String()`, `Boolean()`
* Avoid relying on implicit conversions in production code
* Use `===` instead of `==` for comparisons

---

### Summary

* JavaScript has **7 primitive** data types
* Type conversion can be **implicit or explicit**
* Learn **Falsy values** to master Boolean logic
* Explicit conversion leads to **cleaner and safer code**
