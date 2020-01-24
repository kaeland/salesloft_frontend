import {
  mapEmailToHash,
  mapEmailHashToArray,
  sortEmailByLetterFrequency,
  editDistance, 
  similarity, 
  unique,
  comparePeople
} from '../../utils/utils'
import {
  peopleData,
  exampleEmail,
  arrayOfSimilarEmails,
  parsedEmail, 
  parsedEmailToArray
} from '../fixtures/peopleData'

test('should map an email to an object', () => {
  let obj = mapEmailToHash(exampleEmail)
  expect(obj).toEqual(parsedEmail)
})

test('should map an email to an array', () => {
  let array = mapEmailHashToArray(exampleEmail)
  expect(array).toEqual(parsedEmailToArray)
})

test('should sort email by frequency count', () => {
  let array = sortEmailByLetterFrequency(exampleEmail)
  const sorter = (a, b) => b[1] - a[1]
  expect(parsedEmailToArray.sort(sorter)).toEqual(array)
})

test('should return the number of characters likely to be between strings', () => {
  let distance = editDistance(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
  expect(distance).toBe(2)
})

test('should return a number', () => {
  let percentage = similarity(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
  expect(typeof percentage).toBe('number')
})

test('should return a number less than 1, but greater than 0', () => {
  let percentage = similarity(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
  expect(percentage).toBeLessThan(1)
})

test('should return a number greater than 0',  () => {
  let percentage = similarity(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
  expect(percentage).toBeGreaterThan(0)
})

test('should return a reasonable similarity percentage for similar strings', () => {
  let percentage = similarity(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
  expect(percentage).toBeCloseTo(0.9, 1)
})



