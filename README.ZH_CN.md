###### windows 编译步骤

1. 安装编译环境

   ```bash
   yarn add windows-build-tools --global --production
   yarn add node-gyp --global
   ```

2. 安装项目依赖

   ```bash
   yarn install
   ```

3. 安装ts依赖

   ```bash
   yarn add ts-node
   yarn add typescript
   ```

4. 编译

   ```
   yarn build
   ```
