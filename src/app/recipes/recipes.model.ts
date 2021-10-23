export class Recipe {
  public id: string;
  public blogName: string;
  public blogNameArb: string;
  public title: string;
  public titleAr: string;
  public category: string;
  public categoryAr: string;
  public pargraph1: string;
  public pargraph1Ar: string;
  public pargraph2: string;
  public pargraph2Ar: string;
  public pargraph3: string;
  public pargraph3Ar: string;
  public redlineparagprah1: string;
  public redlineparagprah1Ar: string;
  public redlineparagprah2: string;
  public redlineparagprah2Ar: string;
  public redopentitle: string;
  public redopentitleAr: string;
  public redopenword: string;
  public redopenwordAr: string;
  public pargraph4: string;
  public pargraph4Ar: string;
  public title2: string;
  public title2Ar: string;
  public title2paragraph: string;
  public title2paragraphAr: string;
  public blogCaption: string;
  public blogCaptionArb: string;

  public blogImgUrl: string;
  public timestamp: any;

  constructor(
    id: string,
    blogName: string,
    blogNameArb: string,
    title: string,
    titleAr: string,
    category: string,
    categoryAr: string,
    pargraph1: string,
    pargraph1Ar: string,
    pargraph2: string,
    pargraph2Ar: string,
    pargraph3: string,
    pargraph3Ar: string,
    redlineparagprah1: string,
    redlineparagprah1Ar: string,
    redlineparagprah2: string,
    redlineparagprah2Ar: string,
    redopentitle: string,
    redopentitleAr: string,
    redopenword: string,
    redopenwordAr: string,
    pargraph4: string,
    pargraph4Ar: string,
    title2: string,
    title2Ar: string,
    title2paragraph: string,
    title2paragraphAr: string,
    blogCaption: string,
    blogCaptionArb: string,

    blogImgUrl: string,
    timestamp: any
  ) {
    this.id = id;
    this.blogName = blogName;
    this.blogNameArb = blogNameArb;
    this.title = title;
    this.titleAr = titleAr;
    this.category = category;
    this.categoryAr = categoryAr;
    this.pargraph1 = pargraph1;
    this.pargraph1Ar = pargraph1Ar;
    this.pargraph2 = pargraph2;
    this.pargraph2Ar = pargraph2Ar;
    this.pargraph3 = pargraph3;
    this.pargraph3Ar = pargraph3Ar;
    this.redlineparagprah1 = redlineparagprah1;
    this.redlineparagprah1Ar = redlineparagprah1Ar;
    this.redlineparagprah2 = redlineparagprah2;
    this.redlineparagprah2Ar = redlineparagprah2Ar;
    this.redopentitle = redopentitle;
    this.redopentitleAr = redopentitleAr;
    this.redopenword = redopenword;
    this.redopenwordAr = redopenwordAr;
    this.pargraph4 = pargraph4;
    this.pargraph4Ar = pargraph4Ar;
    this.title2 = title2;
    this.title2Ar = title2Ar;
    this.title2paragraph = title2paragraph;
    this.title2paragraphAr = title2paragraphAr;
    this.blogCaption = blogCaption;
    this.blogCaptionArb = blogCaptionArb;

    this.blogImgUrl = blogImgUrl;
    this.timestamp = timestamp;
  }
}
