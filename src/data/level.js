/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-07-28 14:46:35
 * @LastEditors: Levine
 * @LastEditTime: 2022-08-02 09:48:59
 * @FilePath: /papapa/src/data/level.js
 */
// 所有等级
const LEVELS = [
  {
    min: 0,
    max: 99999,
    name: '青铜'
  },
  {
    min: 100000,
    max: 199999,
    name: '白银'
  },
  {
    min: 200000,
    max: 299999,
    name: '黄金'
  },
  {
    min: 300000,
    max: 399999,
    name: '铂金'
  },
  {
    min: 400000,
    max: 499999,
    name: '钻石'
  },
  {
    min: 500000,
    max: 599999,
    name: '大神'
  },
  {
    min: 600000,
    max: 699999,
    name: '无敌'
  },
  {
    min: 700000,
    max: 0,
    name: '传说'
  }
]

module.exports = {
  LEVELS
}