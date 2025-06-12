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
<img src="https://img.shields.io/badge/antdesign-%230170FE.svg?style=for-the-badge&logo=antdesign&logoColor=white" alt="antdesign Badge" height="23" />
<img src="https://img.shields.io/badge/storybook-%23FF4785.svg?&style=for-the-badge&logo=storybook&logoColor=white" alt="storybook Badge" height="23" />
<img src="https://img.shields.io/badge/chartdotjs-%23FF6384.svg?&style=for-the-badge&logo=chartdotjs&logoColor=white" alt="chartdotjs Badge" height="23" />
<img src="https://img.shields.io/badge/three.js-%23000000.svg?&style=for-the-badge&logo=three.js&logoColor=white" alt="threedotjs Badge" height="23" />
<img src="https://img.shields.io/badge/zod-%233E67B1.svg?&style=for-the-badge&logo=zod&logoColor=white" alt="zod Badge" height="23" />
<img src="https://img.shields.io/badge/swagger-%2385EA2D.svg?&style=for-the-badge&logo=swagger&logoColor=white" alt="swagger Badge" height="23" />
<img src="https://img.shields.io/badge/socket.io-%23010101.svg?&style=for-the-badge&logo=socket.io&logoColor=white" alt="socketdotio Badge" height="23" />
<img src="https://img.shields.io/badge/prettier-%23F7B93E.svg?&style=for-the-badge&logo=prettier&logoColor=white" alt="prettier Badge" height="23" />
<img src="https://img.shields.io/badge/npm-%23CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white" alt="npm Badge" height="23" />
<img src="https://img.shields.io/badge/dbeaver-%23382923.svg?&style=for-the-badge&logo=dbeaver&logoColor=white" alt="dbeaver Badge" height="23" />
<img src="https://img.shields.io/badge/graphql-%23E10098.svg?&style=for-the-badge&logo=graphql&logoColor=white" alt="graphql Badge" height="23" />
<img src="https://img.shields.io/badge/vercel-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white" alt="vercel Badge" height="23" />
<img src="https://img.shields.io/badge/reactrouter-%23CA4245.svg?&style=for-the-badge&logo=reactrouter&logoColor=white" alt="reactrouter Badge" height="23" />
<img src="https://img.shields.io/badge/passport-%2334E27A.svg?&style=for-the-badge&logo=passport&logoColor=white" alt="passport Badge" height="23" />
<img src="https://img.shields.io/badge/tsnode-%233178C6.svg?&style=for-the-badge&logo=tsnode&logoColor=white" alt="tsnode Badge" height="23" />
<img src="https://img.shields.io/badge/postcss-%23DD3A0A.svg?&style=for-the-badge&logo=postcss&logoColor=white" alt="postcss Badge" height="23" />
<img src="https://img.shields.io/badge/axios-%235A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white" alt="axios Badge" height="23" />
<img src="https://img.shields.io/badge/blender-%23E87D0D.svg?&style=for-the-badge&logo=blender&logoColor=white" alt="blender Badge" height="23" />
<img src="https://img.shields.io/badge/jira-%230052CC.svg?&style=for-the-badge&logo=jira&logoColor=white" alt="jira Badge" height="23" />
<img src="https://img.shields.io/badge/nginx-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white" alt="nginx Badge" height="23" />
<img src="https://img.shields.io/badge/json-%23000000.svg?&style=for-the-badge&logo=json&logoColor=white" alt="json Badge" height="23" />
<img src="https://img.shields.io/badge/mui-%23007FFF.svg?&style=for-the-badge&logo=mui&logoColor=white" alt="mui Badge" height="23" />
<img src="https://img.shields.io/badge/vite-%23646CFF.svg?&style=for-the-badge&logo=vite&logoColor=white" alt="vite Badge" height="23" />
<img src="https://img.shields.io/badge/amazonwebservices-%23232F3E.svg?&style=for-the-badge&logo=amazonwebservices&logoColor=white" alt="amazonwebservices Badge" height="23" />
<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?&style=for-the-badge&logo=yarn&logoColor=white" alt="yarn Badge" height="23" />
<img src="https://img.shields.io/badge/typeorm-%23FE0803.svg?&style=for-the-badge&logo=typeorm&logoColor=white" alt="typeorm Badge" height="23" />
<img src="https://img.shields.io/badge/postman-%23FF6C37.svg?&style=for-the-badge&logo=postman&logoColor=white" alt="postman Badge" height="23" />
<img src="https://img.shields.io/badge/reacthookform-%23EC5990.svg?&style=for-the-badge&logo=reacthookform&logoColor=white" alt="reacthookform Badge" height="23" />
<img src="https://img.shields.io/badge/supabase-%233FCF8E.svg?&style=for-the-badge&logo=supabase&logoColor=white" alt="supabase Badge" height="23" />
<img src="https://img.shields.io/badge/netlify-%2300C7B7.svg?&style=for-the-badge&logo=netlify&logoColor=white" alt="netlify Badge" height="23" />

GitAnimals
[![GitAnimals Line](https://render.gitanimals.org/lines/kimsudang?pet-id=680331197222501202)](https://www.gitanimals.org/en_US?utm_medium=image&utm_source=kimsudang&utm_content=line)

*/

let text = `### 🦦 안녕하세요

안녕하세요 동그란 개발자 김수연입니다. <br/>
**자동화**와 **문서화**로 팀원들과의 원활한 협업 과정을 즐기는 개발자 김수연입니다. ☺️

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


### ⚒️ 기술 스택

<div style="display: flex; gap: 5px; flex-wrap: wrap">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge" height="23" />
  <img src="https://img.shields.io/badge/css-%23663399.svg?&style=for-the-badge&logo=css&logoColor=white" alt="CSS Badge" height="23" />
  <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" height="23" />
  <img src="https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" height="23" />
  <img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" alt="React Badge" height="23" />
  <img src="https://img.shields.io/badge/next.js-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" height="23" />
</div>

<div style="display: flex; gap: 5px; flex-wrap: wrap">
  <img src="https://img.shields.io/badge/zustand-%23552277.svg?&style=for-the-badge&logo=zustand&logoColor=black" alt="zustand Badge" height="23" />
  <img src="https://img.shields.io/badge/reactquery-%23FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white" alt="reactquery Badge" height="23" />
  <img src="https://img.shields.io/badge/sass-CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white" alt="Sass Badge" height="23" />
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS Badge" height="23" />
</div>

<div style="display: flex; gap: 5px; flex-wrap: wrap">
  <img src="https://img.shields.io/badge/node.js-%235FA04E.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs Badge" height="23" />
  <img src="https://img.shields.io/badge/express-%23000000.svg?&style=for-the-badge&logo=express&logoColor=white" alt="express Badge" height="23" />
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS Badge" height="23" />
  <img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" height="23" />
  <img src="https://img.shields.io/badge/redis-%23DC382D.svg?&style=for-the-badge&logo=redis&logoColor=white" alt="Redis Badge" height="23" />
  <img src="https://img.shields.io/badge/python-%233776AB.svg?&style=for-the-badge&logo=python&logoColor=white" alt="python Badge" height="23" />
</div>

<div style="display: flex; gap: 5px; flex-wrap: wrap">
  <img src="https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker Badge" height="23" />
  <img src="https://img.shields.io/badge/amazonec2-%23FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" alt="Amazon EC2 Badge" height="23" />
  <img src="https://img.shields.io/badge/amazons3-%23569A31?style=for-the-badge&logo=amazons3&logoColor=white" alt="Amazon S3 Badge" height="23" />
  <img src="https://img.shields.io/badge/githubactions-%232088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="Github Actions Badge" height="23" />
</div>

<div style="display: flex; gap: 5px; flex-wrap: wrap">
  <img src="https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" height="23" />
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white" alt="VS Code Badge" height="23" />
  <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white" alt="figma Badge" height="23" />
  <img src="https://img.shields.io/badge/slack-%234A154B.svg?&style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge" height="23" />
  <img src="https://img.shields.io/badge/notion-%23000000.svg?&style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" height="23" />
  <img src="https://img.shields.io/badge/discord-%235865F2.svg?&style=for-the-badge&logo=discord&logoColor=white" alt="discord Badge" height="23" />
</div>

### 🎮 프로젝트
- 📊 취업지원 종합관리 플랫폼 [stepfolio](https://github.com/kimsudang/stepfolio) (2025.05-진행중) | FE, BE
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
