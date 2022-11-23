import * as contextMenu from './actions'

// NOTE: This are mutable fields that may change at runtime.

export const SEPARATOR = {
  type: 'separator'
}

export const CLOSE_THIS = {
  label: 'Close',
  id: 'closeThisTab',
  click (menuItem, browserWindow) {
    contextMenu.closeThis(menuItem._tabId)
  }
}

export const CLOSE_OTHERS = {
  label: 'Close others',
  id: 'closeOtherTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeOthers(menuItem._tabId)
  }
}

export const CLOSE_SAVED = {
  label: 'Close saved tabs',
  id: 'closeSavedTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeSaved()
  }
}

export const CLOSE_ALL = {
  label: 'Close all tabs',
  id: 'closeAllTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeAll()
  }
}

export const RENAME = {
  label: 'Rename',
  id: 'renameFile',
  click (menuItem, browserWindow) {
    contextMenu.rename(menuItem._tabId)
  }
}

export const COPY_PATH = {
  label: 'Copy path',
  id: 'copyPath',
  click (menuItem, browserWindow) {
    contextMenu.copyPath(menuItem._tabId)
  }
}

export const SHOW_IN_FOLDER = {
  label: 'Show in folder',
  id: 'showInFolder',
  click (menuItem, browserWindow) {
    contextMenu.showInFolder(menuItem._tabId)
  }
}

export const TRANSFORM_PICTURE_BASE64 = {
  label: '将图片转换为Base64',
  id: 'transformPictureToBase64',
  click (menuItem, browserWindow) {
    contextMenu.transformPictureToBase64(menuItem._tabId)
  }
}

export const TRANSFORM_PICTURE_LOCAL = {
  label: '将图片转换为本地',
  id: 'transformPictureToLocal',
  click (menuItem, browserWindow) {
    contextMenu.transformPictureToLocal(menuItem._tabId)
  }
}

export const TRANSFORM_PICTURE_NETWORK = {
  label: '将图片转换为网络',
  id: 'transformPictureToNetwork',
  click (menuItem, browserWindow) {
    contextMenu.transformPictureToNetwork(menuItem._tabId)
  }
}
