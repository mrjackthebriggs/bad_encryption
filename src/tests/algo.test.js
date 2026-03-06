import { expect, test } from 'vitest'
import {vowShiftFunct, constShiftFunct, speakChineeseFunct} from '../assets/Algos.jsx'

//VOW SHIFT TESTS
const vowels = "aeiou";
test('Vow Shift 1', () => {
  expect(vowShiftFunct("After every ice, orance use'd ,./|`~!@#$%^&*()_+=-{}:;<>?", false, 1, vowels)).toBe("Eftir iviry oci, urenci asi'd ,./|`~!@#$%^&*()_+=-{}:;<>?")
})

test("Vow Shift 2", () => {
  expect(vowShiftFunct("Iftor ovory uco, arinco eso'd ,./|`~!@#$%^&*()_+=-{}:;<>?", true, 2, vowels)).toBe("After every ice, orance use'd ,./|`~!@#$%^&*()_+=-{}:;<>?")
})

test("Vow Shift 3", () => {
  expect(vowShiftFunct("After every ice, orance use'd ,./|`~!@#$%^&*()_+=-{}:;<>?", false, 3, vowels)).toBe("Oftur uvury acu, eroncu isu'd ,./|`~!@#$%^&*()_+=-{}:;<>?")
})

test("Vow Shift 4", () => {
  expect(vowShiftFunct("Uftar avary eca, irunca osa'd ,./|`~!@#$%^&*()_+=-{}:;<>?", true, 4, vowels)).toBe("After every ice, orance use'd ,./|`~!@#$%^&*()_+=-{}:;<>?")
})


// CONTENANT SHIFT
const cons = "bcdfghjklmnpqrstvwxyz";
test('Cons Shift 1', () => {
  expect(constShiftFunct("The quick brown fox jumps over the lazy dog ,./|`~!@#$%^&*()_+=-{}:;<>?", false, 1, cons)).toBe("Vje ruidl csoxp goy kunqt owes vje mabz foh ,./|`~!@#$%^&*()_+=-{}:;<>?")
})

test('Cons Shift 2', () => {
  expect(constShiftFunct("Bpe xuikr jyodv mof qutwz ocey bpe sahg lon ,./|`~!@#$%^&*()_+=-{}:;<>?", true, 6, cons)).toBe("The quick brown fox jumps over the lazy dog ,./|`~!@#$%^&*()_+=-{}:;<>?")
})

test('Cons Shift 3', () => {
  expect(constShiftFunct("The quick brown fox jumps over the lazy dog ,./|`~!@#$%^&*()_+=-{}:;<>?", false, 10, cons)).toBe("Gte cuipw ndojz rok vuybf ohed gte xaml qos ,./|`~!@#$%^&*()_+=-{}:;<>?")
})

test('Cons Shift 4', () => {
  expect(constShiftFunct("Sge puibj zqovm dow hulnr oteq sge kayx cof ,./|`~!@#$%^&*()_+=-{}:;<>?", true, 20, cons)).toBe("The quick brown fox jumps over the lazy dog ,./|`~!@#$%^&*()_+=-{}:;<>?")
})


// 'Chinese'
test('Chinese 1', () => {
  expect(speakChineeseFunct("The quick brown fox, jumps over the lazy dog's ,./|`~!@#$%^&*()_+=-{}:;<>?", false)).toBe("亇牝乇 中凵个汇长 丑伬囙屲九 下囙义, 丿凵爪沪互 囙丩乇伬 亇牝乇 乚氏之丫 口囙沰'互 ,./|`~!@#$%^&*()_+=-{}:;<>?")
})

test('Chinese 2', () => {
  expect(speakChineeseFunct("亇牝乇 中凵个汇长 丑伬囙屲九 下囙义, 丿凵爪沪互 囙丩乇伬 亇牝乇 乚氏之丫 口囙沰'互 ,./|`~!@#$%^&*()_+=-{}:;<>?", true)).toBe("the quick brown fox, jumps over the lazy dog's ,./|`~!@#$%^&*()_+=-{}:;<>?")
})