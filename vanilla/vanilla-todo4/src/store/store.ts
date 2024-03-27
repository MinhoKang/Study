export interface TodoItem {
  seq: number;
  content: string;
}

class Store {
  data: { todoArr: TodoItem[]; [key: string]: any };

  constructor() {
    this.data = { todoArr: [] };
  }

  get(targetData: string) {
    const response = this.data[targetData];
    return response;
  }

  set(targetData: string, value: string, func?: any) {
    switch (targetData) {
      case "todoArr":
        const data = this.data[targetData];
        data.push({
          seq: data.length,
          content: value,
        });
        if (func) {
          func();
        }
        break;
    }
  }

  remove(targetData: string, seq: string, func?: any) {
    const data = this.data[targetData];
    const seqNum: number = parseInt(seq);
    data.splice(seqNum, 1);
    for (let i = seqNum; i < data.length; i++) {
      data[i].seq = i;
    }
    if (func) {
      func();
    }
  }
}

export const store = new Store();

// type Todo = {

// }

// class Store {
//     data: any =  {
//         todoList: []
//     }
//     constructor( ){
//     }
//     get(key:string){
//         if(this.data[key]){
//             // 없을경우 리턴 값 정의 (에러_)
//         }

//         return this.data[key]
//     }
//     set(key, value){
//         this.data[key] = value
//     }
// }
