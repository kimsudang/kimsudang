import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */

let text = `### 🦦 안녕하세요

안녕하세요 **동그란** 개발자 김수연입니다. 🍑 <br>
**자동화**와 **문서화**에 관심이 많습니다. 

<div style="display: flex; gap: 5px; flex-wrap: wrap">
  <a href="https://let-d0-study.tistory.com">
    <img src="http://img.shields.io/badge/Tistory-%23FF5722?style=for-the-badge&logo=Tistory&logoColor=ffffff" alt="Tistory Badge" height="23px" />
  </a>
  <a href="https://www.linkedin.com/in/%EC%88%98%EC%97%B0-%EA%B9%80-12o21/">
    <img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="23px" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/resume-%23d197e8.svg?&style=for-the-badge" alt="Notion Badge" height="23px" />
  </a>
  <a href="mailto:kbsksy1221@naver.com"><img src="https://img.shields.io/badge/email-%23f2b3e5?style=flat-square&logo=gmail&logoColor=black" height="23px"></a>
  <a href="https://velog.io/@ksy1221">
    <img src="https://img.shields.io/badge/Velog-%2320C997?style=for-the-badge&logo=Velog&logoColor=ffffff" alt="Velog Badge" height="23px" />
  </a>
</div>

### ⚒️ 기술 스택

<div style="display: flex; gap: 8px; flex-wrap: wrap">
  <div><b>Frontend</b></div>
  <div>
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge" height="25px" />
    <img src="https://img.shields.io/badge/css-%23663399.svg?&style=for-the-badge&logo=css&logoColor=white" alt="CSS Badge" height="25px" />
    <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" height="25px" />
    <img src="https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" height="25px" />
    <img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" alt="React Badge" height="25px" />
    <img src="https://img.shields.io/badge/next.js-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" height="25px" />
    <img src="https://img.shields.io/badge/zustand-%23552277.svg?&style=for-the-badge&logo=zustand&logoColor=black" alt="zustand Badge" height="25px" />
    <img src="https://img.shields.io/badge/reactquery-%23FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white" alt="reactquery Badge" height="25px" />
    <img src="https://img.shields.io/badge/sass-%23CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white" alt="Sass Badge" height="25px" />
    <img src="https://img.shields.io/badge/tailwind-%2306B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS Badge" height="25px" />
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?&style=for-the-badge&logo=vite&logoColor=white" alt="vite Badge" height="25px" />
  </div>
</div>

<div style="display: flex; gap: 8px; flex-wrap: wrap">
  <div><b>Backend</b></div>
  <div>
    <img src="https://img.shields.io/badge/nodejs-%235FA04E.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs Badge" height="25px" />
    <img src="https://img.shields.io/badge/express-%23000000.svg?&style=for-the-badge&logo=express&logoColor=white" alt="express Badge" height="25px" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS Badge" height="25px" />
    <img src="https://img.shields.io/badge/typeorm-%23FE0803.svg?&style=for-the-badge&logo=typeorm&logoColor=white" alt="typeorm Badge" height="25px" />
    <img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" height="25px" />
    <img src="https://img.shields.io/badge/redis-%23DC382D.svg?&style=for-the-badge&logo=redis&logoColor=white" alt="Redis Badge" height="25px" />
    <img src="https://img.shields.io/badge/python-%233776AB.svg?&style=for-the-badge&logo=python&logoColor=white" alt="python Badge" height="25px" />
  </div>
</div>

<div style="display: flex; gap: 8px; flex-wrap: wrap">
  <div><b>Devops</b></div>
  <div>
    <img src="https://img.shields.io/badge/vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel Badge" height="25px" />
    <img src="https://img.shields.io/badge/githubactions-%232088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="Github Actions Badge" height="25px" />
    <img src="https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker Badge" height="25px" />
  </div>
</div>

<div style="display: flex; gap: 8px; flex-wrap: wrap">
  <div><b>Tools</b></div>
  <div>
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
- 👖 청년을 위한 통합 서비스 [청바지](https://github.com/ezen-benttod) (2025.05-진행중) | FE, BE
- 🐶 반려동물 돌봄 구인 서비스 [코촉촉](https://github.com/kimsudang/ko-chock-chock-backend) (2024.12-2025.01) | BE, 팀장
- ⚙️ 프로젝트 협업도구 올인원 플랫폼 [팀글벙글](https://github.com/kimsudang/passion-mansour-teambeam-frontend) (2024.04-2024.06) | FE

### 

<div>
  <img 
    height="135em" 
    src="https://github-readme-stats.vercel.app/api?username=kimsudang&hide=stars,&show=discussions_answered,$show_icons=true&bg_color=00000000&theme=buefy" 
    alt="kimsudang's GitHub stats" 
  />
  <img 
    height="135em" 
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=kimsudang&layout=compact&langs_count=6&theme=buefy" 
    alt="Top Langs" 
  />
</div>

### 📕 블로그

`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
  },
});

(async () => {
  // 피드 목록
  const feed = await parser.parseURL('https://let-d0-study.tistory.com/rss');

  text += `<ul>`;

  // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
  for (let i = 0; i < 5; i++) {
    const { title, link } = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
  }

  text += `</ul>`;

  // README.md 파일 생성
  writeFileSync('README.md', text, 'utf8', (e) => {
    console.log(e);
  });
  console.log('업데이트 완료');
})();
