import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */

/* 
About Me 추가 내용
<!-- [![readme Badge](https://img.shields.io/badge/RESUME-%23018EF5.svg?&style=for-the-badge&logo=readme&logoColor=white)](https://drive.google.com/file/d/1dMLvngwTy9ysGWxcdM1pEUXRKeY7DnhF/view?usp=sharing) -->
<!-- [![Notion Badge](https://img.shields.io/badge/notion-%23000000.svg?&style=for-the-badge&logo=notion&logoColor=white)](#) -->

다른 아이콘들
<img src="https://img.shields.io/badge/notion-%23000000.svg?&style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" height="23" />
<img src="https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" height="23" />
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge" height="23" />

GitAnimals
[![GitAnimals Line](https://render.gitanimals.org/lines/kimsudang?pet-id=680331197222501202)](https://www.gitanimals.org/en_US?utm_medium=image&utm_source=kimsudang&utm_content=line)

### 🎮 진행한 프로젝트


### 📖 교육 및 특이사항


*/

let text = `### 🦦 안녕하세요

자동화와 문서화로 팀원들과의 원활한 협업 과정을 즐기는 개발자 김수연입니다. ☺️ <br>
프론트엔드에 강점이 있는 JS기반 풀스택 개발자입니다.

<a href="https://let-d0-study.tistory.com">
  <img src="http://img.shields.io/badge/Tistory-%23FF5722?style=for-the-badge&logo=Tistory&logoColor=ffffff" alt="Tistory Badge" height="23" />
</a>
<a href="https://velog.io/@ksy1221">
  <img src="https://img.shields.io/badge/Velog-%2320C997?style=for-the-badge&logo=Velog&logoColor=ffffff" alt="Velog Badge" height="23" />
</a>
<a href="https://www.linkedin.com/in/%EC%88%98%EC%97%B0-%EA%B9%80-12o21/">
  <img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="23" />
</a>
<a href="https://github.com/kimsudang">
  <img src="https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" height="23" />
</a>

### ⚒️ 사용한 기술 스택
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge" height="23" />
<img src="https://img.shields.io/badge/css-%23663399.svg?&style=for-the-badge&logo=css&logoColor=white" alt="CSS Badge" height="23" />
<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" height="23" />
<img src="https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" height="23" />
<img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" alt="React Badge" height="23" />
<img src="https://img.shields.io/badge/next.js-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" height="23" />
<br />

<img src="https://img.shields.io/badge/zustand-%23663388.svg?&style=for-the-badge&logo=zustand&logoColor=black" alt="zustand Badge" height="23" />
<img src="https://img.shields.io/badge/reactquery-%23FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white" alt="reactquery Badge" height="23" />
<img src="https://img.shields.io/badge/sass-CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white" alt="Sass Badge" height="23" />
<img src="https://img.shields.io/badge/tailwindcss-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS Badge" height="23" />
<br />

<img src="https://img.shields.io/badge/node.js-%235FA04E.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs Badge" height="23" />
<img src="https://img.shields.io/badge/express-%23000000.svg?&style=for-the-badge&logo=express&logoColor=white" alt="express Badge" height="23" />
<img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS Badge" height="23" />
<img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" height="23" />
<img src="https://img.shields.io/badge/redis-%23DC382D.svg?&style=for-the-badge&logo=redis&logoColor=white" alt="Redis Badge" height="23" />
<br />

<img src="https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker Badge" height="23" />
<img src="https://img.shields.io/badge/amazonec2-%23FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" alt="Amazon EC2 Badge" height="23" />
<img src="https://img.shields.io/badge/amazons3-%23569A31?style=for-the-badge&logo=amazons3&logoColor=white" alt="Amazon S3 Badge" height="23" />
<img src="https://img.shields.io/badge/githubactions-%232088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="Github Actions Badge" height="23" />
<br />

<img src="https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" height="23" />
<img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white" alt="VS Code Badge" height="23" />
<img src="https://img.shields.io/badge/slack-%234A154B.svg?&style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge" height="23" />
<img src="https://img.shields.io/badge/notion-%23000000.svg?&style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" height="23" />
<img src="https://img.shields.io/badge/discord-%235865F2.svg?&style=for-the-badge&logo=discord&logoColor=white" alt="discord Badge" height="23" />

<div align="center">
  <img 
    height="150em" 
    src="https://github-readme-stats.vercel.app/api?username=kimsudang&hide=stars,&show=discussions_answered,$show_icons=true&bg_color=00000000&theme=buefy" 
    alt="kimsudang's GitHub stats" 
  />
  <img 
    height="150em" 
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=kimsudang&layout=compact&langs_count=6&theme=buefy" 
    alt="Top Langs" 
  />
</div>



### 📕 최근 작성한 블로그

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
