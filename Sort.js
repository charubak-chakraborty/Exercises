class Sort{
    constructor(){
        let arr=[12,7,3,9,1,6,5,10,8,34,65,98,67,89,23,45,12,14,38,48,52,17];
        console.log(this.mergeSort(arr));
    }
    bubbleSort(arr){
        for(let i=0; i<arr.length;i++){
            for(let j=1;j<arr.length-i;j++){
                if(arr[j-1]>arr[j]){
                    let temp=arr[j-1];
                    arr[j-1]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        return arr;
    }
    insertionSort(arr){
        for(let i=1;i<arr.length;i++){
            let element=arr[i];
            let sortedBrick=i;
            while(sortedBrick>0 && arr[sortedBrick-1]>element){
                arr[sortedBrick]=arr[sortedBrick-1];
                sortedBrick--;
            }
            arr[sortedBrick]=element;
        }
		return arr;
    }
    selectionSort(arr){
        for(let i=0;i<arr.length;i++){
            let min=i;
            for(let j=i+1;j<arr.length;j++){
                if(arr[min]>arr[j]){
                    min=j;
                }
            }
            if(min!=i){
                let temp=arr[min];
                arr[min]=arr[i];
                arr[i]=temp;
            }
        }
        return arr;
    }
    mergeSort(arr){
        if(arr.length==1){
            return arr;
        }
        let mid=Math.floor(arr.length/2);
        let left=arr.slice(0,mid);
        let right=arr.slice(mid);
        return this.merge(this.mergeSort(left),this.mergeSort(right));
    }
    merge(left,right){
        let leftIndex=0;
        let rightIndex=0;
        let result=[];

        while(leftIndex<left.length && rightIndex<right.length){
            if(left[leftIndex]<right[rightIndex]){
                result.push(left[leftIndex]);
                leftIndex++;
            }else if(right[rightIndex]<left[leftIndex]){
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
}
new Sort();