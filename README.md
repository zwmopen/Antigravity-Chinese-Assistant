# Antigravity 中文助手

[![Build](https://github.com/zwmopen/Antigravity-Chinese-Assistant/actions/workflows/build.yml/badge.svg)](https://github.com/zwmopen/Antigravity-Chinese-Assistant/actions/workflows/build.yml)
[![Release](https://img.shields.io/github/v/release/zwmopen/Antigravity-Chinese-Assistant)](https://github.com/zwmopen/Antigravity-Chinese-Assistant/releases/latest)

Windows 版 Google Antigravity 桌面客户端的外部无侵入简体中文助手。

当前版本：**0.4.0**

主要适配并实机验证：**Antigravity Desktop 2.11.0 / Windows 10、11 x64**

## 一键使用

1. 打开 [Releases](https://github.com/zwmopen/Antigravity-Chinese-Assistant/releases/latest)。
2. 下载 `Antigravity-Chinese-Assistant-0.4.0-windows-x64.zip`。
3. **完整解压 ZIP**，不要只取出一个 EXE。
4. 双击 `Antigravity-Chinese-Assistant.exe`。
5. 点击“启动中文版”。

需要恢复时，打开助手并点击“恢复英文原版”。切换语言会关闭并重新打开 Antigravity，请先保存正在编辑的内容。

## 它会做什么

- 自动寻找 Antigravity 的 Windows 标准安装目录。
- 通过应用已有的本地 DevTools 调试目标动态注入汉化。
- 对 React 动态界面使用单次 TreeWalker、节点合并、缓存和 80 ms 防抖。
- 翻译侧边栏、Settings、按钮、提示、策略、额度、权限和常见动态状态。
- 保护对话标题、用户消息、Markdown、代码、终端、编辑器和输入内容。
- 支持一键恢复英文和创建桌面入口。

## 它不会做什么

- 不修改 `resources/app.asar` 或 `dist/preload.js`。
- 不读取或清理登录状态、Cookie、会话、项目文件。
- 不安装后台服务，不设置开机启动。
- 不修改 Windows、Clash 或其他代理配置。
- 不发送模型消息，不绕过 Google 的账号、地区或资格限制。

## 为什么不是单 EXE

程序使用可审查的独立 JS 词库和 DOM 运行时。为了让用户能够直接检查汉化内容，发行包保留 `localization-extension` 目录，因此采用一个小型 ZIP，而不是把所有内容封装进不可见的单文件。

## 从源码构建

项目无需 Visual Studio，Windows 自带的 .NET Framework C# 编译器即可完成构建：

```powershell
git clone https://github.com/zwmopen/Antigravity-Chinese-Assistant.git
Set-Location .\Antigravity-Chinese-Assistant
node .\tests\localization-extension.test.js
node .\tests\shareable-assistant.test.js
& .\build.ps1
```

输出：`dist/Antigravity-Chinese-Assistant-<version>-windows-x64.zip`

## 故障排查

- **未找到 Antigravity**：先安装官方桌面客户端；当前自动检测标准安装目录。
- **汉化加载器缺失**：重新完整解压 ZIP。
- **启动后仍是英文**：关闭 Antigravity 和助手，重新打开助手再点击“启动中文版”。
- **官方升级后出现漏翻**：提交 Issue，并附 Antigravity 版本、页面名称和未翻译的英文原文；不要上传账号、Cookie、Token、私人对话或完整日志。
- **界面异常**：使用“恢复英文原版”，或直接启动官方 Antigravity。

## 隐私与安全

所有翻译在本地页面中完成，不上传数据。发行包包含递归 SHA-256 文件清单。Windows 可能对未签名的小众 EXE 显示 SmartScreen 提醒，可从本仓库源码自行构建并比对。

## 许可与声明

项目自身代码采用 [MIT License](LICENSE)。汉化术语和覆盖范围曾参考公开项目 `yuexps/Antigravity-Hans`；详细边界见 [THIRD_PARTY_NOTICES.txt](THIRD_PARTY_NOTICES.txt)。

本项目是非官方社区工具，与 Google 无隶属、合作或认可关系。Google、Antigravity、Gemini 及相关名称和商标归各自权利人所有。
