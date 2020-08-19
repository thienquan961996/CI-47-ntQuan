const dataStructuredemo = () => {
    let a = 'hello world';
    // a = 1;
    console.log(typeof a);
    console.log(a.includes('hello'));
    console.log(a.trim()) //xóa khoảng trắng 2 bên

    let arr = [1, 2, 3, 4, 1, 5];
    console.log(arr);
    // let arr2 = arr.filter(elm => {
    //     return elm > 2;
    // })
    let arr2 = arr.map(elm => elm*2);
    console.log(arr2);
    // arr.unshift(0); // thêm vào đầu arr
   
    // console.log(arr.lastIndexOf(1)) // tìm vị trí phần tử ở sau trong mảng

    const student = {
        name : 'an',
        age: 19,
        sing : () => {
            console.log('sing a song')
        }
    }
    student.sing();
    const date = new Date()
    console.log(date);
    console.log(date.getDay());
    const dayofweek = ['Thu 2','Thu 3','Thu 4','Thu 5','Thu 6','Thu 7','chu nhat'];
    console.log(dayofweek[date.getDay() - 1])
    console.log(date.getFullYear())

}
dataStructuredemo();

// document.querySelector('myButton').addEventListener('click', () =>{
//     alert('hi');
// })