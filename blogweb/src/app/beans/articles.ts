export class Articles {
    articleID: number;
    classID: number;
    title: string;
    createTime: string;
    lastEditDate: string;
    viewNum: number;
    likeNum: number;
    comNum: number;

    content: string;

    constructor() {
        this.classID = 2;
        this.content = 'Welcome to Xerxes bolg!';
        this.title = 'WELCOME';
        this.viewNum = 0;
        this.likeNum = 0;
        this.comNum = 0;
    }
}
