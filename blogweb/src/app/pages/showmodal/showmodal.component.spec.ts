import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowmodalComponent } from './showmodal.component';

describe('ShowmodalComponent', () => {
  let component: ShowmodalComponent;
  let fixture: ComponentFixture<ShowmodalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
