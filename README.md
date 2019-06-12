# _Pig Latin_

#### _A web page to translate pig latin, 6-12-2019_

#### _Authors: Alex Siegberg & Nate Wangemann

## Description

_A translator for pig latin that takes in user inputted strings._

## Setup/Installation

Step 1: Clone this repository to your desktop
Step 2: Open index.html

## Specs

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Expected Output: 3

The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Expected Output: iay

The program adds "way" to multiple-character words beginning with a vowel.
Example Input: apple
Expected Output: appleWay

For words that begin with a consonant, the program moves the consonant to the end and adds "ay"
Example Input: tiger
Expected Output: igerTay

For words that begin with more than one consecutive consonant, the program moves all consecutive consonants to the end and adds "ay"
Example Input: trampoline
Expected Output: ampolineTray

For words that contain "Qu", the program moves the "Q" and the "u" both to the end
Example Input: squirrel
Expected Output: irrelSquay

For words beginning with "y", "y" is treated as a consonant
Example Input: yellow
Expected Output: ellowYay

When letters are moved to the end of the word, the first letter is capitalized
Example Input: yellow
Expected Output: ellowYay


## Licensing

MIT License

Copyright (c) 2019 Alex Siegberg & Nathan Wangemann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
