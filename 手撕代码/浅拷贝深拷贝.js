//浅拷贝

function clone(target) {
    let cloneTarget = {};
    for (const key in target) {
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
};
//创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性依次添加到新对象上，返回。


//深拷贝1.0 (未考虑数组)
function deepclone1(target) {
    if (typeof target === Object) {
        let cloneTarget = {}
        for (const key in target) {
            cloneTarget[key] = deepclone1(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}

// const target = {
//     field1: 1,
//     field2: undefined,
//     field3: 'ConardLi',
//     field4: {
//         child: 'child',
//         child2: {
//             child2: 'child2'
//         }
//     }
// };

// console.log(deepclone1(target));

//深拷贝2.0 
function deepclone2(target) {
    if (typeof target === Object) {

        let cloneTarget = Array.isArray(target) ? [] : {}
        for (const key in target) {
            cloneTarget[key] = deepclone2(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}
// const target = {
//     field1: 1,
//     field2: undefined,
//     field5: null,
//     field3: {
//         child: 'child'
//     },
//     field4: [2, 4, 8]
// };

//深拷贝3.0考虑null和function
function deepclone3(target) {
    if (isObject(target)) {
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (const key in target) {
            cloneTarget[key] = deepclone2(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}
function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}
// console.log(deepclone3(target));
// const myTarget = deepclone3(target)
// myTarget.field5 = 2
// console.log(deepclone3(target));

function deepclone4(target, map = new Map()) {
    //判断是不是引用类型
    if (!isObject(target)) {
        return target //是基本类型，直接返回
    }
    //引用类型的对象，如果是通过构造函数创建，我们需要保留原型
    const type = Object.prototype.toString.call(target)
    if (type === '[object Symbol]') {
        return Object(Symbol.prototype.valueOf.call(target));
    }//Symbol特殊对待  
    if (type === '[object Function]'){
        return target
    }
    let cloneTarget
    const Ctor = target.constructor
    cloneTarget = new Ctor()
    //防止循环应用

    if (map.get(target)) {
        return target
    }
    map.set(target, cloneTarget)

    //判断是否是Set
    if (type === '[object Set]') {
        target.forEach((value) => {
            cloneTarget.add(deepclone4(value, map))
        })
        return cloneTarget
    }

    if (type === '[object Map]') {
        target.forEach((value, key) => {
            cloneTarget.set(key, deepclone4(value, map))
        })
        return cloneTarget
    }

    if (type === '[object Array]') {
        const len = target.length
        for (let i = 0; i < len; i++) {
            cloneTarget[i] = deepclone4(target[i], map)
        }
        return cloneTarget
    }

    if (type === '[object Object]') {
        for (let key in target) {
            cloneTarget[key] = deepclone4(target[key], map)
        }
        return cloneTarget
    }

    switch (type) {
        case '[object Boolean]':
        case '[object String]':
        case '[object Number]':
        case '[object Date]':
        case '[object Error]': return new Ctor(target)
    }
    
    return cloneTarget

}

const map = new Map();
map.set('key', 'value');
map.set('ConardLi', 'code秘密花园');

const set = new Set();
set.add('ConardLi');
set.add('code秘密花园');

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a, b) {
        return a + b;
    }
};
console.log(deepclone4(target));

//除了正则和函数基本都解决了