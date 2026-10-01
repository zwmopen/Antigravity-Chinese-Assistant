# Antigravity 独立中文助手

<p align="center">
  <strong>专为 Google Antigravity 打造的零侵入、可审查、秒级还原的外部简体中文助手</strong><br>
  不改 asar 原文件 · 智能保护代码与终端 · 开放式透明词库 · 一键极速双向还原
</p>

<p align="center">
  <img src="https://img.shields.io/badge/版本-0.4.0-blue.svg" alt="版本 0.4.0" />
  <img src="https://img.shields.io/badge/平台-Windows%2010%20%2F%2011%20(64位)-brightgreen.svg" alt="平台" />
  <img src="https://img.shields.io/badge/注入模式-零侵入外部加载-orange.svg" alt="注入模式" />
  <img src="https://img.shields.io/badge/安全保护-代码与终端绝对隔离-blueviolet.svg" alt="安全保护" />
  <img src="https://img.shields.io/badge/开源协议-MIT-green.svg" alt="开源协议" />
</p>

---

## 🎯 痛点与初衷：为什么需要它？

许多国内开发者在使用 Google Antigravity 时，由于全英文界面增加了认知负荷，希望能有母语级的操作体验。然而市面上的常规汉化方式存在几大严重隐患：
1. **暴力解包篡改 asar**：传统补丁直接解包并修改官方 `app.asar`，每次官方小版本静默更新就会被全部覆盖还原，甚至破坏校验引发闪退；
2. **闭源黑盒单文件**：很多工具打包成单一加密 EXE，用户根本看不到里面塞了什么脚本，对于承载核心开发工程的 IDE 来说存在巨大安全隐患；
3. **误伤代码与终端**：低级翻译脚本使用全局正则粗暴替换，经常把编辑器里写好的英文变量名、代码注释、终端命令甚至是 AI 对话内容翻译得面目全非。

**Antigravity 独立中文助手正是为了解决这三大难题而生——坚持“零侵入、透明可审查、代码绝对保护”，为你提供最安心的母语编程环境。**

---

## 🌟 三大核心技术支柱

### 1. 🛡️ 零侵入动态注入：不伤原版分毫
* **不修改任何官方文件**：绝不解包、不修改 `resources/app.asar` 或 `preload.js`；
* **纯净安全**：不修改 Windows、Clash 或其他代理配置，不收集或上传任何个人数据与凭证；
* **随用随走，秒级还原**：完全通过外部加载器挂载。想用中文点“启动中文版”，需要排查问题点“恢复英文原版”，原生官方客户端完好如初。

### 2. 🧠 智能语义隔离：代码与终端神圣不可侵犯
* **精准靶向翻译**：深度解析 React 界面，只对侧边栏导航、设置面板、操作按钮、系统提示、额度与权限信息做高质感直译；
* **严格安全红线**：对**代码编辑器区、终端 Console、对话消息正文、Markdown 排版与用户输入框**设立绝对豁免通道，100% 杜绝误翻译。

### 3. 🔍 词库全透明开放：100% 可审查、无后门
* **为什么不是单个封闭 EXE**：本工具刻意保留了外部的 `localization-extension` 词库目录；
* **代码与词条完全可见**：每一行翻译逻辑、每一个词条映射都以明文 JavaScript 形式呈现，任何人都可以自由审查、修改或补充词条，安全无死角。

---

## 🚀 极简上手指南

### 选项 A：开箱即用（绿色免安装）
1. 从 [最新发行版 (Releases)](https://github.com/zwmopen/Antigravity-Chinese-Assistant/releases/latest) 下载 `Antigravity-Chinese-Assistant-0.4.1-windows-x64.zip`；
2. **完整解压整个压缩包**到任意目录（切勿单独拖出单个 EXE）；
3. 双击运行 `Antigravity-Chinese-Assistant.exe`；
4. 点击 **“启动中文版”** 即可畅享完整中文界面！

> 💡 **恢复英文**：随时打开助手，点击 **“恢复英文原版”** 即可瞬间秒切回原汁原味官方环境。

### 选项 B：从源码自行编译
项目无需庞大的 Visual Studio，Windows 自带的 .NET Framework 编译器即可完成秒级构建：
```powershell
git clone https://github.com/zwmopen/Antigravity-Chinese-Assistant.git
cd Antigravity-Chinese-Assistant
.\build.ps1
```
构建产物将自动生成于 `dist/` 目录。

---

## ❓ 常见问题解答

### Q1: 官方 Antigravity 升级后，汉化会失效吗？
**不会失效，也不会导致官方损坏。**  
因为本助手完全独立于官方文件之外运行。官方即便更新版本，只要界面关键选择器未发生颠覆性重写，依然能稳定注入。若遇到新功能未翻译，词库也支持即时补充。

### Q2: 为什么要求必须“完整解压整个 ZIP”？
因为本工具秉承“透明可审查”原则，翻译词库与加载插件独立存放于 `localization-extension` 文件夹中。如果不解压直接在压缩包里双击，程序将无法读取外部词库。

### Q3: 切换语言时提示关闭编辑器，正在写的代码会丢吗？
Antigravity 自带完善的本地暂存（Hot Exit）机制，即使关闭，未保存的标签页也会在下次启动时自动恢复。但为了养成良好的工程习惯，建议切换前手动保存关键文件。

---

## 📄 许可与声明

* 本项目代码遵循 [MIT 开源许可证](LICENSE)；
* 本项目为非官方开源社区工具，与 Google 官方无商业隶属关系。相关商标归 Google LLC 所有。

---

## 📝 变更记录

| 日期 (时间) | 执行者 | 记录 |
|---|---|---|
| 2026-09-17 23:11 | 💻 本地 PC / 反重力 | 初始化创建文档并补齐变更记录历史 |
