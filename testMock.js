const Mock = require('mockjs')
const data = Mock.mock({
    
    "list|5": {
        "id|+1": 1,
        name: "@cname()"
    }
})
console.log(data)