define([], function () {
  "use strict";
  var singleton = function () {
    return {
      // getQuestions: async function (checkListType,answerSessionId,workEntity,staffId) {
      //   let path = `api/auth/v1/checkList/${checkListType}?answerSessionId=${answerSessionId}`;
      //   if(workEntity){
      //     path += `&workEntity=${workEntity}&staffId=${staffId}`
      //   }
      //   const response = await fetch(path);
      //   const result = await response.json();
      //   return result;
      // },
      // fetchReplyQueryList: async function (checkListItem,answerSessionId) {
      //   const path = `api/auth/v1/checkList/fetchReplyQuery/${checkListItem}?answerSessionId=${answerSessionId}`;
      //   const response = await fetch(path);
      //   const result = await response.json();
      //   return result;
      // },
      // save: async function (checkListType, answerSessionId ,  body) {
      //   const path = `api/auth/v1/checkList/${checkListType}?answerSessionId=${answerSessionId}`;
      //   const resp = await fetch(path, {
      //     method: "post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(body),
      //   });
      //   if (!resp.ok) {
      //     const err = await resp.text()
      //     throw Error(err);
      //   }
      // },
    };
  };
  return singleton();
});
