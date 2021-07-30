
async function tiwen() {
    const axios = require('axios');
    const http = axios.create({
        withCredentials: true,
        timeout: 20 * 1000, // 请求超时时间
        headers: {
            'Cookie': 'default=EF4DAD4477A58535F322E7161549D5ED; sduuid=3a2d4eb03cdbe33a76a5bc0a72e330fa; route=8868029d29336df2cf39d46258841144',
            'Origin': 'https://workflow.sues.edu.cn',
            'Referer': 'https://workflow.sues.edu.cn/default/work/shgcd/jkxxcj/jkxxcj.jsp'
        }
    })

    let data = {
        params: {
            "id": 6817457,
            "sqrid": "75720",
            "sqbmid": "1709",
            "rysf": "2",
            "sqrmc": "贺之浩",
            "gh": "031518111",
            "sfzh": "310104199808192813",
            "sqbmmc": "管理学院",
            "xb": "1",
            "lxdh": "18918102262",
            "nl": "23",
            "tjsj": "2021-07-21 13:00",
            "xrywz": "2",
            "sheng": "上海市",
            "shi": "上海市",
            "qu": "徐汇区",
            "jtdzinput": "双峰路宛南四村18号401",
            "gj": "",
            "jtgj": "",
            "jkzk": "1",
            "jkqk": "1",
            "tw": "35",
            "sd": "下午",
            "bz": "",
            "_ext": "{}",
        }
    }

    const res = await http.post('https://workflow.sues.edu.cn/default/work/shgcd/jkxxcj/com.sudytech.work.shgcd.jkxxcj.jkxxcj.saveOrUpdate.biz.ext', data)
    console.log(res);
    const testData = {
        params: {
            "tjsj": "2021-07-23",
            "sd": "上午"
        },
    }
    const resData = await http.post('https://workflow.sues.edu.cn/default/work/shgcd/jkxxcj/com.sudytech.work.shgcd.jkxxcj.jkxxcj.queryToday.biz.ext', testData)
    console.log(resData.data.resultData);
}

tiwen()