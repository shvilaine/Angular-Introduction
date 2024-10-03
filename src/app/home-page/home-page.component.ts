import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticlePageComponent } from '../article-page/article-page.component';
import { ArticleCardComponent } from "../article-card/article-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticlePageComponent, ArticleCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  likesListener!: string | null;

  articlesList: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
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

  anyArticleIsPublished = this.articlesList.some(
    (article) => article.isPublished === true
  );

  handleNotification(title: string) {
    alert(`L\'article ${title} a été liké!`);  
    }
}
