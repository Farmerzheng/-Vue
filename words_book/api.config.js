 // 自己写个后端转发该请求，用代理的方式实现。
 const url = "http://app.sencha.com.cn/soya/apps/testdb/server/";

 const showData = {
   perPage: 10,
   page: 1,
   action: "wordList.list"
 }

 const addData = {
   action: "wordList.insert",
   word: "",
   pronounce: "",
   description: "",
   wordtype: ""

 }

 const updateData = {
   action: "wordList.update",
   id: 0,
   word: "",
   pronounce: "",
   description: "",
   wordtype: ""
 }
 const deleteData = {
   action: "wordList.delete",
   id: 0
 }