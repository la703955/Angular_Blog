export class Post {
    constructor(
        public title: String,
        public content: String,
        public loveits: number,
        public date?: Date
    ){
        this.date = new Date();
        console.log(this.date);
    }
}
