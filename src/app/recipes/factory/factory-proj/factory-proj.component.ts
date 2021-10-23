import { Component, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/shared/firestore.service';
import * as $ from 'jquery';
import { filter } from 'rxjs/operators';

import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { Recipe } from '../../recipes.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeService } from '../../recipe.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-factory-proj',
  templateUrl: './factory-proj.component.html',
  styleUrls: ['./factory-proj.scss'],
})
export class FactoryProjComponent implements OnInit, OnDestroy {
  id: number;
  toggling;
  editMode = false;
  @Output() isClicked;
  recipes: Recipe[];
  filtering = null;
  dataia;
  lengthaya;
  projNAME;
  datum: Recipe;
  dattt: [];
  Deadline = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  sortTime = true;
  prom;
  isAuthenticated = false;
  subscription: Subscription;

  private userSub: Subscription;
  slides;
  ids;
  recipeForm: FormGroup;
  contactForm: FormGroup;
  myimage;
  urlaya;
  proj;
  error;
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

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress1: Observable<number>;

  getDownloadURL1: Observable<string>;

  uploadState1: Observable<string>;

  constructor(
    private router: Router,
    public recipeService: RecipeService,
    public dataStorage: DataStorageService,
    private authservice: AuthService,

    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private afStorage: AngularFireStorage,
    private render: Renderer2
  ) {}

  deleteProj(id, imgUrl1) {
    this.firestoreService.delete_blog(id);
    this.afStorage.storage.refFromURL(imgUrl1).delete();
  }

  upload1(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState1 = this.task.snapshotChanges().pipe(map((s) => s.state));
    this.uploadProgress1 = this.task.percentageChanges();
    // upload image, save url
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe((url) => {
            this.getDownloadURL1 = url;
            console.log(this.getDownloadURL1);
          });
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.dataStorage.getInfo().subscribe((value) => {
      this.toggling = value;
    });
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.proj = params['name'];

      // this.editMode = params['id'] != null;
      this.initForm();

      this.firestoreService.get_allBlogs().subscribe((data) => {
        this.recipes = data.map((e) => {
          return {
            id: e.payload.doc.id,
            blogName: e.payload.doc.data()['blogName'],
            blogNameArb: e.payload.doc.data()['blogNameArb'],
            title: e.payload.doc.data()['title'],
            titleAr: e.payload.doc.data()['titleAr'],
            category: e.payload.doc.data()['category'],
            categoryAr: e.payload.doc.data()['categoryAr'],
            pargraph1: e.payload.doc.data()['pargraph1'],
            pargraph1Ar: e.payload.doc.data()['pargraph1Ar'],
            pargraph2: e.payload.doc.data()['pargraph2'],
            pargraph2Ar: e.payload.doc.data()['pargraph2Ar'],
            pargraph3: e.payload.doc.data()['pargraph3'],
            pargraph3Ar: e.payload.doc.data()['pargraph3Ar'],
            redlineparagprah1: e.payload.doc.data()['redlineparagprah1'],
            redlineparagprah1Ar: e.payload.doc.data()['redlineparagprah1Ar'],
            redlineparagprah2: e.payload.doc.data()['redlineparagprah2'],
            redlineparagprah2Ar: e.payload.doc.data()['redlineparagprah2Ar'],
            redopentitle: e.payload.doc.data()['redopentitle'],
            redopentitleAr: e.payload.doc.data()['redopentitleAr'],
            redopenword: e.payload.doc.data()['redopenword'],
            redopenwordAr: e.payload.doc.data()['redopenwordAr'],
            pargraph4: e.payload.doc.data()['pargraph4'],
            pargraph4Ar: e.payload.doc.data()['pargraph4Ar'],
            title2: e.payload.doc.data()['title2'],
            title2Ar: e.payload.doc.data()['title2Ar'],
            title2paragraph: e.payload.doc.data()['title2paragraph'],
            title2paragraphAr: e.payload.doc.data()['title2paragraphAr'],
            blogCaption: e.payload.doc.data()['blogCaption'],
            blogCaptionArb: e.payload.doc.data()['blogCaptionArb'],
            blogImgUrl: e.payload.doc.data()['blogImgUrl'],
            timestamp: e.payload.doc.data()['timestamp'],
          };
        });

        this.lengthaya = this.recipes.length;
      });
    });

    // Start  Connection Error
    this.userSub = this.authservice.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  onEdit(id) {
    this.editMode = true;
    this.ids = id;
    let recipe;
    this.firestoreService.get_blog(this.ids).subscribe((e) => {
      recipe = {
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
      // console.log(recipe);
      // console.log(recipe.id);
      // console.log(recipe.idd);
      // console.log(recipe.name);
      // console.log(recipe.pcrtest);
      // console.log(recipe.report);
      this.blogNam = recipe.blogName;
      this.blogNameAr = recipe.blogNameArb;
      this.titl = recipe.title;
      this.titlAr = recipe.titleAr;
      this.categor = recipe.category;
      this.categorAr = recipe.categoryAr;
      this.pargrap1 = recipe.pargraph1;
      this.pargrap1Ar = recipe.pargraph1Ar;
      this.pargrap2 = recipe.pargraph2;
      this.pargrap2Ar = recipe.pargraph2Ar;
      this.pargrap3 = recipe.pargraph3;
      this.pargrap3Ar = recipe.pargraph3Ar;
      this.redlineparagpra1 = recipe.redlineparagprah1;
      this.redlineparagpra1Ar = recipe.redlineparagprah1Ar;
      this.redlineparagpra2 = recipe.redlineparagprah2;
      this.redlineparagpra2Ar = recipe.redlineparagprah2Ar;
      this.redopentitl = recipe.redopentitle;
      this.redopentitlAr = recipe.redopentitleAr;
      this.redopenwor = recipe.redopenword;
      this.redopenworAr = recipe.redopenwordAr;
      this.pargrap4 = recipe.pargraph4;
      this.pargrap4Ar = recipe.pargraph4Ar;
      this.titl2 = recipe.title2;
      this.titl2Ar = recipe.title2Ar;
      this.titl2paragraph = recipe.title2paragraph;
      this.titl2paragraphAr = recipe.title2paragraphAr;
      this.blogCaptio = recipe.blogCaption;
      this.blogCaptioArb = recipe.blogCaptionArb;
      this.getDownloadURL1 = recipe.blogImgUrl;
    });
  }

  onCancel() {
    this.initForm();
  }
  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );
    if (this.editMode) {
      // this.recipeservice.updateRecipe(this.id, this.recipeForm.value);
      console.log(this.proj);
      console.log(this.ids);
      this.firestoreService.update_blog(this.ids, this.recipeForm.value);
      this.editMode = false;
      this.initForm();
    } else {
      // const recipe = { ...this.recipeForm.value, id: uuidv4() };
      // this.recipeservice.addRecipe(recipe);
      let recipe = { ...this.recipeForm.value };
      console.log(recipe);
      this.firestoreService
        .create_newblog(recipe)
        .catch((error) => {
          console.log(error);
        })
        .then((res) => {
          this.initForm();
        });
    }

    // this.dataStorageService.storeRecipe();
  }

  private initForm() {
    let blogblogName = '';
    let blogblogNameArb = '';
    let blogtitle = '';
    let blogtitleAr = '';
    let blogcategory = '';
    let blogcategoryAr = '';
    let blogpargraph1 = '';
    let blogpargraph1Ar = '';
    let blogpargraph2 = '';
    let blogpargraph2Ar = '';
    let blogpargraph3 = '';
    let blogpargraph3Ar = '';
    let blogredlineparagprah1 = '';
    let blogredlineparagprah1Ar = '';
    let blogredlineparagprah2 = '';
    let blogredlineparagprah2Ar = '';
    let blogredopentitle = '';
    let blogredopentitleAr = '';
    let blogredopenword = '';
    let blogredopenwordAr = '';
    let blogpargraph4 = '';
    let blogpargraph4Ar = '';
    let blogtitle2 = '';
    let blogtitle2Ar = '';
    let blogtitle2paragraph = '';
    let blogtitle2paragraphAr = '';
    let blogblogCaption = '';
    let blogblogCaptionArb = '';
    let blogImgUrl = '';
    let recTimestamp = new Date();

    if (this.editMode) {
      // const recipe = this.recipeservice.getRecipe(this.id);
      let recipe;
      this.firestoreService.get_blog(this.ids).subscribe((e) => {
        console.log(e);
        recipe = {
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
        // console.log(recipe);
        // console.log(recipe.id);
        // console.log(recipe.idd);
        // console.log(recipe.name);
        // console.log(recipe.pcrtest);
        // console.log(recipe.report);
        blogblogName = recipe.blogName;
        blogblogNameArb = recipe.blogNameAr;
        blogtitle = recipe.title;
        blogtitleAr = recipe.titleAr;
        blogcategory = recipe.category;
        blogcategoryAr = recipe.categoryAr;
        blogpargraph1 = recipe.pargraph1;
        blogpargraph1Ar = recipe.pargraph1Ar;
        blogpargraph2 = recipe.pargraph2;
        blogpargraph2Ar = recipe.pargraph2Ar;
        blogpargraph3 = recipe.pargraph3;
        blogpargraph3Ar = recipe.pargraph3Ar;
        blogredlineparagprah1 = recipe.redlineparagprah1;
        blogredlineparagprah1Ar = recipe.redlineparagprah1Ar;
        blogredlineparagprah2 = recipe.redlineparagprah2;
        blogredlineparagprah2Ar = recipe.redlineparagprah2Ar;
        blogredopentitle = recipe.redopentitle;
        blogredopentitleAr = recipe.redopentitleAr;
        blogredopenword = recipe.redopenword;
        blogredopenwordAr = recipe.redopenwordAr;
        blogpargraph4 = recipe.pargraph4;
        blogpargraph4Ar = recipe.pargraph4Ar;
        blogtitle2 = recipe.title2;
        blogtitle2Ar = recipe.title2Ar;
        blogtitle2paragraph = recipe.title2paragrap;
        blogtitle2paragraphAr = recipe.title2paragraphAr;
        blogblogCaption = recipe.blogCaption;
        blogblogCaptionArb = recipe.blogCaptionArb;
        blogImgUrl = recipe.blogImgUrl;
        recTimestamp = new Date();

        this.blogNam = blogblogName;
        this.blogNameAr = blogblogNameArb;
        this.titl = blogtitle;
        this.titlAr = blogtitleAr;
        this.categor = blogcategory;
        this.categorAr = blogcategoryAr;
        this.pargrap1 = blogpargraph1;
        this.pargrap1Ar = blogpargraph1Ar;
        this.pargrap2 = blogpargraph2;
        this.pargrap2Ar = blogpargraph2Ar;
        this.pargrap3 = blogpargraph3;
        this.pargrap3Ar = blogpargraph3Ar;
        this.redlineparagpra1 = blogredlineparagprah1;
        this.redlineparagpra1Ar = blogredlineparagprah1Ar;
        this.redlineparagpra2 = blogredlineparagprah2;
        this.redlineparagpra2Ar = blogredlineparagprah2Ar;
        this.redopentitl = blogredopentitle;
        this.redopentitlAr = blogredopentitleAr;
        this.redopenwor = blogredopenword;
        this.redopenworAr = blogredopenwordAr;
        this.pargrap4 = blogpargraph4;
        this.pargrap4Ar = blogpargraph4Ar;
        this.titl2 = blogtitle2;
        this.titl2Ar = blogtitle2Ar;
        this.titl2paragraph = blogtitle2paragraph;
        this.titl2paragraphAr = blogtitle2paragraphAr;
        this.blogCaptio = blogblogCaption;
        this.blogCaptioArb = blogblogCaptionArb;
        this.blogImgUr = blogImgUrl;
      });
      // recipeIDD = recipe.idd;
      // recipeName = recipe.name;
      // recipeLast = recipe.last;
      // recipePcr = recipe.pcrtest;
      // recipeReport = recipe.report;
    }

    this.recipeForm = new FormGroup({
      blogName: new FormControl(blogblogName),
      blogNameArb: new FormControl(blogblogNameArb),
      title: new FormControl(blogtitle),
      titleAr: new FormControl(blogtitleAr),
      category: new FormControl(blogcategory),
      categoryAr: new FormControl(blogcategoryAr),
      pargraph1: new FormControl(blogpargraph1),
      pargraph1Ar: new FormControl(blogpargraph1Ar),
      pargraph2: new FormControl(blogpargraph2),
      pargraph2Ar: new FormControl(blogpargraph2Ar),
      pargraph3: new FormControl(blogpargraph3),
      pargraph3Ar: new FormControl(blogpargraph3Ar),
      redlineparagprah1: new FormControl(blogredlineparagprah1),
      redlineparagprah1Ar: new FormControl(blogredlineparagprah1Ar),
      redlineparagprah2: new FormControl(blogredlineparagprah2),
      redlineparagprah2Ar: new FormControl(blogredlineparagprah2Ar),
      redopentitle: new FormControl(blogredopentitle),
      redopentitleAr: new FormControl(blogredopentitleAr),
      redopenword: new FormControl(blogredopenword),
      redopenwordAr: new FormControl(blogredopenwordAr),
      pargraph4: new FormControl(blogpargraph4),
      pargraph4Ar: new FormControl(blogpargraph4Ar),
      title2: new FormControl(blogtitle2),
      title2Ar: new FormControl(blogtitle2Ar),
      title2paragraph: new FormControl(blogtitle2paragraph),
      title2paragraphAr: new FormControl(blogtitle2paragraphAr),
      blogCaption: new FormControl(blogblogCaption),
      blogCaptionArb: new FormControl(blogblogCaptionArb),
      blogImgUrl: new FormControl(blogImgUrl),

      timestamp: new FormControl(recTimestamp),
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
