/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-07-28 14:46:35
 * @LastEditors: Levine
 * @LastEditTime: 2022-07-28 14:55:53
 * @FilePath: /papapa/src/data/level.js
 */
// 所有等级
const LEVELS = [
  {
    min: 0,
    max: 499999,
    name: '青铜'
  },
  {
    min: 500000,
    max: 999999,
    name: '白银'
  },
  {
    min: 1000000,
    max: 1499999,
    name: '黄金'
  },
  {
    min: 1500000,
    max: 1999999,
    name: '铂金'
  },
  {
    min: 2000000,
    max: 2499999,
    name: '钻石'
  },
  {
    min: 2500000,
    max: 2999999,
    name: '大神'
  },
  {
    min: 3000000,
    max: 3499999,
    name: '无敌'
  },
  {
    min: 3500000,
    max: 0,
    name: '传说'
  }
]

module.exports = {
  LEVELS
}