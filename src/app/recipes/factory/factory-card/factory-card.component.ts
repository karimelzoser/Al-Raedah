import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-factory-card',
  templateUrl: './factory-card.component.html',
  styleUrls: ['./factory-card.component.css'],
})
export class FactoryCardComponent implements OnInit {
  recipe: Recipe;
  proj;
  prom;
  id;
  lengthaya;
  subscription: Subscription;
  isLoading = true;
  open: boolean = false;
  isAuthenticated = false;
  blogNam: string;
  blogNameAr: string;
  titl: string;
  titlAr: string;
  categor: string;
  categorAr: string;
  pargrap1: string;
  pargrap1Ar: string;
  pargrap2: string;
  pargrap2Ar: string;
  pargrap3: string;
  pargrap3Ar: string;
  redlineparagpra1: string;
  redlineparagpra1Ar: string;
  redlineparagpra2: string;
  redlineparagpra2Ar: string;
  redopentitl: string;
  redopentitlAr: string;
  redopenwor: string;
  redopenworAr: string;
  pargrap4: string;
  pargrap4Ar: string;
  titl2: string;
  titl2Ar: string;
  titl2paragraph: string;
  titl2paragraphAr: string;
  blogCaptio: string;
  blogCaptioArb: string;

  public blogImgUr: string;
  public timestam: any;

  toggling;
  private userSub: Subscription;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private authservice: AuthService,
    public translate: TranslateService,
    private strg: DataStorageService,
    public datePipe: DatePipe,
    private render: Renderer2,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.strg.getInfo().subscribe((value) => {
      this.toggling = value;
    });
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.firestoreService.get_blog(this.id).subscribe((e) => {
        // console.log(e);
        this.recipe = {
          id: e.payload.id,
          blogName: e.payload.data()['blogName'],
          blogNameArb: e.payload.data()['blogNameArb'],
          title: e.payload.data()['title'],
          titleAr: e.payload.data()['titleAr'],
          category: e.payload.data()['category'],
          categoryAr: e.payload.data()['categoryAr'],
          pargraph1: e.payload.data()['pargraph1'],
          pargraph1Ar: e.payload.data()['pargraph1Ar'],
          pargraph2: e.payload.data()['pargraph2'],
          pargraph2Ar: e.payload.data()['pargraph2Ar'],
          pargraph3: e.payload.data()['pargraph3'],
          pargraph3Ar: e.payload.data()['pargraph3Ar'],
          redlineparagprah1: e.payload.data()['redlineparagprah1'],
          redlineparagprah1Ar: e.payload.data()['redlineparagprah1Ar'],
          redlineparagprah2: e.payload.data()['redlineparagprah2'],
          redlineparagprah2Ar: e.payload.data()['redlineparagprah2Ar'],
          redopentitle: e.payload.data()['redopentitle'],
          redopentitleAr: e.payload.data()['redopentitleAr'],
          redopenword: e.payload.data()['redopenword'],
          redopenwordAr: e.payload.data()['redopenwordAr'],
          pargraph4: e.payload.data()['pargraph4'],
          pargraph4Ar: e.payload.data()['pargraph4Ar'],
          title2: e.payload.data()['title2'],
          title2Ar: e.payload.data()['title2Ar'],
          title2paragraph: e.payload.data()['title2paragraph'],
          title2paragraphAr: e.payload.data()['title2paragraphAr'],
          blogCaption: e.payload.data()['blogCaption'],
          blogCaptionArb: e.payload.data()['blogCaptionArb'],
          blogImgUrl: e.payload.data()['blogImgUrl'],
          timestamp: e.payload.data()['timestamp'],
        };

        this.blogNam = this.recipe.blogName;
        this.blogNameAr = this.recipe.blogNameArb;
        this.titl = this.recipe.title;
        this.titlAr = this.recipe.titleAr;
        this.categor = this.recipe.category;
        this.categorAr = this.recipe.categoryAr;
        this.pargrap1 = this.recipe.pargraph1;
        this.pargrap1Ar = this.recipe.pargraph1Ar;
        this.pargrap2 = this.recipe.pargraph2;
        this.pargrap2Ar = this.recipe.pargraph2Ar;
        this.pargrap3 = this.recipe.pargraph3;
        this.pargrap3Ar = this.recipe.pargraph3Ar;
        this.redlineparagpra1 = this.recipe.redlineparagprah1;
        this.redlineparagpra1Ar = this.recipe.redlineparagprah1Ar;
        this.redlineparagpra2 = this.recipe.redlineparagprah2;
        this.redlineparagpra2Ar = this.recipe.redlineparagprah2Ar;
        this.redopentitl = this.recipe.redopentitle;
        this.redopentitlAr = this.recipe.redopentitleAr;
        this.redopenwor = this.recipe.redopenword;
        this.redopenworAr = this.recipe.redopenwordAr;
        this.pargrap4 = this.recipe.pargraph4;
        this.pargrap4Ar = this.recipe.pargraph4Ar;
        this.titl2 = this.recipe.title2;
        this.titl2Ar = this.recipe.title2Ar;
        this.titl2paragraph = this.recipe.title2paragraph;
        this.titl2paragraphAr = this.recipe.title2paragraphAr;
        this.blogCaptio = this.recipe.blogCaption;
        this.blogCaptioArb = this.recipe.blogCaptionArb;
        this.blogImgUr = this.recipe.blogImgUrl;
        this.title.setTitle(this.blogNameAr);

        this.meta.updateTag({
          name: 'description',
          content:
            this.pargrap1Ar +
            this.pargrap2Ar +
            this.pargrap3Ar +
            this.redlineparagpra1Ar +
            this.redlineparagpra2Ar +
            this.pargrap4Ar +
            this.titl2paragraphAr,
        });
        this.meta.updateTag({
          name: 'keywords',
          content:
            this.redopentitlAr +
            ',' +
            this.redopenworAr +
            ' , ' +
            this.titl2Ar +
            ',' +
            this.titl2paragraph,
        });

        this.meta.updateTag({ name: 'author', content: this.titlAr });
      });
      this.isLoading = false;
    });
  }
}
