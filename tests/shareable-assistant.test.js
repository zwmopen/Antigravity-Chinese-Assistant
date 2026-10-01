'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assistant = fs.readFileSync(path.join(root, 'src', 'Antigravity-Chinese-Assistant.cs'), 'utf8');
const build = fs.readFileSync(path.join(root, 'build.ps1'), 'utf8');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');

assert.ok(assistant.includes('启动中文版'));
assert.ok(assistant.includes('恢复英文原版'));
assert.ok(assistant.includes('CreateDesktopShortcut'));
assert.ok(assistant.includes('--remote-debugging-port=0'));
assert.ok(assistant.includes('AssemblyFileVersion("0.4.1.0")'));
assert.ok(assistant.includes('Antigravity-CdpLocalizationLoader.exe'));
assert.ok(assistant.includes('localization-extension'));
assert.ok(!assistant.includes('17897'));
assert.ok(!assistant.includes('Clash'));
assert.ok(!assistant.includes('AccountWatcher'));
assert.ok(!assistant.includes('HTTP_PROXY'));
assert.ok(build.includes('Compress-Archive'));
assert.ok(build.includes('文件校验.json'));
assert.ok(readme.includes('不修改 Windows、Clash 或其他代理配置'));
assert.ok(readme.includes('恢复英文原版'));

console.log('shareable-assistant.test.js: PASS');
