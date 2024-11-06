export class BlogPost {
  constructor(
    public content: any = null,
    public dateCreated: Date = new Date(),
    public featuredImage: any = null,
    public tags: string[] = [],
    public title: string = '',
    public urlHandle: string = '',
    public gallery: any[] = [],
    public youTubeEmbed: string = ''
  ) {}
}
