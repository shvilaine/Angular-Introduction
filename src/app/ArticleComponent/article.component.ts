import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article = 
  {
    title: 'Article n°1 - Septembre 2024',
    author: 'Hélène S. Vilaine',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sunt repellendus expedita beatae minus magnam rerum ratione molestiae fuga architecto!',
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment: '',
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
