let overlapState = false
let isLoginState = false

let userData = {
    id : 'nam',
    pw : '1234',
    nickName : '남현석',
    profileImg : './assets/user4.jpg'
}
let commentArr = [
    {
        idx:0,
        id : '유저1',
        nickName : '유저1',
        profileImg: './assets/user2.jpg',
        comment : '나이 제한은 이전과 동일하죠? 억울하게 코로나 때문에 1년을 버려서 올해 생일 전에 인비 받지 못하면 더 이상 기회가 없는데...',
        pop : 0,
        bad : 0,
        shared : 0,
        reply : 0
    },
    {
        idx : 1,
        id : '유저2',
        nickName : '유저2',
        profileImg: './assets/user3.jpg',
        comment : '좋은 소식이네요~~~ 그나저나 먼저 최합레터 못 받은 사람들한테나 먼저 최합레터나 빨리 보내줬으면 좋겠네요ㅠㅠ 신검도 2번씩이나 하고 애타게 1년 넘게 기다리고 있으니 답답해죽겠어요ㅠㅠㅠ흑 ㅜㅠ',
        pop : 0,
        bad : 0,
        shared : 0,
        reply : 0
    }
]
let commentData = []

const pops="pop"
const bad="bad"
const shared="shared"

document.addEventListener('DOMContentLoaded', ()=>{

    commentData.push({content: '<li>\n' +
            '              <div class="comment-img">\n' +
            '                <img src='+commentArr[0].profileImg+' alt="#" />\n' +
            '              </div>\n' +
            '              <div class="comment-main">\n' +
            '                <div class="comment-name"><h4>' + commentArr[0].nickName + '</h4></div>\n' +
            '                <div class="comment-story">\n' +
            commentArr[0].comment+
            '                </div>\n' +
            '                <div class="comment-emoticon">\n' +
            '                  <div>\n' +
            '                    <span aria-label="말풍선" onclick="">\n' +
            '                      <i class="fa fa-comment-o" aria-hidden="true">' + commentArr[0].reply + '</i>\n' +
            '                    </span>\n' +
            '                  </div>\n' +
            '                  <div>\n' +
            '                    <span aria-label="좋아요" onclick="">\n' +
            '                      <i class="fa fa-thumbs-o-up" onclick="addCounter(this,pops)" aria-hidden="true">' + commentArr[0].pop + '</i>\n' +
            '                    </span>\n' +
            '                    <span aria-label="싫어요" onclick="">\n' +
            '                      <i class="fa fa-thumbs-o-down" onclick="addCounter(this,bad)" aria-hidden="true">' + commentArr[0].bad + '</i>\n' +
            '                    </span>\n' +
            '                    <span aria-label="펌" onclick="">\n' +
            '                      <i class="fa fa-share" onclick="addCounter(this,shared)" aria-hidden="true">' + commentArr[0].shared + '</i>\n' +
            '                    </span>\n' +
            '                  </div>\n' +
            '                </div>\n' +
            '                <div class="checkLoginState"/>'+
            '              </div>\n' +
            '            </li>'})

    commentData.push({content: '<li>\n' +
            '              <div class="comment-img">\n' +
            '                <img src='+commentArr[1].profileImg+' alt="#" />\n' +
            '              </div>\n' +
            '              <div class="comment-main">\n' +
            '                <div class="comment-name"><h4>' + commentArr[1].nickName + '</h4></div>\n' +
            '                <div class="comment-story">\n' +
            commentArr[1].comment+
            '                </div>\n' +
            '                <div class="comment-emoticon">\n' +
            '                  <div>\n' +
            '                    <span aria-label="말풍선" onclick="">\n' +
            '                      <i class="fa fa-comment-o" aria-hidden="true">' + commentArr[1].reply + '</i>\n' +
            '                    </span>\n' +
            '                  </div>\n' +
            '                  <div>\n' +
            '                    <span aria-label="좋아요" onclick="">\n' +
            '                      <i class="fa fa-thumbs-o-up" onclick="addCounter(this,pops)" aria-hidden="true">' + commentArr[1].pop + '</i>\n' +
            '                    </span>\n' +
            '                    <span aria-label="싫어요" onclick="">\n' +
            '                      <i class="fa fa-thumbs-o-down" onclick="addCounter(this,bad)" aria-hidden="true">' + commentArr[1].bad + '</i>\n' +
            '                    </span>\n' +
            '                    <span aria-label="펌" onclick="">\n' +
            '                      <i class="fa fa-share" onclick="addCounter(this,shared)" aria-hidden="true">' + commentArr[1].shared + '</i>\n' +
            '                    </span>\n' +
            '                  </div>\n' +
            '                </div>\n' +
            '                <div class="checkLoginState"/>'+
            '              </div>\n' +
            '            </li>'})

    updateComment()
})

const updatePostCounter = (e) => {
    if(isLoginState){
        const counter = e.childNodes[0].textContent
        e.childNodes[0].textContent = parseInt(e.childNodes[0].textContent) + 1
    }
}

const focusComment = (e) => {
    const modal = document.querySelector('.modalBox')
    if(!isLoginState){
        document.querySelector('.loginBox').style.display = 'inline-block'
        modal.style.top = '0'
    }else{
        if(!overlapState){
            const commentInputArea = document.querySelector('.commentInputArea')
            const commentUserInfo = document.querySelector('.commentUserInfo')
            commentInputArea.style.display = 'inline-block'

            commentUserInfo.innerHTML = ''
            commentUserInfo.innerHTML += '<img src=' + userData.profileImg + ' alt=\'test\' width="20px"/>'
            commentUserInfo.innerHTML += userData.nickName
            document.querySelector('.commentInputArea textarea').focus()
            modal.style.top = '0'
            overlapState = true
            setTimeout(()=>{
                overlapState = false
            },30000)
        }else{
            alert('도배방지로 30초간 작성을 할 수 없습니다.')
            e.blur()
        }
    }
}

const checkLogin = (e) => {
    const userid = document.querySelector('.userId').value
    const userpw = document.querySelector('.userPw').value
    const showLoginState = document.querySelector('.showLoginState')
    const modal = document.querySelector('.modalBox')

    if(userid === userData.id){
        if(userpw === userData.pw){
            isLoginState = true
            modal.style.top = '300px'
            setTimeout(()=>{
                document.querySelector('.loginBox').style.display = 'none'
            },600)
        }else{
            showLoginState.textContent = '비밀번호를 다시 확인해 주세요.'
        }
    }else{
        showLoginState.textContent = '아이디를 다시 확인해 주세요.'
    }
}

const addCounter = (e, flag) => {
    if(isLoginState){
        const userSelect = e.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[0].textContent
        const userComment = e.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].textContent

        for (let i in commentArr){
            if(commentArr[i].nickName === userSelect && commentArr[i].comment === userComment.toString().substring(userComment.length-16,1)){
                if(flag === 'pop'){
                    commentArr[i].pop = parseInt(commentArr[i].pop) + 1
                }else if(flag === 'bad'){
                    commentArr[i].bad = parseInt(commentArr[i].bad) + 1
                }else if(flag === 'shared'){
                    commentArr[i].shared = parseInt(commentArr[i].shared) + 1
                }
                commentData[i].content = '<li>\n' +
                    '              <div class="comment-img">\n' +
                    '                <img src='+commentArr[i].profileImg+' alt="#" />\n' +
                    '              </div>\n' +
                    '              <div class="comment-main">\n' +
                    '                <div class="comment-name"><h4>' + commentArr[i].nickName + '</h4></div>\n' +
                    '                <div class="comment-story">\n' +
                    commentArr[i].comment+
                    '                </div>\n' +
                    '                <div class="comment-emoticon">\n' +
                    '                  <div>\n' +
                    '                    <span aria-label="말풍선" onclick="">\n' +
                    '                      <i class="fa fa-comment-o" aria-hidden="true">' + commentArr[i].reply + '</i>\n' +
                    '                    </span>\n' +
                    '                  </div>\n' +
                    '                  <div>\n' +
                    '                    <span aria-label="좋아요" onclick="">\n' +
                    '                      <i class="fa fa-thumbs-o-up" onclick="addCounter(this,pops)" aria-hidden="true">' + commentArr[i].pop + '</i>\n' +
                    '                    </span>\n' +
                    '                    <span aria-label="싫어요" onclick="">\n' +
                    '                      <i class="fa fa-thumbs-o-down" onclick="addCounter(this,bad)" aria-hidden="true">' + commentArr[i].bad + '</i>\n' +
                    '                    </span>\n' +
                    '                    <span aria-label="펌" onclick="">\n' +
                    '                      <i class="fa fa-share" onclick="addCounter(this,shared)" aria-hidden="true">' + commentArr[i].shared + '</i>\n' +
                    '                    </span>\n' +
                    '                  </div>\n' +
                    '                </div>\n' +
                    '                <div class="checkLoginState"/>'+
                    '              </div>\n' +
                    '            </li>'
            }
        }

        updateComment()
    }
}

const submitComment = () => {
    const modal = document.querySelector('.modalBox')
    modal.style.top = '300px'
    setTimeout(()=>{
        document.querySelector('.loginBox').style.display = 'none'
        document.querySelector('.commentInputArea textarea').value = ''
    },600)

    commentArr.push({
        idx: commentArr.length,
        id : userData.id,
        nickName : userData.nickName,
        profileImg: userData.profileImg,
        comment : document.querySelector('.commentInputArea textarea').value,
        pop : 0,
        bad : 0,
        shared : 0,
        reply : 0
    })
    addComment()
}

const addComment = () => {
    commentData.push({content: '<li>\n' +
            '              <div class="comment-img">\n' +
            '                <img src='+commentArr[commentArr.length - 1].profileImg+' alt="#" />\n' +
            '              </div>\n' +
            '              <div class="comment-main">\n' +
            '                <div class="comment-name"><h4>' + commentArr[commentArr.length - 1].nickName + '</h4></div>\n' +
            '                <div class="comment-story">\n' +
            commentArr[commentArr.length - 1].comment+
            '                </div>\n' +
            '                <div class="comment-emoticon">\n' +
            '                  <div>\n' +
            '                    <span aria-label="말풍선" onclick="">\n' +
            '                      <i class="fa fa-comment-o" aria-hidden="true">' + commentArr[commentArr.length - 1].reply + '</i>\n' +
            '                    </span>\n' +
            '                  </div>\n' +
            '                  <div>\n' +
            '                    <span aria-label="좋아요" onclick="">\n' +
            '                      <i class="fa fa-thumbs-o-up" onclick="addCounter(this, pops)" aria-hidden="true">' + commentArr[commentArr.length - 1].pop + '</i>\n' +
            '                    </span>\n' +
            '                    <span aria-label="싫어요" onclick="">\n' +
            '                      <i class="fa fa-thumbs-o-down" onclick="addCounter(this, bad)" aria-hidden="true">' + commentArr[commentArr.length - 1].bad + '</i>\n' +
            '                    </span>\n' +
            '                    <span aria-label="펌" onclick="">\n' +
            '                      <i class="fa fa-share" onclick="addCounter(this, shared)" aria-hidden="true">' + commentArr[commentArr.length - 1].shared + '</i>\n' +
            '                    </span>\n' +
            '                  </div>\n' +
            '                </div>\n' +
            '                <div class="checkLoginState"/>'+
            '              </div>\n' +
            '            </li>'})
    updateComment('add')

}
// <div class="deleteComment" onclick="deleteComment(this)">' + 'delete' + '</div>'
const deleteComment = (e) => {
    const text = e.parentNode.childNodes[3].childNodes[3].textContent
    for(let i in commentArr){
        if(commentArr[i].comment === text.substring(text.length-16, 1)){
            commentArr.splice(i,1)
            commentData.splice(i,1)
        }
    }
    updateComment('del')
}

const updateComment = (state) => {
    let commentMain = document.querySelector('.commentMainBox')
     
    let mainCommentCounter = document.querySelector('.commentCounter i').textContent
    if(state === 'add') document.querySelector('.commentCounter i').textContent = parseInt(mainCommentCounter) + 1
    else if(state === 'del') document.querySelector('.commentCounter i').textContent = parseInt(mainCommentCounter) - 1


    commentMain.innerHTML = ''
    commentData.map((docs , key) => {
        commentMain.innerHTML += docs.content
        if(document.querySelectorAll('.commentMainBox li')[key].childNodes[3].childNodes[1].childNodes[0].textContent === userData.nickName){
            document.querySelectorAll('.commentMainBox li')[key].innerHTML += '<div class="deleteComment" onclick="deleteComment(this)"><i class="fa fa-trash-o" aria-hidden="true"></i></div>'
        }
    })

}

