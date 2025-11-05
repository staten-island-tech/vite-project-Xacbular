
# 🧠 Lesson Plan: Understanding Binary, Bits, Bytes, and Hexadecimal

### 🎯 **Learning Goals (SWBAT)**

Students will be able to:

* Explain why computers use binary to represent data.
* Convert between binary and decimal.
* Understand how binary represents electrical signals (on/off).
* Describe bits and bytes as basic units of digital information.
* Use powers of two to understand how binary numbers are built.
* Identify how hexadecimal simplifies binary representation.
* Relate these concepts to **AP Computer Science Principles Big Idea 2: Data** and **Big Idea 4: Systems and Networks**.

---

## 🧩 **1. Introduction — Why Computers Speak “Binary”**

Imagine you have a light switch. It can only be in **two states**:

* 💡 **On**
* 🌑 **Off**

Computers are made of billions of microscopic switches called **transistors** that behave the same way!
Each switch represents **one bit** (short for *binary digit*):

* `1` means **on** (electrical current is flowing)
* `0` means **off** (no electrical current)

This is the foundation of how a computer stores and processes everything — numbers, letters, images, and even videos.

---

## ⚙️ **2. Binary Numbers**

Binary is a **base-2** system.
That means instead of using ten digits (0–9) like in our **decimal system**, binary only uses **two** digits: `0` and `1`.

### Example:

Let’s count in binary:

| Decimal | Binary |
| ------- | ------ |
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |
| 8       | 1000   |

Each time you move to the left, the value doubles — just like place values in decimal go up by tens.

| Place Value (Binary)  | 8                             | 4 | 2 | 1 |
| --------------------- | ----------------------------- | - | - | - |
| Example Binary Number | 1                             | 0 | 1 | 1 |
| Multiply & Add        | (1×8) + (0×4) + (1×2) + (1×1) |   |   |   |
| Decimal Value         | **11**                        |   |   |   |

---

## ⚡ **3. How Binary Represents Electrical Signals**

Inside a CPU:

* A **high voltage** (electricity is flowing) → `1`
* A **low voltage** (no electricity) → `0`

These signals travel through millions of circuits that can combine and compare them to perform math, make decisions, and control other parts of the computer.

### Analogy:

Think of binary like a set of light switches that control a robot:

```
Switch 1:  ON (1)
Switch 2:  OFF (0)
Switch 3:  ON (1)
```

The robot might read that as “move forward!” Different combinations of 1s and 0s tell the computer to do different things.

---

## 🧱 **4. Bits and Bytes**

A **bit** (binary digit) is the smallest piece of information a computer can store — a single **1** or **0**.

But one bit alone can only store **two possibilities**. So computers group bits together into **bytes** to represent larger numbers and symbols.

* **1 byte = 8 bits**
* 8 bits can represent **256 different combinations** (`2⁸ = 256`)

| Size            | Name        | Number of Bits |
| --------------- | ----------- | -------------- |
| 1 bit           | Bit         | 1              |
| 1 byte          | Byte        | 8              |
| 1 kilobyte (KB) | 1,024 bytes | 8,192 bits     |
| 1 megabyte (MB) | 1,024 KB    | 8,388,608 bits |

That’s why computer files are measured in bytes — the more bytes, the more bits, and the more information!

---

## 📊 **5. Binary and Powers of Two**

Every position in a binary number represents a **power of 2**, starting from the right (2⁰).
Each position doubles as you move left.

| Power of 2   | 2⁷  | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| ------------ | --- | -- | -- | -- | -- | -- | -- | -- |
| Value        | 128 | 64 | 32 | 16 | 8  | 4  | 2  | 1  |
| Example Bits | 1   | 1  | 1  | 1  | 1  | 1  | 1  | 1  |

In this example, every bit is turned **on (1)**, so we add up all the values:

`128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255`

That’s the largest number you can represent with **8 bits (1 byte)** — `11111111` in binary equals **255 in decimal**.

---

## 🧮 **6. Binary Conversion Chart**

| Decimal | Binary | Decimal | Binary |
| ------- | ------ | ------- | ------ |
| 0       | 0000   | 8       | 1000   |
| 1       | 0001   | 9       | 1001   |
| 2       | 0010   | 10      | 1010   |
| 3       | 0011   | 11      | 1011   |
| 4       | 0100   | 12      | 1100   |
| 5       | 0101   | 13      | 1101   |
| 6       | 0110   | 14      | 1110   |
| 7       | 0111   | 15      | 1111   |

---

## 🧾 **7. Introducing Hexadecimal**

Binary is great for computers, but it’s **hard for humans to read** — long strings of 1s and 0s are confusing.

To make it easier, we use **hexadecimal** (base-16):

* Uses digits `0–9` and letters `A–F`.
* Each **hex digit = 4 binary digits (bits)**.

| Binary | Hex | Decimal |
| ------ | --- | ------- |
| 0000   | 0   | 0       |
| 0001   | 1   | 1       |
| 0010   | 2   | 2       |
| 0011   | 3   | 3       |
| 0100   | 4   | 4       |
| 0101   | 5   | 5       |
| 0110   | 6   | 6       |
| 0111   | 7   | 7       |
| 1000   | 8   | 8       |
| 1001   | 9   | 9       |
| 1010   | A   | 10      |
| 1011   | B   | 11      |
| 1100   | C   | 12      |
| 1101   | D   | 13      |
| 1110   | E   | 14      |
| 1111   | F   | 15      |

### Example:

`10101100` in binary → break into two groups: `1010 1100`
`1010` = A, `1100` = C
So `10101100` = **AC** in hexadecimal!

---

## 🧠 **8. Why It Matters (AP CSP Connections)**

**Big Idea 2: Data**

* Everything in computing — text, sound, images — is represented digitally using bits.
* Larger units (bytes, kilobytes, etc.) store more complex data.

**Big Idea 4: Systems and Networks**

* The hardware of a computer interprets electrical signals as binary bits (on/off).
* Data travels across systems using binary codes that machines understand.

---

## 🎨 **9. Practice**

1. Convert `1101` to decimal.
2. Convert `13` to binary.
3. Convert binary `11111111` to hexadecimal.
4. Why do you think we use hexadecimal instead of binary for things like color codes (`#FF5733`)?
5. What’s the largest decimal number you can represent with 8 bits?

---

## 🧩 **10. Extension Challenge**

Write your initials using binary or hexadecimal!
Example:

* “A” in ASCII = `65` decimal = `01000001` binary = `41` hex

---

## 👩‍🏫 **Teacher Notes & Accommodations**

* Provide **color-coded manipulatives** (blue = 1, gray = 0).
* Allow use of **binary-to-decimal charts** for support.
* For visual learners, show an animation of **bits lighting up** (powers of two).
* For kinesthetic learners, use **physical cards labeled 128, 64, 32, etc.** to flip up/down for 1s and 0s.
* For auditory learners, connect binary patterns to **beats or rhythm patterns** (“on = clap, off = pause”).

---
