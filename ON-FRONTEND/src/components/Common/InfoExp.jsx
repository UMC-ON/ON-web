//익명일 경우 글쓴이/익명으로 표시, 아닐 경우 닉네임 표시
//판별하려는 객체와 post 작성자 id 넘겨주어야함.
export const showWriter = (comment = null, postWriter_id = '') => {
  if (comment && comment.is_anonymous) {
    return comment.writerInfo.userId === postWriter_id ? '글쓴이' : '익명';
  } else {
    return comment.writerInfo.nickname;
  }
};

//파견교 정보: 비공개 vs 공개(미정vs확정)
export const showDispatchedUniv = (writerInfo, is_anonymous = false) => {
  if (is_anonymous) {
    return '파견교 비공개';
  } else {
    if (writerInfo.userState === 'ACTIVE' || writerInfo.userState === 'ADMIN') {
      return `${writerInfo.country} ${writerInfo.dispatchedUniversity}`;
    } else {
      return '파견 미정';
    }
  }
};

export const showDate = (postDate) => {
  //string형태로 전달
  const createdDate = new Date(postDate);
  const today = new Date();
  const time = today.getTime() - createdDate.getTime();
  const oneHour = 3600000; //1hour in ms
  const min = parseInt(time / 1000 / 60);
  if (today.getFullYear() - createdDate.getFullYear() > 0) {
    //올해 이 전에 작성된 글 : YY/MM/DD
    const yy = ('' + createdDate.getFullYear()).slice(-2);
    const mm = ('0' + (createdDate.getMonth() + 1)).slice(-2);
    const dd = ('0' + createdDate.getDate()).slice(-2);
    return `${yy}/${mm}/${dd}`;
  } else if (
    today.getMonth() - createdDate.getMonth() > 0 ||
    today.getDate() - createdDate.getDate() > 0
    //현재 시간으로부터 24시간이 아닌 12시를 기준으로 어제 글, 오늘 글을 나눔
  ) {
    //오늘 이전에 작성된 글: MM/DD
    return `${createdDate.getMonth() + 1}/${createdDate.getDate()}`;
  } else if (time > oneHour) {
    //작성한지 한시간이 지난 글일 경우 "21:45"
    const hours = ('0' + createdDate.getHours()).slice(-2);
    const minutes = ('0' + createdDate.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  } else if (min < 1) {
    //1분이 지나지 않은 글
    return '지금';
  } else if (time < oneHour) {
    //1시간 이내에 작성된 글일 경우: n분 전

    return `${min}분 전`;
  }
};
