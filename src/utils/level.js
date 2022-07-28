/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-07-28 17:07:55
 * @LastEditors: Levine
 * @LastEditTime: 2022-07-28 17:31:58
 * @FilePath: /papapa/src/utils/level.js
 */

const { LEVELS } = require('../data/level')
const { Storage } = require('./storage.js')
const { getToDay } = require('./date')

// 获取段位信息
function getLevel(context) {
  let level = '青铜'
  let today = 0
  // 历史数据
  const papapaNumList = new Storage(context).getObject('papapaNumObj') || []
  // 今天的数据
  const date = getToDay()
  const todayDateIndex = papapaNumList.findIndex((val) => val.date === date)
  if (todayDateIndex !== -1) {
    today = papapaNumList[todayDateIndex].num
  }
  // 总点击数
  const count = papapaNumList.reduce((prev, curr) => {
    return prev + curr.num * 1
  }, 0)
  for (let i = 0; i < LEVELS.length; i++) {
    const { min, max, name } = LEVELS[i];
    if (count >= min && (count <= max || max === 0)) {
      level = name
      break
    }
  }

  return {
    level,
    count,
    today
  }
}
module.exports = {
  getLevel
}