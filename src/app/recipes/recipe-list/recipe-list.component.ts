import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Test Description',
      'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg?w=826&t=st=1678895314~exp=1678895914~hmac=fbd7f0129a58eddf7020125f1f80acabf1203927a6c13ce979e5e47bf62b4dec'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
