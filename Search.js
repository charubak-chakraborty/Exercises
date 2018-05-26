class Search{
    constructor(data){
        
    }
    binarySearch(arr,item,low,high){
        this.itr=0;
        console.log('itr: '+this.itr++);
        let mid=low+(high-low)/2;
        mid=Math.ceil(mid);
        if(arr[mid]==item){
            return mid;
        }else if(arr[mid]<item){
            low=mid;
            return this.binarySearch(arr, item, low, high);
        }else if(arr[mid]>item){
            high=mid;
            return this.binarySearch(arr, item, low, high);
        }
    }
    interpolationSearch(arr,item,low,high){
        this.itr=0;
        console.log('itr: '+this.itr++);
        let mid=low+((high-low)/(arr[high]-arr[low]))*(item-arr[low]);
        mid=Math.ceil(mid);
        console.log('mid:'+mid);
        if(arr[mid]==item){
            return mid;
        }else if(arr[mid]<item){
            low=mid;
            return this.interpolationSearch(arr, item, low, high);
        }else if(arr[mid]>item){
            high=mid;
            return this.interpolationSearch(arr, item, low, high);
        }
    }

    //hashing remains
}
let arr=[1,2,3,4,5,6,7,8,9,10];
let item=3;
this.itr=0;
let index=new Search(arr).interpolationSearch(arr,item,0,arr.length-1);
console.log(index);