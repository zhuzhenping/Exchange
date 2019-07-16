export default {
    // 测试地址
    testENV: {
        name: "test",
        httpApi: "http://192.168.50.67:8183",
        uploadApi:"http://upload.bit2019.com",
        TVsocket: "ws://192.168.50.71:8800/ws",
    },
    //生产地址
    proENV: {
        name: "prod",
        httpApi: "http://114.55.209.191:8183",
        uploadApi:"http://upload.bit2019.com",
        TVsocket: "ws://114.55.209.191:8195/ws",
        // TVsocket: "ws://192.168.50.71:8195/ws",
    },
    getENV: function() {
        return this.proENV;
    }
};
