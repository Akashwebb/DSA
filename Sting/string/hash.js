let a ="({}()[])([])"
 count=0
// for(let i=0;i<a.length;i++){
//    if(a[i]==")" || a[i]=="}" || a[i]=="]"){
//     count++
//    }else{
//     break;
//    }
// }
let map =new Map()
map.set("(",0)
map.set("{",0)
map.set("[",0)
for(let i=0;i<a.length;i++){
       if(a[i]=="(" ){
        map.set(a[i], map.get(a[i])+1)
       }
       else if(a[i]=="{" ){
        map.set(a[i], map.get(a[i])+1)
       }
       else if(a[i]=="[" ){
        map.set(a[i], map.get(a[i])+1)
       }
       else if(a[i]==")" ){
        map.set("(", map.get("(")-1)
       }
       else if(a[i]=="}" ){
        map.set("{", map.get("{")-1)
       }
       else{
        map.set("[", map.get("[")-1)
       }


    }

let result = 0
for(let x of map.values()){
    result+=x
}
console.log(result)
if(result==0){
    console.log("yes")
}else{
    console.log("no")
}