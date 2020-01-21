const mapEmailToHash = (email) => {
  let hash = {}
  for (const letter of email) {
    if (hash[letter] === undefined) {
      hash[letter] = 0
    }
    hash[letter] += 1
  }
  return hash
}

const mapEmailHashToArray = (email) => {
  const hash = mapEmailToHash(email)
  let sortable = []
  for (const letter in hash) {
    sortable.push([letter, hash[letter]]);
  }
  return sortable
}

export const sortEmailByLetterFrequency = (email) => {
  const sortable = mapEmailHashToArray(email)
  return sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
}

//[["bike", 60], ["motorbike", 200], ["car", 300],
//["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

