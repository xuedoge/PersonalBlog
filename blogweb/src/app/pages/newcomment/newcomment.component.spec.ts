import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewcommentComponent } from './newcomment.component';

describe('NewcommentComponent', () => {
  let component: NewcommentComponent;
  let fixture: ComponentFixture<NewcommentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
