
import Mock from 'mockjs';
const Random = Mock.Random;
Mock.setup({
    timeout:1500
})
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let id =  i;
        let title = Random.cword(50);
        let choice = ["A","B","C","D"];
        let choices = [Random.cword(3),Random.cword(3),Random.cword(3),Random.cword(3)];
        let answer = Random.cword( Math.floor(Math.random() * (2000  + 100)));
        let select = Math.floor(Math.random() * (choice.length  + 1) ) 
        let type = 1;
        articles.push({
            id,
            title,
            choice,
            choices,
            answer,
            select,
            type
        })
    }

    // title: "在<span style='color:red'>实习期</span>内驾驶机动车的,应当在车身后贴上什么标志",
    // choice: ["A", "B", "C", "D"],
    // choices: [
    //   "注意新手标志",
    //   "注意避让标注",
    //   "统一式样的实验标志",
    //   "注意车距标志"
    // ],
    // answer: "《道路交通安全法》第一百零一条：违反道路驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。《道路交通安全法》第一百零一条：违反道路驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。《道路交通安全法》第一百零一条：违反道路驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。《道路交通安全法》第一百零一条：违反道路驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。《道路交通安全法》第一百零一条：违反道路驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。《道路交通安全法》第一百零一条：违反道路驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故构成犯罪的驾驶造成重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。",
    // img: [{
    //   msrc: [require("../image/logo.png")],
    //   src: [require("../image/logo.png")],
    //   w: 800,
    //   h: 400
    // }],
    // select: "2",
    // type:1
 
    return {
        articles: articles
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/getMockData', 'get', produceNewsData);