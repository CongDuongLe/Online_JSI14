// kién thức đã học trong JSA 

// localStorage dùng để làm gì, và các thao tác localStorage 

//1, dùng để làm gì : dùng để lưu trữ thông tin vào bố nhớ cache của trình duyệt
// cac tính chất  : sẽ không bị xoá đi đónng trình duyệt, tắt máy
// khả năng lưu trữ : lưu trữ được khoảngg 5mb dữ liệu ( khá bé)
// localStorage chỉ có khả năng : lưu trữ thông tin dưới dạng String 

// các thao tác localStorage 
// setItem(key, value) : dùng để lưu trữ thông tin vào localStorage
//getItem(key) : lấy ra các data từ localStorage
// removeItem(key) : xoá data theo key trong localStorage
// clear() : xoá hết data trong localStorage 

// ví dụ : 

// trong jsa học api. đôi khi data trả về có dữ liệu rất lớn nên mình k thể đoán mò  1 thuộc tính nào đó trong data 

const singers = [
    {   
        id : 1,
        name : "Mono",
        age : 22,
        isPaid : true
    },
    {
        id : 2,
        name : 'M-TP',
        age : 28,
        isPaid : true
    }, 
    {
        id : 3,
        name : 'J97',
        age : 25,
        isPaid : true
    },
    {
        id : 4,
        name : 'Chipu',
        age : 28,
        isPaid : false
    }, 
    {
        id : 5,
        name : 'Tiên Cookie',
        age : 28,
        isPaid : true
    }
]

const KEY ='singer'

// chuyển trừ obj, arr to String : JSON.stringify(objName)


localStorage.setItem(KEY, JSON.stringify(singers))


const getFromLocalStorage = localStorage.getItem(KEY) // string

console.log( typeof getFromLocalStorage)


// thì để sử dụng vòng lăp, thì kiểu dữ liệu : 1 obj, 1 arr
// chuyển đổi ngược tù string => obj, arr : JSON.parse(stringName)

const covertStringToObj = JSON.parse(getFromLocalStorage) 

console.log( typeof covertStringToObj)

// ôn tập về hàm arrow fucntion 
// khai báo : từ khoá khai báo ( const, let, var)  + tên hàm  = ( tham số truyền vào) => { return logic}

// ví dụ về hàm tính tổng 2 số = arrow  fcn

const tinh_tong = (so1, so2) => {
    return so1+ so2
}

console.log(tinh_tong(2,3))

const number = [1,2,3,4,5]


// ham map()
// cú pháp arrName.map(
//  (item, index) => { return logic}
// )

const numeberX2 = number.map(
    (item, index) => {
        return item = item*2
    }
)

console.log(numeberX2)

// item : sẽ là từng giá trị ta nhận được trong mảng truyền vào
// với mảng number khi map : ta nhận đc tham số đầu vào là item, item lúc này chính là các giá trị có trong mảng number
// các giá  : 1,2,3,4,5

// dòng 92 : thực hiện logic : nhân đôi giá trị của từng item trong mảng number, lưu lại vào biến numberX2 qua từ khoá return

// dùng mảng singers để map, lấy ra các giá trị age của singer rồi cộng thêm 1

// const tuoi = singers.map(
//     (item,index) =>{
//         return item.age = item.age +1
//     }
// )
// console.log(tuoi)



// hàm filter() : lọc ra các phần tử thỏa mãn điều kiện

// cú pháp : gần giống hàm map(), chỉ thay map = filter()

// viết hàm filter để tìm ra nguòi có isPaid : false

const isPaidPeople = singers.filter(
    (item, index) => { 
        return item.isPaid === false
    }
)


const peopleIs28yearsOld = singers.filter(
    (item, index) => { 
        return item.age === 28
    }
)


console.log(peopleIs28yearsOld)


// áp dụng vòng map() và filter để tìm ra những người có tuổi nhỏ nhất và in ra tên của họ

const arrAge = singers.map(
    (item, index) => {
        return item.age
    }
)

console.log(arrAge)  // [22, 28, 25, 28, 28]

// get min age
 const minimumAgeInarrAge = Math.min(...arrAge) // ... ArrayName : spread operator : copy toàn phộ các phân tử của 1 mảng

 console.log(minimumAgeInarrAge)

 const getPeopleWithMinimumAge = singers.filter(
        (item, index) => {
            if (item.age <= minimumAgeInarrAge ) {
                return item.name
            }
         }
 )

 console.log(getPeopleWithMinimumAge[0].name)

 const arr1 =[1,2,3,4,5]

 const bigNumber = [1,2,10,11,12, 100,101,102,103,104,105,106,107,108,109,110]
 const arr2 =['a','b','c','d','e']

 const arr3 = [...arr1, ...arr2]

 console.log(arr3)


 const getSum = (...params) => {  // ... param sẽ là  1,2,10,11,12, 100,101,102,103,104,105,106,107,108,109,110
        // return params.reduce(
        //     (tichluy, item) => {
        //         tichluy + item
        //     }, 0
        // )

        console.log(...params)
         return params.reduce(
            (tichluy, item) => {
               return tichluy + item
            }, 0
        )


 }

 // khi khơi tao : tichluy = tích luỹ ban đâu = 0
 // chạy lần 1  : return tichluy + item : 0 + 1 = 1 => tichluy trung gian = 1
 // chạy lần 2 : return tichluy + item : 1 + 2 = 3
 // chạy lần 3 :    tichluy :3 + item : 3  = 6
    // chạy lần 4 :    tichluy :6 + item : 4  = 10
    // chạy lần 5 :    tichluy :10 + item : 5  = 15
// dòng 183 cớ return lại tichluy + item sau khi chạy hết vòng lặp : trả tra kết quả cuối cùng = 15

     console.log(getSum(...bigNumber))

 // tichluy : là biến tích luỹ trung gian trong phép gán và cộng nhiều số
 // item : sẽ là giá trị của cac phần từ trong mảng params
 // 0 : sẽ là giá trị tích luỹ ban đầu


 // tổng kết : ôn lại local storage, học mới array thêm 1 số hàm map(), filter(), reduce(), spread operator

 // về nhà : ôn tập các kiến thức về array method đã học hôm nay
 // tìm hiếu trước về array.slice(). array.splice()
 // tìm hiểu cách cài đặt môi trường và chạy ứng dụng ReactJS : sẽ học vào buổi số 3