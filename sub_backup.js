import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */

let text = `### 🦦 안녕하세요

안녕하세요 **동그란** 개발자 김수연입니다. 🍑 <br>
**자동화**와 **문서화**에 관심이 많습니다. 

<a href="https://let-d0-study.tistory.com">
  <img src="http://img.shields.io/badge/Tistory-%23FF5722?style=for-the-badge&logo=Tistory&logoColor=ffffff" alt="Tistory Badge" height="23" />
</a>
<a href="https://velog.io/@ksy1221">
  <img src="https://img.shields.io/badge/Velog-%2320C997?style=for-the-badge&logo=Velog&logoColor=ffffff" alt="Velog Badge" height="23" />
</a>
<a href="https://www.linkedin.com/in/%EC%88%98%EC%97%B0-%EA%B9%80-12o21/">
  <img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="23" />
</a>
<a href="#">
  <img src="https://img.shields.io/badge/resume-%23043020.svg?&style=for-the-badge" alt="Notion Badge" height="23" />
</a>



### ⚒️ 기술 스택
<p>
  
  **Frontend**
  <br>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,vite,sass,tailwind" height="35" />
  </a>

  **backend**
  <br>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,nestjs,mysql" height="35" />
  </a>

  **Devops**
  <br>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=aws,docker,githubactions,netlify,vercel" height="35" />
  </a>

  **Tools**
  <br>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,github,vscode,discord,notion,figma" height="35" />
  </a>

</p>

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
