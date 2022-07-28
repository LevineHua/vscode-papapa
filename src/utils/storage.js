/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-07-27 15:24:53
 * @LastEditors: Levine
 * @LastEditTime: 2022-07-27 17:12:37
 * @FilePath: /papapa/src/utils/storage.js
 */
class Storage {
  constructor(context) {
    this.context = context
  }

  // 获取字符串
  getString(key) {
    if (!key) return 
    console.log('------', key);
    return this.context.globalState.get(key)
  }

  setString(key, value) {
    if (!key) return
    this.context.globalState.update(key, value)
  }

  getObject(key) {
    if (!key) return

    const value = this.getString(key)

    if (!value) return

    return JSON.parse(value, (_key, _value) => {
      const funcPattern = /function[^(]*\(([^)]*)\)\s*\{([\s\S]*)\}/
      const matches = _value ? _value.toString().match(funcPattern) : ''

      if (matches) {
        const args = matches[1].split(',').map((arg) => {
          return arg.trim()
        })
        return new Function(args, matches[2])
      } else {
        return _value
      }
    })
  }

  setObject(
    key,
    value,
    serializable = false,
    rule = {
      type: 'excepts',
      patterns: [],
    }
  ) {
    if (!key) return

    if (typeof value === 'object') {
      value = JSON.stringify(value, (_key, _value) => {
        // 按照规则过滤属性
        if (rule.patterns.indexOf(_key) !== -1) {
          _value = rule.type === 'excepts' ? undefined : _value
        } else {
          _value = rule.type === 'excepts' ? _value : undefined
        }

        if (serializable && typeof _value === 'function') {
          return _value.toString()
        }
        return _value
      })
    } else {
      value = ''
    }

    return this.setString(key, value)
  }
}

module.exports = {
  Storage
}