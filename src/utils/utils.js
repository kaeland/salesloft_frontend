export const mapEmailToHash = (email) => {
  let hash = {}
  for (const letter of email) {
    if (hash[letter] === undefined) {
      hash[letter] = 0
    }
    hash[letter] += 1
  }
  return hash
}

export const mapEmailHashToArray = (email) => {
  const hash = mapEmailToHash(email)
  let sortable = []
  for (const letter in hash) {
    sortable.push([letter, hash[letter]]);
  }
  return sortable
}

export const sortEmailByLetterFrequency = (email) => {
  const sortable = mapEmailHashToArray(email)
  return sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
}

// I used stackoverflow to support string comparisons:
// https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
// Levenshtein distance https://en.wikipedia.org/wiki/Levenshtein_distance

export const editDistance = (s1, s2) => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

export const similarity = (s1, s2) => {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

export const unique = (duplicates) => {
  const ids = new Set();
  const uniqeDuplicates = duplicates.filter(duplicate => {
    if (ids.has(duplicate[0].id) || ids.has(duplicate[1].id)) {
      return false;
    }
    ids.add(duplicate[0].id);
    ids.add(duplicate[1].id);
    return true;
  });
  return uniqeDuplicates
}

export const comparePeople = (data) => {
  let possibleDuplicates = []
  for (let i = 0; i <= data.length - 1; i++) {
    let matched = []
    for (let j = 0; j <= data.length - 1; j++) {
      if (i === j) { continue }
      let firstPersonEmail = data[i].email_address
      let secondPersonEmail = data[j].email_address
      let percentage = similarity(firstPersonEmail, secondPersonEmail)
      if (percentage >= 0.93) {
        matched.push(data[j])
      }
    }
    if (matched.length === 0) {
      continue
    } else {
      matched.push(data[i])
      possibleDuplicates.push(matched)
    }
  }
  let uniqeDuplicates = unique(possibleDuplicates)
  return uniqeDuplicates
}