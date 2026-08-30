# 开发交接

> 对应版本：0.4.0
>
> 最后核对：2026-08-30

## 产品定位

为 Windows Antigravity Desktop 提供可逆、外部、无侵入的简体中文界面。面向希望直接双击使用、又不愿修改官方安装资源的用户。

## 架构

```text
Antigravity-Chinese-Assistant.exe
→ 自动发现官方 Antigravity.exe
→ 用户确认后关闭旧实例
→ 中文：以本地调试参数启动，并运行 CDP Loader
→ Loader 注入 translation-core.js + content.js
→ MutationObserver 防抖处理 React 动态 DOM

英文恢复
→ 关闭旧实例
→ 不加载汉化脚本，直接启动官方程序
```

## 关键文件

- `src/Antigravity-Chinese-Assistant.cs`：Windows GUI、路径发现、中文/英文启动和快捷方式。
- `src/Antigravity-CdpLocalizationLoader.cs`：读取 DevToolsActivePort 并注入脚本。
- `src/localization-extension/translation-core.js`：词库、上下文分层和动态规则。
- `src/localization-extension/content.js`：DOM 保护、遍历、缓存、观察和防抖。
- `build.ps1`：生成便携目录、文件清单和 Windows x64 ZIP。

## 安全边界

- 不包含代理、Cockpit、账号监控或开机启动。
- 不修改官方资源、登录态、会话和项目文件。
- 用户内容区域默认保护。
- 只在用户明确点击语言按钮后重启 Antigravity。

## 当前验证

- Node 静态回归与 JS 语法检查通过。
- Windows .NET Framework 编译通过。
- 发行 EXE 窗口标题、FileVersion 和 ProductVersion 为 0.4.0。
- 发行 Loader 在 Antigravity 2.11.0 页面注入成功，marker 为 0.4.0。
- Settings、侧边栏、动态文本及对话标题保护完成实机检查。

## 已知限制

- 目前只支持 Windows x64 标准安装目录。
- 官方关闭本地 DevTools 目标或改变 UI 协议后，汉化可能失效，但英文原版仍可启动。
- 未进行代码签名，Windows SmartScreen 可能提示未知发布者。
- 公开词库授权边界见 `THIRD_PARTY_NOTICES.txt`。

## 下一步

收集首批外部用户对 Antigravity 版本、漏翻页面和启动失败的脱敏反馈；不以扩大功能为目标优先于兼容性和性能。
