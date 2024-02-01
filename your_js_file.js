// 어린왕자 이야기를 담을 div 태그를 생성합니다.
const storyDiv = document.createElement('div');
storyDiv.id = 'story';

// 어린왕자 이야기를 담을 p 태그를 생성합니다.
const storyP = document.createElement('p');
storyP.textContent = '어린왕자 이야기';

// 어린왕자 이야기를 담을 img 태그를 생성합니다.
const storyImg = document.createElement('img');
storyImg.src = 'https://i.imgur.com/7jQW8Jc.jpg';
storyImg.alt = '어린왕자';

// 생성한 태그들을 body 태그에 추가합니다.
document.body.appendChild(storyDiv);
storyDiv.appendChild(storyP);
storyDiv.appendChild(storyImg);
