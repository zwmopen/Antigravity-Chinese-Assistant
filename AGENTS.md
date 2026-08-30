# 维护入口

1. 先读 `README.md`、`docs/HANDOFF.md`、`CHANGELOG.md` 和 `THIRD_PARTY_NOTICES.txt`。
2. `src/` 是源码唯一真源；`dist/` 是可重建产物，不进 Git。
3. 任何功能变化同步更新 `VERSION`、manifest、程序集版本、测试、README、CHANGELOG 和交接文档。
4. 不引入代理、账号、Cookie、登录态、用户对话、项目文件或本机私有路径。
5. 发布前运行两个 Node 测试、JS 语法检查、`build.ps1`、包内哈希复验和发行 EXE 启动检查。
6. 不修改 `app.asar` 或 preload；动态注入失效时优先诊断 DevTools 目标和官方版本变化。
