import { TestBed, async } from '@angular/core/testing';
import { AngularHelpComponent } from './angular-help.component';

describe('AngularHelpComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AngularHelpComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularHelpComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'untitled'`, () => {
    const fixture = TestBed.createComponent(AngularHelpComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('untitled');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularHelpComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('untitled app is running!');
  });
});
