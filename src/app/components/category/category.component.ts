import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category, CategoryInfo } from '../../models/category';
import { FirebaseService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryInfo: CategoryInfo[];

  constructor(
    private modalService: ModalService,
    private firebaseSrvice: FirebaseService) { }

  ngOnInit() {
    this.firebaseSrvice.getCatgory().subscribe((item) => {
      this.categoryInfo = item;
    });
  }

  add() {
    this.modalService.category().result.then((response: Category) => {
      this.firebaseSrvice.saveCategory(response);
    }, () => { });
  }

  edit(data: CategoryInfo) {
    this.modalService.category(data).result.then((response: Category) => {
      this.firebaseSrvice.updateCategory(data.key, response);
    }, () => { });
  }

  delete(data: CategoryInfo) {
    this.firebaseSrvice.deleteCategory(data.key);
  }

}
