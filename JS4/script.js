class IntegerSet {

    constructor(max_value){
        this.set = new Array(max_value).fill(false);
    }

    insert(value){
        if(!this.set[value]) this.set[value] = true;
    }

    del(value){
        if(this.set[value]) this.set[value] = false;
    }

    toString(){
        return this.set.toString();
    }

    union(set_n){
        let result = new Array(this.set.length+set_n.set.length);

        for(var i=0; i<result.length;i++){
            if(this.set[i] || set_n.set[i]) result[i] = i
        }
        
        return result;
    }

    inter(set_n){
        let result = new Array(this.set.length+set_n.set.length);

        for(var i=0; i<result.length;i++){
            if(this.set[i] && set_n.set[i]) result[i] = i
        }
        
        return result;
    }
}

let intset_1 = new IntegerSet(10);
let intset_2 = new IntegerSet(12);

intset_1.insert(1);
intset_2.insert(2);
intset_2.insert(1);

console.log(intset_1.union(intset_2));
console.log(intset_1.inter(intset_2));