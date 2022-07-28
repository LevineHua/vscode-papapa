/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-07-27 17:22:22
 * @LastEditors: Levine
 * @LastEditTime: 2022-07-27 17:24:26
 * @FilePath: /papapa/src/utils/date.js
 */
// 获取今天日期：yyyy-mm-dd
const getToDay = () => {
  const date = new Date()
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

module.exports = {
  getToDay
}