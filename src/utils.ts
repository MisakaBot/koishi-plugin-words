export interface Word {
  name: string;
  trans: string[] | string;
  usphone?: string;
  ukphone?: string;
}

export type Dict = Word[];

export interface DictObj {
  [key: string]: Dict;
}

// Common
const showWord = (word: Word) => {
  let res = word.name + '\n';
  if (word.trans instanceof Array) {
    if (word.trans.length > 1) {
      word.trans.forEach((tran, index) => {
        res += `${index + 1}. ${tran}\n`;
      });
    } else {
      res += word.trans[0] + '\n';
    }
  } else {
    res += word.trans + '\n';
  }
  if (word.usphone) {
    res += `AmE.[${word.usphone}] `;
  }
  if (word.ukphone) {
    res += `BrE.[${word.ukphone}] `;
  }
  return res;
};

// Dicts
const randomDict = (dictObj: DictObj) => {
  const dicts = Object.values(dictObj);
  const dict = dicts[Math.floor(Math.random() * dicts.length)];
  return dict;
};

const randomWord = (dictObj: DictObj) => {
  const dict = randomDict(dictObj);
  const word = dict[Math.floor(Math.random() * dict.length)];
  return word;
};

const findWordByDict = (dictObj: DictObj, name: string) => {
  const res = [];
  const dicts = Object.values(dictObj);
  dicts.forEach((dict) => {
    dict.forEach((word) => {
      if (word.name === name) {
        res.push(word);
      }
    });
  });
  return res;
};

export { showWord, randomDict, randomWord, findWordByDict };
