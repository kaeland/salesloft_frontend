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

describe('mapEmailToHash', () => {
  it('should map an email to an object', () => {
    let obj = mapEmailToHash(exampleEmail)
    expect(obj).toEqual(parsedEmail)
  })
})

describe('mapEmailHashToArray', () => {
  it('should map an email to an array', () => {
    let array = mapEmailHashToArray(exampleEmail)
    expect(array).toEqual(parsedEmailToArray)
  })
})

describe('sortEmailByLetterFrequency', () => {
  it('should sort email by frequency count', () => {
    let array = sortEmailByLetterFrequency(exampleEmail)
    const sorter = (a, b) => b[1] - a[1]
    expect(parsedEmailToArray.sort(sorter)).toEqual(array)
  })
})

describe('editDistance', () => {
  it('should return the number of characters likely to be between strings', () => {
    let distance = editDistance(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
    expect(distance).toBe(2)
  })
})

describe('similarity', () => {
  it('should return a number', () => {
    let percentage = similarity(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
    expect(typeof percentage).toBe('number')
  })
  
  it('should return a number less than 1, but greater than 0', () => {
    let percentage = similarity(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
    expect(percentage).toBeLessThan(1)
    expect(percentage).toBeGreaterThan(0)
  })
  
  it('should return a reasonably high similarity percentage for similar strings', () => {
    let percentage = similarity(arrayOfSimilarEmails[0], arrayOfSimilarEmails[1])
    expect(percentage).toBeCloseTo(0.95, 1)
  })

  it('should return a reasonably low similarity percentage for dissimilar strings', () => {
    let percentage = similarity('michael.jackson@example.com', 'jill.scott@music.com')
    expect(percentage).toBeLessThan(0.85)
  })
})
