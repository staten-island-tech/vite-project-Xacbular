# 💻 Lesson: Algorithms in Action — Binary Conversions

### 🎯 **Learning Goals (SWBAT)**

Students will be able to:

- Explain what an **algorithm** is and how it solves problems step-by-step.
- Identify the three building blocks of algorithms: **sequencing, selection, and iteration**.
- Understand how algorithms appear in code that converts between **binary** and **decimal** numbers.
- Describe how binary conversion algorithms demonstrate **AP CSP Big Idea 3: Algorithms and Programming**.

---

## 🧠 **1. What Is an Algorithm?**

An **algorithm** is just a **set of instructions** that a computer (or person) can follow to solve a problem.

🧩 **Example (real life)**:
Making a peanut butter sandwich is an algorithm!

1. Get two slices of bread.
2. Spread peanut butter on one slice.
3. Spread jelly on the other slice.
4. Put them together.

That’s a **sequence of steps** the same way a computer follows lines of code.

---

## ⚙️ **2. The Three Key Parts of an Algorithm**

| Part           | What It Means              | Real-Life Example                     | Programming Example     |
| -------------- | -------------------------- | ------------------------------------- | ----------------------- |
| **Sequencing** | Steps in the correct order | Following a recipe                    | Code runs top-to-bottom |
| **Selection**  | Making a decision          | “If it’s raining, bring an umbrella.” | `if` statements         |
| **Iteration**  | Repeating actions          | “Stir until smooth.”                  | `for` or `while` loops  |

Every algorithm in computer science uses **these three ideas** — sometimes all at once!

---

## 🧮 **3. Binary Conversion — The Problem**

Computers use **binary (1s and 0s)**, but humans use **decimal (0–9)**.
To communicate with computers, we often need to **convert** between these two systems.

We’ll explore two algorithms:

1. **Binary → Decimal**
2. **Decimal → Binary**

---

## 💡 **4. Algorithm #1: Binary to Decimal**

```js
function binaryToDec(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - i - 1] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}
```

Let’s explain this like you’re in middle school 👇

### 🧩 Step-by-step (Sequencing)

1. Start with a `decimal` value of 0.
2. Go through each **bit** (each 1 or 0) in the binary string.
3. If the bit is a “1,” add the matching power of 2 to your total.
4. When you’ve checked every bit, return the final number.

### 💬 Example:

Input: `"1011"`

| Bit           | Power of 2 | Add or Skip | Total  |
| ------------- | ---------- | ----------- | ------ |
| 1 (rightmost) | 2⁰ = 1     | Add         | 1      |
| 1             | 2¹ = 2     | Add         | 3      |
| 0             | 2² = 4     | Skip        | 3      |
| 1 (leftmost)  | 2³ = 8     | Add         | **11** |

Output: `11`

---

### 🧩 Sequencing, Selection, and Iteration in Action

| Concept        | Where It Happens                                                             | Explanation                                                       |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Sequencing** | The steps happen in order: define `decimal`, loop through bits, return total | Code executes from top to bottom                                  |
| **Selection**  | `if (binary[binary.length - i - 1] === "1")`                                 | The algorithm _chooses_ whether to add based on if the bit is “1” |
| **Iteration**  | `for (let i = 0; i < binary.length; i++)`                                    | The algorithm _repeats_ the same steps for every bit              |

✅ All three parts of an algorithm are here!

---

## 🔁 **5. Algorithm #2: Decimal to Binary**

```js
function decToBinary(dec) {
  let binary = "";
  if (dec === 0) {
    return 0;
  }
  while (dec > 0) {
    let remainder = dec % 2;
    binary = remainder + binary;
    dec = Math.floor(dec / 2);
  }
  return binary;
}

console.log(decToBinary(9));
```

### 🧩 Step-by-step (Sequencing)

1. If the number is 0, return 0.
2. While the number is greater than 0:

   - Divide it by 2.
   - Record the remainder (0 or 1).
   - Reduce the number using `Math.floor()`.

3. Reverse the remainders (since the first remainder is the last binary digit).
4. Return the final binary string.

### 💬 Example:

Input: `9`

| Step | Number ÷ 2 | Remainder | Binary So Far |
| ---- | ---------- | --------- | ------------- |
| 1    | 9 ÷ 2 = 4  | 1         | 1             |
| 2    | 4 ÷ 2 = 2  | 0         | 01            |
| 3    | 2 ÷ 2 = 1  | 0         | 001           |
| 4    | 1 ÷ 2 = 0  | 1         | **1001**      |

Output: `1001`

---

### 🧩 Sequencing, Selection, and Iteration in Action

| Concept        | Where It Happens               | Explanation                                                        |
| -------------- | ------------------------------ | ------------------------------------------------------------------ |
| **Sequencing** | Steps follow one after another | Divide → store remainder → update number                           |
| **Selection**  | `if (dec === 0)`               | Checks for a special case before looping                           |
| **Iteration**  | `while (dec > 0)`              | Repeats dividing and storing remainders until the number reaches 0 |

---

## 🧠 **6. What Makes These “Algorithms”**

Both `binaryToDec()` and `decToBinary()`:

- Have **clear inputs** (a binary or decimal number).
- Have **clear outputs** (a converted number).
- Use **sequencing**, **selection**, and **iteration** to process data.
- Are **finite** — they eventually stop (when the loop ends).
- **Solve a real problem**: converting between number systems computers and humans use.

That’s exactly what the **AP CSP** definition of an algorithm is:

> “A finite set of instructions that accomplishes a specific task.”

---

## 🧩 **7. AP CSP Connections**

| AP CSP Big Idea                            | Connection                                                                         |
| ------------------------------------------ | ---------------------------------------------------------------------------------- |
| **Big Idea 2: Data**                       | Binary and decimal conversions show how data can be represented in different ways. |
| **Big Idea 3: Algorithms and Programming** | Sequencing, selection, and iteration are the building blocks of all algorithms.    |
| **Big Idea 5: Impact of Computing**        | Binary representation affects how efficiently we store and transmit information.   |

---
