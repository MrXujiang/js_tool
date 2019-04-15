export const data = [
    {
        tit: '求一个集合是否是另一个集合的子集',
        desc: '使用数组的every方法求一个集合是否是另一个集合的子集',
        fn: function isSubCollection(arr1, arr2){
            arr2.every((item)=>{return arr1.includes(item)})
        }
    },
    {
        tit: '浅拷贝',
        desc: '定义：在拷贝结束后两个对象的某些属性仍然指向同一个内存空间',
        fn: function shallowCopy(obj) {
            let target = Array.isArray( obj ) ? [] : {};
        
            for(let key in obj) {
                if(obj.hasOwnProperty(key)){
                    target[key] = obj[key];
                }
            }
        
            return target
        }
    },
    {
        tit: '深拷贝--JSON.parse(JSON.stringify(obj))',
        desc: '定义：在拷贝结束后两个对象无任何关联',
        fn: function deepCopy(obj) {
            return JSON.parse(JSON.stringify(obj))
        }
    },
    {
        tit: '深拷贝--递归',
        desc: '定义：在拷贝结束后两个对象无任何关联',
        fn: function deepCopy(obj) {
            let target = Array.isArray( obj ) ? [] : {}
            for ( var k in obj ) {
                if ( typeof obj[ k ] === 'object' ) {
                    target[ k ] = deepCopy( obj[ k ] )
                } else {
                    target[ k ] = obj[ k ]
                }
            }
            return target
         }
    },
    {
        tit: '数组去重--冒泡排序',
        desc: '注：for循环每次遍历都会重新查询数组长度，所以不应该将数组长度单独提取出来',
        fn: function _unique(arr) {
            for(let i=0; i< arr.length; i++) {
                for(let j=i+1; j< arr.length; j++) {
                    if(Object.is(arr[i], arr[j])) {
                        arr.splice(j, 1);
                        j--;
                    }
                }
            }
            return arr
        }
    },
    {
        tit: '数组去重--利用indexOf',
        desc: '利用indexOf',
        fn: function _unique2(arr) {
            let res =[];
            for(let i=0; i<arr.length; i++){
                if(res.indexOf(arr[i] === -1)){
                    res.push(arr[i]);
                }
            }
            return res
        }
    },
    {
        tit: '数组去重--filter',
        desc: 'filter',
        fn: function _unique3(arr) {
            return arr.filter((item, index, arr)=> {
                return arr.indexOf(item) === index
            })
        }
    },
    {
        tit: '数组去重--使用set',
        desc: '使用set',
        fn: function _unique4(arr) {
            return '[...new Set(arr)]'
        }
    },
]