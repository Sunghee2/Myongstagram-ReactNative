# myongstagram

### 개발 범위:

- 클라이언트: React Native
- 서버: Node.JS + Express + Postgres or MySQL

### 기본 기능:

- post: 글 혹은 사진을 작성
- 글목록
- 검색
- 프로필
- React Navigation을 활용한 UI
- Instagram과 유사하게 UI를 만들기

### 추가 기능:

- 사진 업로드
- 사용자 인증(토큰기반)
- 딥링크를 통한 Share
- Push Notification

### 과제 제출:

- 발표: 6월 12일 / 14일
- 발표 자료 제출: Tahiti 사이트에 업로드 (6월 11일까지) - 파일 사이즈가 너무 클 경우 조교에게 이메일 제출
- github 주소는 조교에게 이메일로 제공하세요.
- 이메일로 보내는 경우에도 간단한 요약 파일을 홈페이지에 업로드 하시오. (과제 채점용)

### 평가

- 사이트 완성도 30점, 발표 30점, 보고서(발표 자료) 10점, 소스 코드 10점
- 기본 구현 사항 외에 추가 구현 내용에 따라 추가 20점 부여 - 추가 내용은 보고서 및 발표에서 잘 제시하세요.


##### 18-05-25
 - [x] 5개 Screen(Feed, Search, AddPhoto, Notification, Profile) 추가
 - [x] BottomTab 추가
 - [x] Tab icon 적용
 - [x] Feed, Profile header 추가

> header가 stack 거쳐야 나옴.. 왜지?
> 마지막도 꼭 , 적어줘야 함.
> 로고가 묘하게 삐뚤어짐


##### 18-05-27
 - [x] LoginScreen 추가
 - [x] Login button click => FeedScreen 이동
 - [x] screens 폴더 생성 => Screen들 이동

 > 폴더를 나눠야 할 것 같은데 어떻게 나눠야할지 모르겠음ㅠㅠ -> 스택들 다 하나하나 naigation에 넣어야 하는 건가
 > ....stack들 tabnavigation에 다 합치려고 했더니 header사라짐.......
 > ** Failed prop type: Invalid props.style key `marginRigth` supplied to `Text`. ** : 뭘까.. -> 오타난 것이였음...

##### 18-05-31

- [ ] psql 환경변수 설정 -> 변수는 설정되었는데 인증을 못함..... pg_hba
- [x] toptab ~ing
- [x] search inputText

> ios-timer-outline
>
> 아이콘들 그냥 row하면 안됨-> view에 넣어야.
>
> 중앙에 탭 못만드나 ㅠㅠ => tab을 중첩시키면 될 듯
>
> 사진 resize가 제대로 안됨..

##### 18-06-02 

- [x] 상단바 padding
- [x] card layout 완성~
- [x] folder 정리
- [x] header title 정렬 이상한 것 고침
- [x] profile 중첩 tab icon
- [x] login : signin 추가
- [x] signscreen 추가
- [ ] id -> password page id넘기기
- [ ] camera roll 하다가 중단

> 상단바 padding  `style={{ paddingTop: Expo.Constants.statusBarHeight }}`
>
> 중앙에 두려면 그 상위 view에다가 적용하기.
>
> 여전히 resizeMode안먹음..- > width 100% 설정
>
> resize는 되었는데 이제 남는 부분이 문제...
>
> 중첩 tab할 때 screen 껴 넣는 문제 => stack 두 개로 나눠서 header로
>
> headerTitle은 header와 다르게 top에 margin생김..
>
> cannot add a chile that doesn't have a yoganode to a parent without a -> 오탈자
>
> Invalid Client..............



##### 18-06-03

- [x] props 넘기기.....
- [x] 갤러리 드디어 접근...
- [x] 사진 크롭
- [x] stylesheet 정리!

> state가 안바뀜(email 가입시) -> state는 바뀌는데 안넘어감.....  -> this.state를 this.props라고 pass함.. 삽질..
>
> permission-> app.json에서 
>
> 원래 header stack 가야 나왔었는데... 갑자기 혼자 길어지더니 이제 ㄴ됨... 고쳐야 겠다.

##### 18-06-04

- [x] header 수정
- [x] stack 정리

> stack 없애면 header가 안나옴.... 
>
> header, headerTitle(이건 top margin 생김...)



`$ sequelize db:migrate`

- 테이블 생성됨

`$ sequelize db:migrate:undo`

- 테이블 생성 취소 - 계속해볼것.

table 만들때 띄어쓰기 절대 x

post - userId: integer, image: string, context: string