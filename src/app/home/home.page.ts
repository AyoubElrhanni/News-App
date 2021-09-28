import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFeedsService } from '../news-feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public folder: string;
  articles: any
  constructor(private newsService:NewsFeedsService) {
    this.loadNews();
  }
  loadNews(){
    this.newsService.getNews("top-headlines?country=us").subscribe( news =>{
      this.articles =news['articles'];
    })
  }
}
