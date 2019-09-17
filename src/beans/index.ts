export const ROLE_TYPE = {
  [1 || '1']: {
    value: '角色',
    color: '#589EF8'
  },
  [2 || '2']: {
    value: '势力',
    color: '#7EBF50'
  },
  [3 || '3']: {
    value: '曾用名',
    color: '#909398'
  }
}

export const loading_options = {
  lock: true,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(255, 255, 255, 0.4)'
}

export const EQ_ID_LIST: any = (row: number, col: number, prefix: string): string[] => {
  const res = []
  let i, j
  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      res.push(`${prefix}${i}${j}`)
    }
  }
  return res
}
