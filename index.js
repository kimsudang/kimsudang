import { writeFileSync } from "node:fs";
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */

/* 
About Me 추가 내용
<!-- [![readme Badge](https://img.shields.io/badge/RESUME-%23018EF5.svg?&style=for-the-badge&logo=readme&logoColor=white)](https://drive.google.com/file/d/1dMLvngwTy9ysGWxcdM1pEUXRKeY7DnhF/view?usp=sharing) -->
<!-- [![Notion Badge](https://img.shields.io/badge/notion-%23000000.svg?&style=for-the-badge&logo=notion&logoColor=white)](#) -->
*/

let text = `## 🦦 About Me

안녕하세요. 성장하는 과정이 즐거운 프론트엔드 개발자 김수연입니다.

[![GitAnimals Line](https://render.gitanimals.org/lines/kimsudang?pet-id=680331197222501202)](https://www.gitanimals.org/en_US?utm_medium=image&utm_source=kimsudang&utm_content=line)

[![Tistory Badge](http://img.shields.io/badge/Tistory-FF5722?style=for-the-badge&logo=Tistory&logoColor=ffffff)](https://let-d0-study.tistory.com)
[![Velog Badge](https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=ffffff)](https://velog.io/@ksy1221)
[![LinkedIn Badge](https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/%EC%88%98%EC%97%B0-%EA%B9%80-12o21/)
[![GitHub Badge](https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/kimsudang)

## ⚒️ Tech Stack

### 🌐 Front-end
![JavaScript Badge](https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript Badge](https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white)
![React Badge](https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black)
![Next.js Badge](https://img.shields.io/badge/next.js-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white)
![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white)
![sass](https://img.shields.io/badge/sass-CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white)


### ⚙️ Back-end
![NestJS Badge](https://img.shields.io/badge/nestjs-%23E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white)
![MySQL Badge](https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white)
![Redis Badge](https://img.shields.io/badge/redis-%23DC382D.svg?&style=for-the-badge&logo=redis&logoColor=white)


### 🛠️ Tools
![Git Badge](https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white)
![GitHub Badge](https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Slack Badge](https://img.shields.io/badge/slack-%234A154B.svg?&style=for-the-badge&logo=slack&logoColor=white)
![Notion Badge](https://img.shields.io/badge/notion-%23000000.svg?&style=for-the-badge&logo=notion&logoColor=white)


## 💻 Stats

<div align="center">
  <img 
    height="165em" 
    src="https://github-readme-stats.vercel.app/api?username=kimsudang&hide=stars,&show=discussions_answered,$show_icons=true&bg_color=00000000&theme=buefy" 
    alt="kimsudang's GitHub stats" 
  />
  <img 
    height="165em" 
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=kimsudang&layout=compact&langs_count=6&theme=buefy" 
    alt="Top Langs" 
  />
</div>


## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

(async () => {
  // 피드 목록
  const feed = await parser.parseURL("https://let-d0-study.tistory.com/rss"); // 본인의 블로그 주소

  text += `<ul>`;

  // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
  for (let i = 0; i < 10; i++) {
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
