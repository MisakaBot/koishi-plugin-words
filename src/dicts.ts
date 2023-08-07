/**
 * English words dictionary
 */
import CET4 from './dicts/CET4_T.json';
import CET6 from './dicts/CET6_T.json';
import HongBao_2024T1 from './dicts/2024HongBao_T1.json';
import HongBao_2024T2 from './dicts/2024HongBao_T2.json';

const En = {
  CET4: CET4,
  CET6: CET6,
  HongBao_2024T1: HongBao_2024T1,
  HongBao_2024T2: HongBao_2024T2,
};

/**
 * JavaScript API dictionary
 */
import js_array from './dicts/js-array.json';
import js_date from './dicts/js-date.json';
import js_global from './dicts/js-global.json';
import js_map from './dicts/js-map-set.json';
import js_math from './dicts/js-math.json';
import js_number from './dicts/js-number.json';
import js_object from './dicts/js-object.json';
import js_promise from './dicts/js-promise.json';
import js_string from './dicts/js-string.json';

const JS = {
  js_array,
  js_date,
  js_global,
  js_map,
  js_math,
  js_number,
  js_object,
  js_promise,
  js_string,
};

/**
 * AI dictionary
 */
import ai_for_science from './dicts/ai_for_science.json';
import ai_machine_learning from './dicts/ai_machine_learning.json';

const AI = {
  ai_for_science,
  ai_machine_learning,
};

/**
 * Exports
 */
export default {
  En,
  JS,
  AI,
};
