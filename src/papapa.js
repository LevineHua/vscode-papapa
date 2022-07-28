/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-07-27 15:35:36
 * @LastEditors: Levine
 * @LastEditTime: 2022-07-28 17:39:23
 * @FilePath: /papapa/src/papapa.js
 */
const vscode = require('vscode');
const { Storage } = require('./utils/storage.js')
const { getToDay } = require('./utils/date')
const { LEVELS } = require('./data/level')
const { getLevel } = require('./utils/level')

class Papapa {
  constructor (_context) {
    this.context = _context
    this.storage = new Storage(this.context)
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left)
    this.init()
  }

  init() {
    console.log('init=====', this.storage.getObject('papapaNumObj'));
    this.statusBarItem.show()
    this.statusBarItem.command = 'papapa.info'

    this.getToDayPapapaNum()

    var listenner = (event) => {
      if (event) {
        const { contentChanges } = event
        if (contentChanges.length) {
          const text = contentChanges[0].text
          // console.log(text);
          // 判断是否是空格或汉字，如果是汉字则表示输入了空格
          if (text === ' ' || new RegExp("[\\u4E00-\\u9FFF]+", "g").test(text)) {
            // vscode.window.showInformationMessage(papapaNum.toString())
            this.setPapapaNum()
          }
        }
      }
    }
    vscode.workspace.onDidChangeTextDocument(listenner)
  }

  // 设置今天空格的点击数
  setPapapaNum() {
    /**
     * 数据格式：
     * [{
     *  date: '2022-07-27',
     *  num: 1,
     * }]
     */
    // 今天日期
    const date = getToDay()
    // 历史数据
    const papapaNumList = this.storage.getObject('papapaNumObj') || []
    // 判断历史数据中是否存在今天的数据
    const todayDateIndex = papapaNumList.findIndex((val) => val.date === date)
    if (todayDateIndex !== -1) {
      papapaNumList[todayDateIndex].num = papapaNumList[todayDateIndex].num + 1
      this.getToDayPapapaNum(papapaNumList[todayDateIndex].num)
    } else {
      papapaNumList.push({
        date,
        num: 1
      })
      this.getToDayPapapaNum(1)
    }

    this.storage.setObject('papapaNumObj', papapaNumList)
  }

  // 获取今天的空格点击数
  getToDayPapapaNum(todayNum) {
    let num = 0
    if (todayNum) {
      num = todayNum
    } else {
      // // 今天日期
      // const date = getToDay()
      // // 历史数据
      // const papapaNumList = this.storage.getObject('papapaNumObj') || []
      // // 判断历史数据中是否存在今天的数据
      // const todayDateIndex = papapaNumList.findIndex((val) => val.date === date)
      // if (todayDateIndex !== -1) {
      //   num = papapaNumList[todayDateIndex].num
      // }
    }

    // 获取段位
    const { level, today } = getLevel(this.context)
    
    // vscode.window.setStatusBarMessage(`腱鞘炎段位：${level}（今天已敲${num}下空格）`)
    
    this.statusBarItem.text = `腱鞘炎段位：${level}（今天已敲${today || num}下空格）`
  }
}

module.exports = {
  Papapa
}