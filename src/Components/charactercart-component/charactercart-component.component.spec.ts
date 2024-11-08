import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCartComponentComponent } from './charactercart-component.component';

describe('CharacterCartComponent', () => {
  let component: CharacterCartComponentComponent;  // Use the correct component name
  let fixture: ComponentFixture<CharacterCartComponentComponent>;  // Use the correct component name

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCartComponentComponent]  // Correctly adding the component here
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCartComponentComponent);  // Correctly creating the component
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
