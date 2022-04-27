const errorResponse = {
  version: "2.0",
  template: {
    outputs: [
      {
        simpleText: {
          text: "오류가 발생했습니다.\n잠시후 다시 시도해주세요.",
        },
      },
    ],
    quickReplies: [
      {
        messageText: "홈 으로",
        action: "message",
        label: "홈",
      },
      {
        messageText: "뒤로 가기",
        action: "message",
        label: "↩",
      },
    ],
  },
};

const successResponse = {
  version: "2.0",
  template: {
    outputs: [
      {
        carousel: {
          type: "basicCard",
          items: [
            {
              title: "보물상자",
              description: "보물상자 안에는 뭐가 있을까",
              thumbnail: {
                imageUrl:
                  "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
              },
              buttons: [
                {
                  action: "message",
                  label: "열어보기",
                  messageText: "짜잔! 우리가 찾던 보물입니다",
                },
                {
                  action: "webLink",
                  label: "구경하기",
                  webLinkUrl: "https://e.kakao.com/t/hello-ryan",
                },
              ],
            },
            {
              title: "보물상자2",
              description: "보물상자2 안에는 뭐가 있을까",
              thumbnail: {
                imageUrl:
                  "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
              },
              buttons: [
                {
                  action: "message",
                  label: "열어보기",
                  messageText: "짜잔! 우리가 찾던 보물입니다",
                },
                {
                  action: "webLink",
                  label: "구경하기",
                  webLinkUrl: "https://e.kakao.com/t/hello-ryan",
                },
              ],
            },
            {
              title: "보물상자3",
              description: "보물상자3 안에는 뭐가 있을까",
              thumbnail: {
                imageUrl:
                  "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
              },
              buttons: [
                {
                  action: "message",
                  label: "열어보기",
                  messageText: "짜잔! 우리가 찾던 보물입니다",
                },
                {
                  action: "webLink",
                  label: "구경하기",
                  webLinkUrl: "https://e.kakao.com/t/hello-ryan",
                },
              ],
            },
          ],
        },
      },
    ],
    quickReplies: [],
  },
};

module.exports = {
  errorResponse,
  successResponse,
};