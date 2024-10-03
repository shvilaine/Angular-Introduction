import { Article } from '../models/article.model';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, NotFoundComponent, HomePageComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  article?: Article;
  trendyArticle = 'darkred';

  articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 120,
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75,
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200,
    },
    {
      id: 4,
      title: 'Introduction à Spring',
      author: 'Thomas',
      content: "Faire les Depuis ordinateurs nucléaires serait salle mort les seul Bien savait tous cracheraient étaient tous l’économie dirigée salle sur.",
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 50,
    },
    {
      id: 5,
      title: 'Développeur, un métier à l\'apprentissage constant',
      author: 'Sophie',
      content: "Venez à la Wild Code School pour vous former, vous verrez, c'est sympa!",
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 350,
    },
  ];

  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));

      this.article = this.articles.find(
        (article) => article.id === this.articleId
      );
    });
  }
}
