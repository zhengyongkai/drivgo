
import Mock from 'mockjs';
const Random = Mock.Random;
Mock.setup({
    timeout:200
})
const produceNewsData = function(ids) {
    let articles = [];
    for (let i = 0; i < 1; i++) {
        let id =  ids;
        let title = Random.cword(50);
        let choice = ["A","B","C","D"];
        let choices = [Random.cword(3),Random.cword(3),Random.cword(3),Random.cword(3)];
        let answer = Random.cword( Math.floor(Math.random() * (2000  + 100)));
        let select = Math.floor(Math.random() * (choice.length  ) ) 
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


 
    return {
        articles: articles,
        total:1000
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/getMockData', 'get', (res)=>{
    console.log()
    return Mock.mock(produceNewsData(JSON.parse(res.body).id))
});