export class NewResponse {
    status: string;
    totalResults: number;
    articles: ArticleList[];
}

export class ArticleList {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

}

export class Source {
    id: number;
    name: string;
}
