export class Comments {
    commentID: number;
    articleID: number;
    fatherID: number;
    userName: string;
    createTime: string;

    content: string;

    constructor() {
        this.fatherID = 0;
        this.content = '';
        this.userName = '匿名';
    }
}
