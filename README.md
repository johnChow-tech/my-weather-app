# 天气查询应用 (Vanilla JS Weather App)

[![部署状态](https://img.shields.io/github/deployments/你的GitHub用户名/你的仓库名/github-pages?label=Deployment)](你的GitHubPages链接)

一个使用原生 JavaScript、HTML 和 CSS 构建的简洁天气查询应用。这个项目是我们学习前端 API 调用、异步编程和动态 DOM 操作的核心实践。

---

### 线上体验 (Live Demo)

**:point_right: [点击这里访问线上应用](你的GitHubPages链接)**

![[请在这里粘贴项目截图]]([截图链接])

---

### 主要功能 (Key Features)

* **自动定位:** 启动时尝试通过浏览器获取用户当前位置并显示天气。
* **城市搜索:** 支持用户手动输入城市名称（英文）进行精确查询。
* **默认城市:** 在用户拒绝定位或首次加载时，显示一个默认城市（如：东京）的天气。
* **热门城市快速选择:** 提供常用城市的按钮，方便一键查询。
* **丰富的数据展示:**
    * 温度 (℃)
    * 天气状况文字描述及动态图标
    * 湿度 (%)
    * 气压 (hPa)
    * 风速 (m/s)
* **完善的错误处理:**
    * 当输入无法识别的城市时，给予清晰提示。
    * 当 API 请求失败或网络异常时，弹出模态框友好地提醒用户。
    * 在数据加载未完成时，显示占位符，提升用户体验。

---

### 技术栈 (Technology Stack)

* **核心语言:** HTML5, CSS3, JavaScript (ES6+)
* **核心技术:**
    * **DOM API:** 动态生成和操控页面元素。
    * **Fetch API:** 实现异步数据请求。
    * **Async/Await:** 优雅地处理异步逻辑。
* **数据来源:** [WeatherAPI.com](https://www.weatherapi.com/)
* **开发工具:** Visual Studio Code, Git, GitHub
* **部署:** GitHub Pages (通过 GitHub Actions 自动化部署)

---

### 本项目学习目标 (Learning Objectives)

这个项目的主要目的是为了深化对前端基础的理解，特别是：

1.  **API 调用与异步编程:** 掌握如何通过 `fetch` 与第三方服务器进行数据交换，并使用 `async/await` 管理复杂的异步流程。
2.  **动态 DOM 操作:** 摆脱静态 HTML，学习完全由 JavaScript 来驱动和更新用户界面，理解数据与视图的分离。
3.  **错误处理与健壮性:** 学会预见并处理各种可能的异常情况（如网络错误、API 错误、用户输入错误），打造用户体验良好的应用。
4.  **代码的模块化组织:** (随着项目进展) 学习如何将不同的功能（如 API 调用、UI 更新）拆分到不同的函数或模块中，提高代码的可读性和可维护性。
5.  **CI/CD 实践:** 熟悉使用 GitHub Actions 将项目自动化部署到线上的完整流程。

---

### 如何在本地运行 (Project Setup)

由于本项目完全使用原生技术，不依赖任何包管理器和框架，因此启动步骤非常简单：

1.  克隆本仓库到本地:
    ```bash
    git clone [https://github.com/你的GitHub用户名/你的仓库名.git](https://github.com/你的GitHub用户名/你的仓库名.git)
    ```
2.  进入项目目录:
    ```bash
    cd 你的仓库名
    ```
3.  直接在浏览器中打开 `index.html` 文件即可。
    > **推荐:** 为了获得更好的开发体验（如热重载），建议使用 VS Code 的 `Live Server` 插件来运行本项目。

---

### 项目状态 (Project Status)

:construction: **开发中 (In Progress)**