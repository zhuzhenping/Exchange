var upColor = "#F66464";
var downColor = "#1DBC8C";

// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
    ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94, 88],
    ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38, 88],
    ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92, 88],
    ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8, 88],
    ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76, 88],
    ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82, 88],
    ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15, 88],
    ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38, 88],
    ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42, 88],
    ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73, 88],
    ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89, 88],
    ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03, 88],
    ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8, 88],
    ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07, 88],
    ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94, 88],
    ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82, 88],
    ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88, 88],
    ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78, 88],
    ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71, 88],
    ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63, 88],
    ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16, 88],
    ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65, 88],
    ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54, 88],
    ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14, 88],
    ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44, 88],
    ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02, 88],
    ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67, 88],
    ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96, 88],
    ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29, 88],
    ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33, 88],
    ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22, 88],
    ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08, 88],
    ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05, 88],
    ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31, 88],
    ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86, 88],
    ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81, 88],
    ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332, 88],
    ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89, 88],
    ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99, 88],
    ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48, 88],
    ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55, 88],
    ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87, 88],
    ["2013/4/1", 2229.46, 2234.4, 2227.31, 2243.95, 88],
    ["2013/4/2", 2234.9, 2227.74, 2220.44, 2253.42, 88],
    ["2013/4/3", 2232.69, 2225.29, 2217.25, 2241.34, 88],
    ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59, 88],
    ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73, 88],
    ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04, 88],
    ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48, 88],
    ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26, 88],
    ["2013/4/15", 2199.91, 2181.94, 2177.39, 2204.99, 88],
    ["2013/4/16", 2169.63, 2194.85, 2165.78, 2196.43, 88],
    ["2013/4/17", 2195.03, 2193.8, 2178.47, 2197.51, 88],
    ["2013/4/18", 2181.82, 2197.6, 2175.44, 2206.03, 88],
    ["2013/4/19", 2201.12, 2244.64, 2200.58, 2250.11, 88],
    ["2013/4/22", 2236.4, 2242.17, 2232.26, 2245.12, 88],
    ["2013/4/23", 2242.62, 2184.54, 2182.81, 2242.62, 88],
    ["2013/4/24", 2187.35, 2218.32, 2184.11, 2226.12, 88],
    ["2013/4/25", 2213.19, 2199.31, 2191.85, 2224.63, 88],
    ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58, 88],
    ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65, 88],
    ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81, 88],
    ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07, 88],
    ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26, 88],
    ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21, 88],
    ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86, 88],
    ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67, 88],
    ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85, 88],
    ["2013/5/14", 2238.9, 2217.01, 2205.87, 2239.93, 88],
    ["2013/5/15", 2217.09, 2224.8, 2213.58, 2225.19, 88],
    ["2013/5/16", 2221.34, 2251.81, 2210.77, 2252.87, 88],
    ["2013/5/17", 2249.81, 2282.87, 2248.41, 2288.09, 88],
    ["2013/5/20", 2286.33, 2299.99, 2281.9, 2309.39, 88],
    ["2013/5/21", 2297.11, 2305.11, 2290.12, 2305.3, 88],
    ["2013/5/22", 2303.75, 2302.4, 2292.43, 2314.18, 88],
    ["2013/5/23", 2293.81, 2275.67, 2274.1, 2304.95, 88],
    ["2013/5/24", 2281.45, 2288.53, 2270.25, 2292.59, 88],
    ["2013/5/27", 2286.66, 2293.08, 2283.94, 2301.7, 88],
    ["2013/5/28", 2293.4, 2321.32, 2281.47, 2322.1, 88],
    ["2013/5/29", 2323.54, 2324.02, 2321.17, 2334.33, 88],
    ["2013/5/30", 2316.25, 2317.75, 2310.49, 2325.72, 88],
    ["2013/5/31", 2320.74, 2300.59, 2299.37, 2325.53, 88],
    ["2013/6/3", 2300.21, 2299.25, 2294.11, 2313.43, 88],
    ["2013/6/4", 2297.1, 2272.42, 2264.76, 2297.1, 88],
    ["2013/6/5", 2270.71, 2270.93, 2260.87, 2276.86, 88],
    ["2013/6/6", 2264.43, 2242.11, 2240.07, 2266.69, 88],
    ["2013/6/7", 2242.26, 2210.9, 2205.07, 2250.63, 88],
    ["2013/6/13", 2190.1, 2148.35, 2126.22, 2190.1, 88]
]);

function splitData(rawData) {
    var categoryData = [];
    var values = [];
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push("-");
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}
var kpEn = "开盘";
var zdEn = "最低";
var spEn = "收盘";
var zgEn = "最高";
var cjlEn = "成交量";

var option = {
    animation: false,
    title: {
        text: "上证指数",
        left: 0
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            // console.log(params);
            var obj = {};
            if (params[0].value[0] !== undefined) {
                // 防止放上去提示undefined
                obj = {
                    sName: params[0].seriesName,
                    name: params[0].name,
                    start: params[0].value[0],
                    close: params[0].value[1],
                    low: params[0].value[2],
                    height: params[0].value[3],
                    vol: params[1].value
                };
            } else {
                obj = {
                    sName: params[1].seriesName,
                    name: params[1].name,
                    start: params[1].value[0],
                    close: params[1].value[1],
                    low: params[1].value[2],
                    height: params[1].value[3],
                    vol: params[0].value
                };
            }
            console.log(params);
            console.log(obj);
        }
    },

    grid: {
        left: "10",
        right: "46",
        bottom: "20"
    },
    xAxis: {
        type: "category",
        data: data0.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: "dataMin",
        max: "dataMax",
    },
    yAxis: {
        position: "right",
        scale: true,
        splitArea: {
            show: true
        }
    },
    dataZoom: [
        {
            type: "inside",
            start: 50,
            end: 100,
            zoomLock: true
        },
        {
            show: false,
            type: "slider",
            y: "90%",
            start: 50,
            end: 100,
            zoomLock: true
        }
    ],
    series: [
        {
            name: "日K",
            type: "candlestick",
            data: data0.values,
            itemStyle: {
                normal: {
                    color: upColor,
                    color0: downColor,
                    borderColor: upColor,
                    borderColor0: downColor
                }
            },
           
            markLine: {
                symbol: ["none", "none"],
                data: [
                    [{
                        symbol: 'none',
                        x:'20',
                        yAxis: data0.values[data0.values.length - 1][0]
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'end',
                                formatter: '{c}'
                            }
                        },
                        value: data0.values[data0.values.length - 1][0],
                        xAxis: data0.categoryData[data0.categoryData.length - 1],
                        yAxis: data0.values[data0.values.length - 1][0]
                    }]
                    
                    // {
                    //     name: "max line on close",
                    //     type: "max",
                    //     valueDim: "close"
                    // }
                ]
            }
        },
        {
            name: "MA5",
            type: "line",
            symbol: "none",
            data: calculateMA(5),
            smooth: true,
            lineStyle: {
                normal: { opacity: 0.5 }
            }
        },
        {
            name: "MA10",
            type: "line",
            symbol: "none",
            data: calculateMA(10),
            smooth: true,
            lineStyle: {
                normal: { opacity: 0.5 }
            }
        },
        {
            name: "MA30",
            type: "line",
            symbol: "none",
            data: calculateMA(30),
            // smooth: true,
            lineStyle: {
                normal: { opacity: 0.5 }
            }
        }
    ]
};

export default option;
