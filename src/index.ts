import { Context, Schema } from 'koishi';
import { showWord, randomDict, randomWord, findWordByDict } from './utils';
import Dicts from './dicts';

export const name = 'words';

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  ctx.command('words.listdict').action(async ({ session }) => {
    let res = '';
    const dicts = Object.keys(Dicts);
    dicts.forEach((dict) => {
      res += dict + ':\n';
      Object.keys(Dicts[dict]).forEach((subDict) => {
        res += `  ${subDict}\n`;
      });
    });
    return res;
  });

  ctx
    .command('words')
    .alias('enw')
    .action(async ({ session }) => {
      const word = randomWord(Dicts.En);
      return showWord(word);
    });

  ctx
    .command('words.query <name>')
    .alias('enq')
    .action(async ({ session }, name) => {
      const words = findWordByDict(Dicts.En, name);
      if (words.length === 0) {
        return 'Not found';
      }
      words.forEach((word) => {
        session.send(showWord(word));
      });
    });

  ctx
    .command('words.js')
    .alias('jsw')
    .action(async ({ session }) => {
      const word = randomWord(Dicts.JS);
      return showWord(word);
    });

  ctx
    .command('words.js.query <name>')
    .alias('jsq')
    .action(async ({ session }, name) => {
      const words = findWordByDict(Dicts.JS, name);
      if (words.length === 0) {
        return 'Not found';
      }
      words.forEach((word) => {
        session.send(showWord(word));
      });
    });

  ctx
    .command('words.ai')
    .alias('aiw')
    .action(async ({ session }) => {
      const word = randomWord(Dicts.AI);
      return showWord(word);
    });

  ctx
    .command('words.ai.query <name>')
    .alias('aiq')
    .action(async ({ session }, name) => {
      const words = findWordByDict(Dicts.AI, name);
      if (words.length === 0) {
        return 'Not found';
      }
      words.forEach((word) => {
        session.send(showWord(word));
      });
    });
}
