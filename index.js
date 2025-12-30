import { writeFileSync } from "node:fs";
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */

let text = `### 🦦 안녕하세요

**주어진 상황에 최선을 다하는** 개발자 김수연입니다. 🍑 <br>

<div style="display: flex; gap: 5px; flex-wrap: wrap">
  <a href="#">
    <img src="https://img.shields.io/badge/resume-%23d197e8?&style=for-the-badge" alt="resume Badge" height="25px" />
  </a>
  <a href="https://drive.google.com/file/d/1ctUh-w6tdmayfnybWz2ke2c9_Poaqp2X/view?usp=drive_link">
    <img src="https://img.shields.io/badge/portfolio-%475570?&style=for-the-badge" alt="portfolio Badge" height="25px" />
  </a>
  <a href="mailto:kbsksy1221@naver.com">
    <img src="https://img.shields.io/badge/email-%23f2b3e5?style=for-the-badge" alt="mail Badge" height="25px" />
  </a>
  <a href="https://www.linkedin.com/in/%EC%88%98%EC%97%B0-%EA%B9%80-12o21/">
    <img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25px" />
  </a>
  <a href="https://let-d0-study.tistory.com">
    <img src="http://img.shields.io/badge/Tistory-%23FF5722?style=for-the-badge&logo=Tistory&logoColor=ffffff" alt="Tistory Badge" height="25px" />
  </a>
  <a href="https://velog.io/@ksy1221">
    <img src="https://img.shields.io/badge/Velog-%2320C997?style=for-the-badge&logo=Velog&logoColor=ffffff" alt="Velog Badge" height="25px" />
  </a> 
</div>

### ⚒️ 기술 스택

<div style="display: flex; flex-direction: column; gap: 10px;">
  <div style="display: flex; gap: 5px; flex-wrap: wrap; align-items: center;">
    <strong>Frontend</strong>
    <img src="https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" height="25px" />
    <img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" alt="React Badge" height="25px" />
    <img src="https://img.shields.io/badge/next.js-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" height="25px" />
    <img src="https://img.shields.io/badge/zustand-%23552277.svg?&style=for-the-badge&logo=zustand&logoColor=black" alt="zustand Badge" height="25px" />
    <img src="https://img.shields.io/badge/reactquery-%23FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white" alt="reactquery Badge" height="25px" />
    <img src="https://img.shields.io/badge/sass-%23CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white" alt="Sass Badge" height="25px" />
    <img src="https://img.shields.io/badge/tailwind-%2306B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS Badge" height="25px" />
  </div>
  <div style="display: flex; gap: 5px; flex-wrap: wrap; align-items: center;">
    <strong>Backend</strong>
    <img src="https://img.shields.io/badge/nodejs-%235FA04E.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs Badge" height="25px" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS Badge" height="25px" />
    <img src="https://img.shields.io/badge/typeorm-%23FE0803.svg?&style=for-the-badge&logo=typeorm&logoColor=white" alt="typeorm Badge" height="25px" />
    <img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" height="25px" />
    <img src="https://img.shields.io/badge/redis-%23DC382D.svg?&style=for-the-badge&logo=redis&logoColor=white" alt="Redis Badge" height="25px" />
    <img src="https://img.shields.io/badge/python-%233776AB.svg?&style=for-the-badge&logo=python&logoColor=white" alt="python Badge" height="25px" />
  </div>
  <div style="display: flex; gap: 5px; flex-wrap: wrap; align-items: center;">
    <strong>Devops</strong>
    <img src="https://img.shields.io/badge/vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel Badge" height="25px" />
    <img src="https://img.shields.io/badge/githubactions-%232088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="Github Actions Badge" height="25px" />
    <img src="https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker Badge" height="25px" />
  </div>
  <div style="display: flex; gap: 5px; flex-wrap: wrap; align-items: center;">
    <strong>Tools</strong>
    <img src="https://img.shields.io/badge/aws-%23002663.svg?&style=for-the-badge" alt="aws Badge" height="25px" />
    <img src="https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" height="25px" />
    <img src="https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" height="25px" />
    <img src="https://img.shields.io/badge/VSCode-%23007ACC.svg?&style=for-the-badge" alt="VS Code Badge" height="25px" />
    <img src="https://img.shields.io/badge/notion-%23000000.svg?&style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" height="25px" />
    <img src="https://img.shields.io/badge/discord-%235865F2.svg?&style=for-the-badge&logo=discord&logoColor=white" alt="discord Badge" height="25px" />
    <img src="https://img.shields.io/badge/slack-%234A154B.svg?&style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge" height="25px" />
    <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white" alt="figma Badge" height="25px" />
  </div>
</div>

### 🎮 프로젝트

<strong>팀프로젝트</strong>

- 📦 자영업 재고 관리 도구 서비스 [재고지킴이](https://github.com/Jachodan/jachodan-next) (2025.10-2026.01) | FE
- 👖 청년을 위한 통합 서비스 [청바지](https://github.com/kimsudang/bentto-frontend) (2025.05-2025.06) | FE
- 🐶 반려동물 돌봄 구인 서비스 [코촉촉](https://github.com/kimsudang/ko-chock-chock-backend) (2024.12-2025.01) | 팀장, BE
- ⚙️ 프로젝트 협업도구 올인원 플랫폼 [팀글벙글](https://github.com/kimsudang/passion-mansour-teambeam-frontend) (2024.04-2024.06) | FE

### 📕 최근 작성한 블로그

`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

(async () => {
  // 피드 목록
  const feed = await parser.parseURL("https://let-d0-study.tistory.com/rss");

  text += `<ul>`;

  // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
  for (let i = 0; i < 7; i++) {
    const { title, link } = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
  }

  text += `</ul>`;

  // README.md 파일 생성
  writeFileSync("README.md", text, "utf8", (e) => {
    console.log(e);
  });
  console.log("업데이트 완료");
})();
