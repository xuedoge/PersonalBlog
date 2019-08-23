import { Component } from '@angular/core';
import { ClassService } from 'src/app/service/class/class.service';
import { Classes } from 'src/app/beans/classes';

@Component({
  selector: 'app-showmodal',
  templateUrl: './showmodal.component.html'
})
export class ShowmodalComponent {
  isVisible = false;
  isOkLoading = false;
  className: string;
  class = new Classes();
  constructor(private classService: ClassService) { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.classService.addClass(this.className);
      this.isVisible = false;
      this.isOkLoading = false;
    }, 0);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
