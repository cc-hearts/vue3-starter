import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function readThemeList(path: string) {
  const themeCtx = readFileSync(path, 'utf-8')
  const reg = /:root {[\s\S]*}/gm
  const root = themeCtx.match(reg)
  if (root) {
    const [cssVariableCtx] = root
    const originCssVariableList = cssVariableCtx
      .split('\n')
      .map((target) => target.trim())
    const newCssVariableList = []

    for (let i = 0; i < originCssVariableList.length; i++) {
      const cssVariable = originCssVariableList[i]

      if (cssVariable.endsWith(';')) {
        newCssVariableList.push(cssVariable)
      } else if (cssVariable.endsWith(':') || cssVariable.endsWith(',')) {
        let cssVariableName = cssVariable
        while (i++) {
          cssVariableName += originCssVariableList[i]
          if (originCssVariableList[i].endsWith(';')) {
            newCssVariableList.push(cssVariableName)
            console.log(cssVariableName)
            break
          }
        }
      }
    }
    writeFileSync(
      join(process.cwd(), 'src/assets/scss/theme/dark-result.scss'),
      newCssVariableList.join('\n')
    )
    return newCssVariableList
  }
  return []
}

function writeTheme(
  themeStrList: string[],
  themeType: 'dark' | 'default' | 'common'
) {
  const themeCtx = [':root {', ...themeStrList, '}'].join('\n')
  const path = join(
    process.cwd(),
    `src/assets/scss/theme/${themeType}-result.scss`
  )
  writeFileSync(path, themeCtx)
}
function bootstrap() {
  const darkThemeList = readThemeList(
    join(process.cwd(), 'src/assets/scss/theme/dark.scss')
  )
  const lightThemeList = readThemeList(
    join(process.cwd(), 'src/assets/scss/theme/default.scss')
  )
  const darkTheme: string[] = [],
    lightTheme: string[] = [],
    commonTheme: string[] = []
  darkThemeList.forEach((darkThemeVariableStr) => {
    if (lightThemeList.includes(darkThemeVariableStr)) {
      const [str] = lightThemeList.splice(
        lightThemeList.indexOf(darkThemeVariableStr),
        1
      )
      commonTheme.push(str)
      return
    }
    darkTheme.push(darkThemeVariableStr)
  })

  lightThemeList.forEach((lightThemeVariableStr) => {
    lightTheme.push(lightThemeVariableStr)
  })
  return [lightTheme, darkTheme, commonTheme].forEach((themeStrList, index) => {
    writeTheme(
      themeStrList,
      index === 0 ? 'default' : index === 1 ? 'dark' : 'common'
    )
  })
}

bootstrap()
