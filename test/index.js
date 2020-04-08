const { fetchBySelector, fetchFile, fetchByReg } = require('../libs');
const { emailReg } = require('../libs/regs')

fetchBySelector('http://www.jxufe.edu.cn/',
    {
        selector: 'a',
        attr: 'href',
        // handler({ value }) {
        //     console.log(value);
        //     return value;
        // },
        process({matchs}){
            console.log(matchs)
            return Promise.resolve(matchs);
        }
    }
).then(({ data }) => console.log('result:', data))

fetchFile('http://47.94.197.151:8080/imgs/26e422fbc06e48b29d3e9c71b45fc0d5.jpg').then(console.log);
fetchByReg('http://www.jxufe.edu.cn/', emailReg).then(console.log);
