// arrow function (ES6)

// viết 1 hàm để tính tổng 3 số bất kì được truyền vào sử dụng arrow fucntion

// 4 phút để làm theo yêu cầu tại dòng số 3


// cú pháp của arrow function  : const , let, var fnName = (...params) => { logic in here}





let final = null
const getSums = (so1, so2, so3) => {
    return final = so1 + so2 + so3
}

// console.log(getSums(2,3,4))


const h2Query = document.querySelector('#showFinal')

const getFinal = (params) => {
    const firstPrompt = prompt('nhập số thứ nhất')
    const secondPrompt = prompt('nhập số thứ hai')
    const thirdPrompt = prompt('nhập số thứ ba')

    // logic de tinh tich cua 3 so

    return(
        final = firstPrompt * secondPrompt * thirdPrompt,
        h2Query.innerText = final
    ) 


}


// trong js, cac bien, cac ham se co tu khoa this
// tu khoa this tham chieu den chinh doi tuong dang duoc tro vao ( dang duoc su dung)

// arrow function thi no mac dinh se khong co tu khoa this => minh chi can viet dung cu phap, dung logic, dung vi
// tri ma can goi den ham arrow function => ham se duoc thuc thi ngay lap tuc


// Noi dung kien thuc buoi 2 : cac phuong thuc lam viec voi array

const firstArray = [1,2,3,4,5,6,7,8,9,10] // length = 10

// nhiem vu : viet 1 vong lap de nhan doi cac phan tu trong mang firstArray
// output : [2,4,6,8,10,12,14,16,18,20]

// for (let index = 0; index < firstArray.length; index++) {
//     firstArray[index] = firstArray[index] * 2
//     // console.log(firstArray[index])
// }
 // khi vong FOr chay den lan thu 10, thi index =10, khong thoa man dieu kien la index < length =10 => vong lap dung lap

 // firstArray[index] : gia tri ( value ) cua tung phan tu cua mang tuong ung voi index cua no

 // firstArray[index] * 2 : logic nhan doi gia tri cuar tung phan tu trong mang


 // Phuong thuc array.map() cua javascipt

 // map() : duyet qua tung phan tu trong mang, thuc hien 1 logic nao do voi tung phan tu trong mang

 // cu phap : arrayName.map((item, index of item) => { logic in here})

//  thuc hanh map firstArray va tien hanh tru di moi phan tu trong array di 2 don vi 
// output : [-1,0,1,2,3,4,5,6,7,8]

  const newArray = firstArray.map((item, index) => {
    return item = item -2
})

console.log(newArray)

// dong 75 : co 1 ham return : tra ve cac gia tri sau khi map
// logic : item = item -2 : lay tung phan item trong array, dem no di tru cho 2 , do duoc viet sau ham return
// => tra gi sau khi thuc hien logic se duoc mang newArray hứng, mảng newArray sẽ chứa kết quả sau khi thực hiện logic


const singer = [
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

const singerAgePlus = singer.map(
    (item, index) => {
        return ++ item.age
    }
)
// giải thích : trong ham map() mình nhận về callback là 1 hàm arrow function
// hàm arrow fnc nhận 2 tham số truyền vào là item, index của từng item :
// item.age : sẽ trỏ đển thuộc tính là age trong từng obj của mảng singer
// item tại dòng 104 =  {   
    //     id : 1,
    //     name : "Mono",
    //     age : 22
    // },


   // item[0] = {{   
    //     id : 1,
    //     name : "Mono",
    //     age : 22
    // },

    // item[1] = {
    //     id : 2,
    //     name : 'M-TP',
    //     age : 28
    // }, 
    
    // item[2] = {
    //     id : 3,
    //     name : 'J97',
    //     age : 25
    // }




console.log(singerAgePlus)


// viết logic cho ham map => trả về số tuổi của từng item trong mang singer + 1


// array.filter() : sẽ là hàm để lọc các phần tử theo điều kiện của người dùng

// cú pháp array.filter() : gần tương đồng như array.map(), chỉ khác nhau ở logic xử lí điều kiện

// yêu cầu : dùng array.filter() để lọc các phần tủ của mảng singer có tuổi === 28



// phương thức nối mảng , copy mảng 

// tên gọi : spread operator
// cú pháp [...arrName]

const arr1 = [1,2,3,4,5]
const arr2 = ['a','b','c','d','e']


// dùng đến spread operator để tạo 1 mảng finalArr chứa tất cả các giá trị của arr1, arr2

const finalArr = [...arr1, ...arr2]

// const nextFinalArr  sẽ chứa tất cả các phần tử của mảng arr1, arr2, finalArr 




// 1 trong những ứng dụng của spread operator 
// sau khi vào trang thành viên : ví dụ load mặc định 10 người theo dõi đầu tiên
// khi kéo lăn chuột xuống cuối trang, sẽ tải thêm mỗi lần là 10 thành viên tiếp theo
// lúc này thì trên giao diện web sẽ hiển thị ra tất cả 20 người dùng theo dõi sau khi load lần đầu tiên và sau khi
// user thực hiện thao tác kéo lăn xuống cuối trang mà không xoá đi các người dùng sau lần load đầu tiên 

// spear operator sẽ có các ứng dụng khác nhau tùy vào từng trường hợp

// rest parameter : là 1 cú pháp của ES6, dùng để định nghĩa hàm với số lượng tham số không xác định
// cú pháp : gần giống như spread operator, nhưng khi dùng rest parameter để truyên tham số, thì rest parameter sẽ đứng tại 
// vị trí cuối cùng khi truyền tham số 
const nextFinalArr = [...arr1, ...arr2, ...finalArr]


console.log(nextFinalArr) 
let value = 0

const Sum = (...params) => {
    return value = params.reduce(
        (tichluy, item) => tichluy + item
        )
}

console.log(Sum(1,2,3,4,5,6,7,8,9,10))


// dòng 204 : giá trị tích luỹ ban đầu : 0

// thực hiện vòng lặp lần 1 : tích luỹ = 0 + 1 = 1,
// thực hiện vòng lặp lần 2 : tích luỹ = 1 + 2 = 3,
// ... thực hiện vòng lặp cuối cũng : tích luỹ = 45 + 10 = 55

// reduce => trả về giá trị cuối cùng sau khi thực hiện logic , giá trị này là duy nhất

// tại dòng 202 : ...params = 1,2,3,4,5,6,7,8,9,10

// giải thích : ...params : sẽ là tất cả các tham số mà mình truyền vào hàm Sum(tham số1, tham số2, tham số 3, ...)


const ar01 = [1,2,3]
const ar02 = [10,11,12]
const ar03 = [999,1000, 1001]

// nhiệm vụ : tạo ra 1 mảng mới chứa tất cả các phần tử của 3 mảng trên
// sau đó sẽ tính tổng các phần tử trong mảng mới sử dụng spead operator và reduce








const initArr = [1,2,3,4] // tổng = 10 ; length =4 nên array.reduce sẽ lặp 4 lần để lấy đc hết các phần tử trong mảng

const res = initArr.reduce(
    (tl, item) => tl + item, 5
)

// giá trị tích luỹ ban đầu : 5; 
// nếu không truyền giá trị tích luỹ ban đầu, thì gia trị tích luỹ ban đầu mặc định sẽ = 0
// thực hiện logic : tích luỹ + item : 5+ 1 = 6 ( tích luỹ = 6)
// lần lặp 2 : tích luỹ : 6+2 = 8 ( tích luỹ  = 8)
// lần lặp 3 : tích luỹ 8 + 3 = 11 ( tích luỹ = 11)
// lần lặp 4 : tích luỹ 11 + 4 = 15 ( kết quả cuối cùng sau khi thực hết các lần lặp)




console.log(res)
