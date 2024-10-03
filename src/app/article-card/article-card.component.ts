import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  trendyArticle = 'darkred';

  @Input()
  article!: Article;
}
